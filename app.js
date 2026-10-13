// ==========================================================================
// FWRD APPLICATION LOGIC & STATE MANAGEMENT
// Multi-Page Luxury E-Commerce Architecture
// ==========================================================================

function safeLoadCart() {
  try {
    const raw = localStorage.getItem('fwrd_cart');
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(item => item && item.product && typeof item.product.price === 'number' && typeof item.quantity === 'number');
  } catch (e) {
    console.warn('Failed parsing stored cart, resetting:', e);
    return [];
  }
}

function safeLoadWishlist() {
  try {
    const raw = localStorage.getItem('fwrd_wishlist');
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (e) {
    console.warn('Failed parsing stored wishlist, resetting:', e);
    return new Set();
  }
}

function safeCreateIcons() {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icon rendering warning:', e);
    }
  }
}

const state = {
  currentMainCategory: 'clothing', // default, overridden by page
  currentSubcategory: 'all',
  selectedDesigners: new Set(),
  selectedSizes: new Set(),
  selectedColors: new Set(),
  selectedLengths: new Set(),
  maxPrice: 5000,
  searchQuery: '',
  sortBy: 'featured',
  gridColumns: 4,
  cart: safeLoadCart(),
  wishlist: safeLoadWishlist(),
  appliedPromo: null,
  quickViewProduct: null,
  quickViewSelectedSize: null
};

const allColors = [
  { name: 'Black', hex: '#000000' },
  { name: 'Ivory', hex: '#fcfbfa', border: true },
  { name: 'Scarlet Red', hex: '#b31b1b' },
  { name: 'Emerald', hex: '#0a3d2c' },
  { name: 'Champagne', hex: '#e3d3b7' },
  { name: 'Blue', hex: '#3b5998' },
  { name: 'Olive Gold', hex: '#606b52' }
];

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Detect category from URL hash, body data-attribute, or URL pathname
  const hash = window.location.hash.replace('#', '').toLowerCase();
  const bodyCategory = document.body.getAttribute('data-page-category');
  const pathName = window.location.pathname.split('/').pop().replace('.html', '').toLowerCase();

  if (typeof categoryConfigs !== 'undefined') {
    if (hash && categoryConfigs[hash]) {
      state.currentMainCategory = hash;
    } else if (bodyCategory && categoryConfigs[bodyCategory]) {
      state.currentMainCategory = bodyCategory;
    } else if (categoryConfigs[pathName]) {
      state.currentMainCategory = pathName;
    }
  }

  updateCategoryView();
  updateCartUI();
  updateWishlistUI();
  safeCreateIcons();
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash && categoryConfigs[hash]) {
    state.currentMainCategory = hash;
    state.currentSubcategory = 'all';
    state.selectedDesigners.clear();
    state.selectedSizes.clear();
    state.selectedColors.clear();
    state.selectedLengths.clear();
    state.searchQuery = '';
    state.maxPrice = 5000;
    updateCategoryView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// -------------------------------------------------------------
// CATEGORY CONTROLLER
// -------------------------------------------------------------
function setMainCategory(categoryKey) {
  // If we are on a separate dedicated page and user clicked a different category, navigate to that page
  const currentPageCat = document.body.getAttribute('data-page-category');
  if (currentPageCat && currentPageCat !== categoryKey) {
    if (categoryKey === 'dresses') { window.location.href = 'dresses.html'; return; }
    if (categoryKey === 'clothing') { window.location.href = 'clothing.html'; return; }
    if (categoryKey === 'shoes') { window.location.href = 'shoes.html'; return; }
    if (categoryKey === 'bags') { window.location.href = 'bags.html'; return; }
    if (categoryKey === 'accessories') { window.location.href = 'accessories.html'; return; }
    if (categoryKey === 'all') { window.location.href = 'index.html'; return; }
  }

  state.currentMainCategory = categoryKey;
  state.currentSubcategory = 'all';
  state.selectedDesigners.clear();
  state.selectedSizes.clear();
  state.selectedColors.clear();
  state.selectedLengths.clear();
  state.searchQuery = '';
  state.maxPrice = 5000;

  updateCategoryView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCategoryView() {
  const catKey = state.currentMainCategory;
  const config = categoryConfigs[catKey] || {
    title: catKey === 'all' ? "The Luxury Collection" : catKey.toUpperCase().replace('-', ' '),
    breadcrumb: catKey === 'all' ? "All Designers" : catKey.charAt(0).toUpperCase() + catKey.slice(1),
    description: "Curated selections from the world's most prestigious luxury houses and avant-garde designers.",
    pills: [{ id: 'all', label: 'All Items' }]
  };

  // 1. Update Navigation UI Tabs
  document.querySelectorAll('.main-nav-link').forEach(link => {
    const linkCat = link.getAttribute('data-category');
    if (linkCat === catKey) {
      link.className = 'main-nav-link is-active text-black font-semibold';
    } else if (linkCat === 'sale') {
      link.className = 'main-nav-link text-rose-700 hover:text-rose-950 font-semibold';
    } else {
      link.className = 'main-nav-link text-neutral-500 hover:text-black font-medium';
    }
  });

  // 2. Update Breadcrumbs & Hero Title
  const breadcrumbEl = document.getElementById('heroBreadcrumb');
  const titleEl = document.getElementById('heroCategoryTitle');
  const descEl = document.getElementById('heroCategoryDesc');

  if (breadcrumbEl) breadcrumbEl.textContent = config.breadcrumb;
  if (titleEl) titleEl.textContent = config.title;
  if (descEl) descEl.textContent = config.description;

  // 3. Render Dynamic Subcategory Pills
  renderSubcategoryPills(config.pills);

  // 4. Update Filter Sidebar Controls for this category
  initFilterControls();

  // 5. Render Products
  renderProducts();
}

function renderSubcategoryPills(pills) {
  const container = document.getElementById('subcategoryPillsContainer');
  if (!container) return;

  container.innerHTML = pills.map((pill, idx) => {
    const isActive = state.currentSubcategory === pill.id || (idx === 0 && state.currentSubcategory === 'all');
    return `
      <button 
        onclick="setSubcategory('${pill.id}')" 
        class="subcategory-btn ${isActive ? 'active-pill border-black bg-black text-white font-semibold' : 'border-neutral-200 text-neutral-700 hover:border-black font-medium'} px-4 py-1.5 text-xs uppercase tracking-tightLuxury border transition whitespace-nowrap" 
        data-cat="${pill.id}"
      >
        ${pill.label}
      </button>
    `;
  }).join('');
}

// -------------------------------------------------------------
// FILTER CONTROLS POPULATION
// -------------------------------------------------------------
function getCategoryProductsPool() {
  if (state.currentMainCategory === 'all') {
    return productsData;
  }
  if (state.currentMainCategory === 'whats-new') {
    return productsData.filter(p => p.isNew);
  }
  if (state.currentMainCategory === 'sale') {
    return productsData.filter(p => p.originalPrice && p.originalPrice > p.price);
  }
  return productsData.filter(p => p.mainCategory === state.currentMainCategory);
}

function initFilterControls() {
  const pool = getCategoryProductsPool();

  // 1. Populate Available Designers for this category
  const availableDesigners = [...new Set(pool.map(p => p.designer))].sort();
  const designerList = document.getElementById('designerFilterList');
  if (designerList) {
    designerList.innerHTML = availableDesigners.map(designer => {
      const count = pool.filter(p => p.designer === designer).length;
      const isChecked = state.selectedDesigners.has(designer);
      return `
        <label class="flex items-center justify-between py-1 cursor-pointer hover:text-black group">
          <div class="flex items-center space-x-2">
            <input 
              type="checkbox" 
              value="${designer}" 
              ${isChecked ? 'checked' : ''}
              onchange="handleDesignerToggle('${designer}')"
              class="rounded-none border-neutral-300 text-black focus:ring-black accent-black w-3.5 h-3.5"
            />
            <span class="text-xs group-hover:font-medium tracking-wide">${designer}</span>
          </div>
          <span class="text-[10px] text-neutral-400">(${count})</span>
        </label>
      `;
    }).join('');
  }

  // 2. Populate Available Sizes
  const sizeList = document.getElementById('sizeFilterList');
  if (sizeList) {
    const rawSizes = [];
    pool.forEach(p => p.sizes.forEach(s => rawSizes.push(s.split(' ')[0])));
    const availableSizes = [...new Set(rawSizes)].slice(0, 12);

    sizeList.innerHTML = availableSizes.map(size => {
      const isSelected = state.selectedSizes.has(size);
      return `
        <button 
          type="button"
          onclick="handleSizeToggle('${size}', this)"
          class="border ${isSelected ? 'border-black bg-black text-white' : 'border-neutral-200'} py-1.5 text-[11px] font-medium tracking-wider uppercase hover:border-black transition"
        >
          ${size}
        </button>
      `;
    }).join('');
  }

  // 3. Populate Colors
  const colorList = document.getElementById('colorFilterList');
  if (colorList) {
    colorList.innerHTML = allColors.map(color => {
      const isSelected = state.selectedColors.has(color.name);
      return `
        <button 
          type="button"
          title="${color.name}"
          onclick="handleColorToggle('${color.name}', this)"
          class="w-6 h-6 rounded-full relative transition transform hover:scale-110 flex items-center justify-center ${color.border ? 'border border-neutral-300' : ''}"
          style="background-color: ${color.hex};"
        >
          <span class="checkmark ${isSelected ? '' : 'hidden'} text-white text-[10px] font-bold ${color.name === 'Ivory' || color.name === 'Champagne' ? '!text-black' : ''}">✓</span>
        </button>
      `;
    }).join('');
  }

  // 4. Populate Types/Subcategories in Filter Sidebar
  const lengthList = document.getElementById('lengthFilterList');
  if (lengthList) {
    const subcats = [...new Set(pool.map(p => p.length || p.subcategories[0]))];
    lengthList.innerHTML = subcats.map(sub => {
      const count = pool.filter(p => p.length === sub || p.subcategories.includes(sub)).length;
      const isChecked = state.selectedLengths.has(sub);
      return `
        <label class="flex items-center justify-between py-1 cursor-pointer hover:text-black group">
          <div class="flex items-center space-x-2">
            <input 
              type="checkbox" 
              value="${sub}" 
              ${isChecked ? 'checked' : ''}
              onchange="handleLengthToggle('${sub}')"
              class="rounded-none border-neutral-300 text-black focus:ring-black accent-black w-3.5 h-3.5"
            />
            <span class="text-xs group-hover:font-medium tracking-wide">${sub}</span>
          </div>
          <span class="text-[10px] text-neutral-400">(${count})</span>
        </label>
      `;
    }).join('');
  }
}

// -------------------------------------------------------------
// FILTERING & SORTING LOGIC
// -------------------------------------------------------------
function getFilteredProducts() {
  const pool = getCategoryProductsPool();

  return pool.filter(p => {
    // Subcategory Filter Pill
    if (state.currentSubcategory !== 'all') {
      const matchesSub = p.subcategories.includes(state.currentSubcategory) || 
                         p.length === state.currentSubcategory || 
                         p.mainCategory === state.currentSubcategory;
      if (!matchesSub) return false;
    }

    // Designer Filter
    if (state.selectedDesigners.size > 0 && !state.selectedDesigners.has(p.designer)) {
      return false;
    }

    // Size Filter
    if (state.selectedSizes.size > 0) {
      const hasSize = p.sizes.some(s => Array.from(state.selectedSizes).some(selected => s.includes(selected)));
      if (!hasSize) return false;
    }

    // Color Filter
    if (state.selectedColors.size > 0 && !state.selectedColors.has(p.color)) {
      return false;
    }

    // Length/Type Filter
    if (state.selectedLengths.size > 0 && !state.selectedLengths.has(p.length)) {
      return false;
    }

    // Price Filter
    if (p.price > state.maxPrice) {
      return false;
    }

    // Search Query Filter
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const match = p.designer.toLowerCase().includes(q) ||
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.color.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  }).sort((a, b) => {
    switch (state.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'featured':
      default:
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    }
  });
}

// -------------------------------------------------------------
// RENDER PRODUCTS GRID
// -------------------------------------------------------------
function renderProducts() {
  const filtered = getFilteredProducts();
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const countDisplay = document.getElementById('totalProductsCount');

  if (countDisplay) {
    countDisplay.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    if (grid) grid.innerHTML = '';
    emptyState?.classList.remove('hidden');
    renderActiveFilterBadges();
    return;
  }

  emptyState?.classList.add('hidden');

  if (!grid) return;

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.has(product.id);
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;

    return `
      <div class="product-card group flex flex-col relative fade-in" data-product-id="${product.id}">
        <!-- Image Container with Dual Photo Flip -->
        <div class="relative w-full aspect-fashion bg-fwrd-lightGray overflow-hidden mb-3 cursor-pointer" onclick="openQuickView(${product.id})">
          
          <!-- Primary Image -->
          <img 
            src="${product.image1}" 
            alt="${product.designer} ${product.title}" 
            loading="lazy"
            class="img-primary absolute inset-0 w-full h-full object-cover object-top"
          />

          <!-- Secondary Runway/Detail View on Hover -->
          <img 
            src="${product.image2}" 
            alt="${product.designer} ${product.title} Alternate View" 
            loading="lazy"
            class="img-secondary absolute inset-0 w-full h-full object-cover object-top"
          />

          <!-- Editorial Badge -->
          ${product.badge ? `
            <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black text-[9px] font-bold uppercase tracking-luxury px-2 py-1 shadow-sm">
              ${product.badge}
            </span>
          ` : ''}

          <!-- Wishlist Heart Button -->
          <button 
            onclick="toggleWishlist(${product.id}, event)"
            aria-label="Save to Wishlist"
            class="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-black transition z-10 shadow-sm"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'heart-active' : ''}"></i>
          </button>

          <!-- Floating Quick View Action -->
          <button 
            onclick="openQuickView(${product.id}); if(event) event.stopPropagation();"
            class="quick-view-btn absolute bottom-12 inset-x-4 bg-white/95 hover:bg-black hover:text-white text-black py-2.5 text-[11px] font-bold uppercase tracking-luxury transition shadow-md flex items-center justify-center space-x-1"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            <span>Quick View</span>
          </button>

          <!-- Quick Size Hover Bar for Instant Add to Bag -->
          <div class="quick-sizes absolute bottom-0 inset-x-0 bg-black/90 backdrop-blur-sm text-white py-2 px-2 flex items-center justify-center space-x-1" onclick="if(event) event.stopPropagation();">
            <span class="text-[9px] uppercase tracking-wider text-neutral-300 mr-1 hidden sm:inline">Add:</span>
            ${product.sizes.slice(0, 4).map(size => {
              const shortSize = size.split(' ')[0];
              return `
                <button 
                  onclick="quickAddToCart(${product.id}, '${size}', event); if(event) event.stopPropagation();"
                  class="text-[10px] uppercase font-semibold px-2 py-0.5 border border-neutral-600 hover:border-white hover:bg-white hover:text-black transition"
                  title="Add size ${size}"
                >
                  ${shortSize}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Meta Details: Designer, Title, Price -->
        <div class="flex flex-col space-y-1">
          <a href="javascript:void(0)" onclick="openQuickView(${product.id})" class="font-bold text-[12px] uppercase tracking-luxury text-black hover:text-neutral-600 transition">
            ${product.designer}
          </a>
          <p class="text-xs text-neutral-500 line-clamp-1 font-light leading-snug">
            ${product.title}
          </p>
          <div class="flex items-center space-x-2 pt-0.5">
            <span class="text-xs font-bold text-black tracking-tight">
              $${product.price.toLocaleString()}
            </span>
            ${hasDiscount ? `
              <span class="text-xs text-neutral-400 line-through">
                $${product.originalPrice.toLocaleString()}
              </span>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  safeCreateIcons();
  renderActiveFilterBadges();
}

// -------------------------------------------------------------
// FILTER INTERACTIONS
// -------------------------------------------------------------
function setSubcategory(category) {
  state.currentSubcategory = category;
  
  // Update Pills UI
  document.querySelectorAll('.subcategory-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.className = 'subcategory-btn active-pill px-4 py-1.5 text-xs uppercase tracking-tightLuxury font-semibold border border-black bg-black text-white transition whitespace-nowrap';
    } else {
      btn.className = 'subcategory-btn px-4 py-1.5 text-xs uppercase tracking-tightLuxury font-medium border border-neutral-200 text-neutral-700 hover:border-black transition whitespace-nowrap';
    }
  });

  renderProducts();
}

function handleDesignerToggle(designer) {
  if (state.selectedDesigners.has(designer)) {
    state.selectedDesigners.delete(designer);
  } else {
    state.selectedDesigners.add(designer);
  }
  renderProducts();
}

function handleSizeToggle(size, btn) {
  if (state.selectedSizes.has(size)) {
    state.selectedSizes.delete(size);
    btn.classList.remove('bg-black', 'text-white', 'border-black');
    btn.classList.add('border-neutral-200');
  } else {
    state.selectedSizes.add(size);
    btn.classList.add('bg-black', 'text-white', 'border-black');
    btn.classList.remove('border-neutral-200');
  }
  renderProducts();
}

function handleColorToggle(colorName, btn) {
  const check = btn.querySelector('.checkmark');
  if (state.selectedColors.has(colorName)) {
    state.selectedColors.delete(colorName);
    check.classList.add('hidden');
  } else {
    state.selectedColors.add(colorName);
    check.classList.remove('hidden');
  }
  renderProducts();
}

function handleLengthToggle(len) {
  if (state.selectedLengths.has(len)) {
    state.selectedLengths.delete(len);
  } else {
    state.selectedLengths.add(len);
  }
  renderProducts();
}

function handlePriceFilter(val) {
  state.maxPrice = Number(val);
  const display = document.getElementById('priceDisplay');
  if (display) {
    display.textContent = `$${Number(val).toLocaleString()}`;
  }
  renderProducts();
}

function handleSearch(query) {
  state.searchQuery = query;
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    if (query.trim() !== '') {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  handleSearch('');
}

function handleSort(sortVal) {
  state.sortBy = sortVal;
  renderProducts();
}

function setGridColumns(cols) {
  state.gridColumns = cols;
  const grid = document.getElementById('productsGrid');
  const btn2 = document.getElementById('btnGrid2');
  const btn4 = document.getElementById('btnGrid4');

  if (cols === 2) {
    grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-5xl mx-auto';
    btn2.className = 'p-1.5 text-black hover:text-black transition';
    btn4.className = 'p-1.5 text-neutral-400 hover:text-black transition';
  } else {
    grid.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12';
    btn4.className = 'p-1.5 text-black hover:text-black transition';
    btn2.className = 'p-1.5 text-neutral-400 hover:text-black transition';
  }
}

function resetAllFilters() {
  state.currentSubcategory = 'all';
  state.selectedDesigners.clear();
  state.selectedSizes.clear();
  state.selectedColors.clear();
  state.selectedLengths.clear();
  state.maxPrice = 5000;
  state.searchQuery = '';
  
  const priceSlider = document.getElementById('priceRange');
  if (priceSlider) priceSlider.value = 5000;
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceDisplay) priceDisplay.textContent = '$5,000+';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) clearSearchBtn.classList.add('hidden');

  document.querySelectorAll('#filterSidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('#sizeFilterList button').forEach(btn => {
    btn.classList.remove('bg-black', 'text-white', 'border-black');
    btn.classList.add('border-neutral-200');
  });
  document.querySelectorAll('#colorFilterList .checkmark').forEach(cm => cm.classList.add('hidden'));

  setSubcategory('all');
  renderProducts();
}

function renderActiveFilterBadges() {
  const container = document.getElementById('activeTagsContainer');
  const clearAllBtn = document.getElementById('clearAllFiltersBtn');
  const activeBadge = document.getElementById('activeFilterBadge');

  const totalActive = state.selectedDesigners.size + 
                      state.selectedSizes.size + 
                      state.selectedColors.size + 
                      state.selectedLengths.size + 
                      (state.maxPrice < 5000 ? 1 : 0);

  if (activeBadge) {
    if (totalActive > 0) {
      activeBadge.textContent = totalActive;
      activeBadge.classList.remove('hidden');
    } else {
      activeBadge.classList.add('hidden');
    }
  }

  if (!container) return;

  if (totalActive === 0) {
    container.innerHTML = '';
    clearAllBtn?.classList.add('hidden');
    return;
  }

  clearAllBtn?.classList.remove('hidden');

  let tagsHtml = '';

  state.selectedDesigners.forEach(des => {
    tagsHtml += `
      <span class="inline-flex items-center space-x-1 bg-neutral-100 text-black text-[10px] uppercase font-semibold px-2 py-1 border border-neutral-300">
        <span>${des}</span>
        <button onclick="handleDesignerToggle('${des}')" class="hover:text-red-600">×</button>
      </span>
    `;
  });

  state.selectedSizes.forEach(size => {
    tagsHtml += `
      <span class="inline-flex items-center space-x-1 bg-neutral-100 text-black text-[10px] uppercase font-semibold px-2 py-1 border border-neutral-300">
        <span>Size: ${size}</span>
        <button onclick="removeSizeFilter('${size}')" class="hover:text-red-600">×</button>
      </span>
    `;
  });

  state.selectedColors.forEach(color => {
    tagsHtml += `
      <span class="inline-flex items-center space-x-1 bg-neutral-100 text-black text-[10px] uppercase font-semibold px-2 py-1 border border-neutral-300">
        <span>${color}</span>
        <button onclick="removeColorFilter('${color}')" class="hover:text-red-600">×</button>
      </span>
    `;
  });

  if (state.maxPrice < 5000) {
    tagsHtml += `
      <span class="inline-flex items-center space-x-1 bg-neutral-100 text-black text-[10px] uppercase font-semibold px-2 py-1 border border-neutral-300">
        <span>Under $${state.maxPrice.toLocaleString()}</span>
        <button onclick="handlePriceFilter(5000); document.getElementById('priceRange').value=5000;" class="hover:text-red-600">×</button>
      </span>
    `;
  }

  container.innerHTML = tagsHtml;
}

function removeSizeFilter(size) {
  state.selectedSizes.delete(size);
  document.querySelectorAll('#sizeFilterList button').forEach(btn => {
    if (btn.textContent.trim() === size) {
      btn.classList.remove('bg-black', 'text-white', 'border-black');
      btn.classList.add('border-neutral-200');
    }
  });
  renderProducts();
}

function removeColorFilter(color) {
  state.selectedColors.delete(color);
  document.querySelectorAll('#colorFilterList button').forEach(btn => {
    if (btn.getAttribute('title') === color) {
      btn.querySelector('.checkmark').classList.add('hidden');
    }
  });
  renderProducts();
}

function toggleFilterSidebar() {
  const sidebar = document.getElementById('filterSidebar');
  const overlay = document.getElementById('filterOverlay');
  if (sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

// -------------------------------------------------------------
// QUICK VIEW MODAL
// -------------------------------------------------------------
function openQuickView(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  state.quickViewProduct = product;
  state.quickViewSelectedSize = product.sizes[0];

  document.getElementById('qvMainImage').src = product.image1;
  document.getElementById('qvBadge').textContent = product.badge || 'EXCLUSIVE';
  document.getElementById('qvDesigner').textContent = product.designer;
  document.getElementById('qvTitle').textContent = product.title;
  document.getElementById('qvPrice').textContent = `$${product.price.toLocaleString()}`;
  document.getElementById('qvDescription').textContent = product.description;
  document.getElementById('qvFabric').textContent = product.fabric;

  // Render Thumbnails
  const thumbs = document.getElementById('qvThumbnails');
  thumbs.innerHTML = `
    <button onclick="switchQuickViewImage('${product.image1}', this)" class="w-14 h-18 border-2 border-black overflow-hidden aspect-fashion">
      <img src="${product.image1}" class="w-full h-full object-cover object-top" />
    </button>
    <button onclick="switchQuickViewImage('${product.image2}', this)" class="w-14 h-18 border border-neutral-300 overflow-hidden aspect-fashion hover:border-black">
      <img src="${product.image2}" class="w-full h-full object-cover object-top" />
    </button>
  `;

  // Render Sizes
  const sizeCont = document.getElementById('qvSizeContainer');
  sizeCont.innerHTML = product.sizes.map((s, idx) => `
    <button 
      onclick="selectQuickViewSize('${s}', this)"
      class="py-2 text-[11px] font-semibold uppercase tracking-wider border ${idx === 0 ? 'border-black bg-black text-white' : 'border-neutral-200 text-neutral-800 hover:border-black'} transition"
    >
      ${s.split(' ')[0]}
    </button>
  `).join('');

  document.getElementById('quickViewModal').classList.remove('hidden');
}

function switchQuickViewImage(src, btn) {
  document.getElementById('qvMainImage').src = src;
  document.querySelectorAll('#qvThumbnails button').forEach(b => {
    b.className = 'w-14 h-18 border border-neutral-300 overflow-hidden aspect-fashion hover:border-black';
  });
  btn.className = 'w-14 h-18 border-2 border-black overflow-hidden aspect-fashion';
}

function selectQuickViewSize(size, btn) {
  state.quickViewSelectedSize = size;
  document.querySelectorAll('#qvSizeContainer button').forEach(b => {
    b.className = 'py-2 text-[11px] font-semibold uppercase tracking-wider border border-neutral-200 text-neutral-800 hover:border-black transition';
  });
  btn.className = 'py-2 text-[11px] font-semibold uppercase tracking-wider border border-black bg-black text-white transition';
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.add('hidden');
  state.quickViewProduct = null;
}

function addQuickViewToCart() {
  if (!state.quickViewProduct || !state.quickViewSelectedSize) return;
  addToCart(state.quickViewProduct, state.quickViewSelectedSize);
  closeQuickView();
  toggleCartDrawer(true);
}

// -------------------------------------------------------------
// CART & SHOPPING BAG LOGIC
// -------------------------------------------------------------
function quickAddToCart(productId, size, event) {
  if (event) event.stopPropagation();
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  addToCart(product, size);
  showToast(`Added ${product.designer} (${size}) to your bag`);
}

function addToCart(product, size) {
  const existing = state.cart.find(item => item.product.id === product.id && item.size === size);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      product: product,
      size: size,
      quantity: 1
    });
  }
  saveCart();
  updateCartUI();
}

function updateCartQuantity(productId, size, delta) {
  const itemIndex = state.cart.findIndex(i => i.product.id === productId && i.size === size);
  if (itemIndex > -1) {
    state.cart[itemIndex].quantity += delta;
    if (state.cart[itemIndex].quantity <= 0) {
      state.cart.splice(itemIndex, 1);
    }
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(productId, size) {
  state.cart = state.cart.filter(i => !(i.product.id === productId && i.size === size));
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('fwrd_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  if (!Array.isArray(state.cart)) state.cart = [];
  state.cart = state.cart.filter(item => item && item.product && typeof item.product.price === 'number' && typeof item.quantity === 'number');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCountBadge');
  const countTitle = document.getElementById('cartCountTitle');

  if (badge) badge.textContent = totalCount;
  if (countTitle) countTitle.textContent = totalCount;

  const cartList = document.getElementById('cartItemsList');
  if (!cartList) return;

  if (state.cart.length === 0) {
    cartList.innerHTML = `
      <div class="text-center py-16">
        <i data-lucide="shopping-bag" class="w-10 h-10 text-neutral-300 mx-auto mb-3"></i>
        <h4 class="font-serif text-lg uppercase tracking-wider mb-1">Your Bag is Empty</h4>
        <p class="text-xs text-neutral-400 mb-6">Explore our curated luxury arrivals.</p>
        <button onclick="toggleCartDrawer(false)" class="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-luxury font-semibold hover:bg-neutral-800 transition">
          Continue Shopping
        </button>
      </div>
    `;
    updatePricingTotals(0);
    safeCreateIcons();
    return;
  }

  cartList.innerHTML = state.cart.map(item => `
    <div class="flex space-x-4 border-b border-fwrd-border pb-5">
      <div class="w-20 h-28 bg-fwrd-lightGray aspect-fashion overflow-hidden flex-shrink-0">
        <img src="${item.product.image1}" alt="${item.product.title}" class="w-full h-full object-cover object-top" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-xs uppercase tracking-luxury text-black">${item.product.designer}</h4>
            <button onclick="removeCartItem(${item.product.id}, '${item.size}')" class="text-neutral-400 hover:text-black p-0.5">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <p class="text-xs text-neutral-500 line-clamp-1 mt-0.5">${item.product.title}</p>
          <p class="text-[11px] text-neutral-400 mt-1">Size: <strong>${item.size}</strong></p>
        </div>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border border-neutral-300 text-xs">
            <button onclick="updateCartQuantity(${item.product.id}, '${item.size}', -1)" class="px-2 py-0.5 hover:bg-neutral-100 transition">-</button>
            <span class="px-2 py-0.5 font-semibold">${item.quantity}</span>
            <button onclick="updateCartQuantity(${item.product.id}, '${item.size}', 1)" class="px-2 py-0.5 hover:bg-neutral-100 transition">+</button>
          </div>
          <div class="text-xs font-bold text-black">
            $${(item.product.price * item.quantity).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  updatePricingTotals(subtotal);
  safeCreateIcons();
}

function updatePricingTotals(subtotal) {
  let discount = 0;
  if (state.appliedPromo === 'STACKLY10' || state.appliedPromo === 'FWRD10') {
    discount = subtotal * 0.10;
  } else if (state.appliedPromo === 'STACKLY20' || state.appliedPromo === 'VIP20') {
    discount = subtotal * 0.20;
  }

  const total = Math.max(0, subtotal - discount);

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toLocaleString()}`;
  document.getElementById('cartTotal').textContent = `$${total.toLocaleString()}`;

  const promoRow = document.getElementById('promoRow');
  const discountDisplay = document.getElementById('cartDiscount');
  if (discount > 0) {
    promoRow.classList.remove('hidden');
    discountDisplay.textContent = `-$${discount.toLocaleString()}`;
  } else {
    promoRow.classList.add('hidden');
  }

  const bar = document.getElementById('shippingProgressBar');
  if (bar) bar.style.width = '100%';
}

function applyPromoCode() {
  const input = document.getElementById('promoInput');
  const code = input.value.trim().toUpperCase();

  if (code === 'STACKLY10' || code === 'STACKLY20' || code === 'FWRD10' || code === 'VIP20') {
    state.appliedPromo = code;
    showToast(`VIP Promo Applied: ${(code === 'STACKLY10' || code === 'FWRD10') ? '10% OFF' : '20% OFF'}`);
    updateCartUI();
  } else {
    showToast('Invalid Promotion Code');
  }
}

function toggleCartDrawer(forceOpen) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (forceOpen === true || drawer.classList.contains('translate-x-full')) {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }
}

// -------------------------------------------------------------
// WISHLIST LOGIC
// -------------------------------------------------------------
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast('Removed from Wishlist');
  } else {
    state.wishlist.add(productId);
    showToast('Saved to your Wishlist');
  }

  localStorage.setItem('fwrd_wishlist', JSON.stringify(Array.from(state.wishlist)));
  renderProducts();
  updateWishlistUI();
}

function updateWishlistUI() {
  const count = state.wishlist.size;
  const badge = document.getElementById('wishlistCountBadge');
  const title = document.getElementById('wishlistCountTitle');

  if (badge) {
    badge.textContent = count;
    if (count > 0) badge.classList.remove('hidden');
    else badge.classList.add('hidden');
  }
  if (title) title.textContent = count;

  const wishlistContainer = document.getElementById('wishlistItemsList');
  if (!wishlistContainer) return;

  if (count === 0) {
    wishlistContainer.innerHTML = `
      <div class="text-center py-16">
        <i data-lucide="heart" class="w-10 h-10 text-neutral-300 mx-auto mb-3"></i>
        <h4 class="font-serif text-lg uppercase tracking-wider mb-1">Your Wishlist is Empty</h4>
        <p class="text-xs text-neutral-400 mb-6">Save your favorite luxury pieces for later.</p>
        <button onclick="toggleWishlistDrawer(false)" class="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-luxury font-semibold hover:bg-neutral-800 transition">
          Discover Runway Collections
        </button>
      </div>
    `;
    safeCreateIcons();
    return;
  }

  const savedProducts = productsData.filter(p => state.wishlist.has(p.id));

  wishlistContainer.innerHTML = savedProducts.map(p => `
    <div class="flex space-x-4 border-b border-fwrd-border pb-5">
      <div class="w-20 h-28 bg-fwrd-lightGray aspect-fashion overflow-hidden flex-shrink-0">
        <img src="${p.image1}" alt="${p.title}" class="w-full h-full object-cover object-top" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-xs uppercase tracking-luxury text-black">${p.designer}</h4>
            <button onclick="toggleWishlist(${p.id})" class="text-neutral-400 hover:text-black p-0.5">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <p class="text-xs text-neutral-500 line-clamp-1 mt-0.5">${p.title}</p>
          <div class="text-xs font-bold text-black mt-1">$${p.price.toLocaleString()}</div>
        </div>
        <button 
          onclick="addToCart(productsData.find(x => x.id === ${p.id}), '${p.sizes[0]}'); toggleWishlist(${p.id}); toggleWishlistDrawer(false); toggleCartDrawer(true);" 
          class="w-full py-2 bg-black text-white text-[11px] uppercase tracking-luxury font-semibold hover:bg-neutral-800 transition mt-2"
        >
          Move To Shopping Bag
        </button>
      </div>
    </div>
  `).join('');

  safeCreateIcons();
}

function toggleWishlistDrawer(forceOpen) {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (forceOpen === true || drawer.classList.contains('translate-x-full')) {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }
}

function closeAllDrawers() {
  document.getElementById('cartDrawer').classList.add('translate-x-full');
  document.getElementById('wishlistDrawer').classList.add('translate-x-full');
  document.getElementById('mobileNavDrawer')?.classList.add('-translate-x-full');
  document.getElementById('drawerOverlay').classList.add('hidden');
}

// -------------------------------------------------------------
// TOAST NOTIFICATIONS & FEEDBACK
// -------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msg = document.getElementById('toastMessage');
  msg.textContent = message;
  toast.classList.remove('translate-y-24');
  setTimeout(() => {
    toast.classList.add('translate-y-24');
  }, 2800);
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast('Welcome to FWRD VIP Client Services. 10% Welcome gift emailed.');
  e.target.reset();
}

function checkoutMock() {
  if (state.cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }
  const total = document.getElementById('cartTotal').textContent;
  alert(`FWRD SECURE CHECKOUT\n\nTotal: ${total}\nComplimentary 2-Day Express Courier Shipping\n\nThank you for shopping at Forward by Elyse Walker.`);
  state.cart = [];
  saveCart();
  updateCartUI();
  toggleCartDrawer(false);
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer.classList.contains('-translate-x-full')) {
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}
