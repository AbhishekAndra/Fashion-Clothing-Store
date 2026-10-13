# Stackly — Pure Frontend Luxury Fashion E-Commerce Website

A pixel-perfect, high-performance luxury designer e-commerce website with custom **Stackly** branding, modeled after **[FWRD (Forward by Elyse Walker)](http://fwrd.com/category-dresses/a8e981/?navsrc=main)**.

Built with **100% Pure Frontend** architecture (**HTML5, CSS3, Vanilla JavaScript**, with Tailwind CSS CDN and Lucide Icons). **No backend server, no database, and no runtime server processes required.**

---

## ⚡ Pure Frontend Architecture (Zero Backend Required)

- **Completely Static**: Just open [`index.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/index.html) directly in any web browser (Chrome, Edge, Safari, Firefox).
- **Client-Side State**: Cart, Wishlist, and VIP Promo codes synchronize smoothly across pages using client-side `localStorage`.
- **Zero Dependencies / No Server**: Can be hosted on GitHub Pages, Netlify, Vercel, or opened directly off the local filesystem.

---

## 🌟 Brand Layout & Left-Side Logo Navigation

- **Brand Logo on Left**: The **Stackly** logo is placed on the **left side** of the header navigation bar on both desktop and mobile viewports.
- **Centered Department Navigation**: Clean, centered luxury department links (`ALL`, `CLOTHING`, `SHOES`, `BAGS`, `ACCESSORIES`, `DRESSES`, `WHAT'S NEW`, `SALE`).
- **Right Utility Tools**: Real-time live search field, saved Wishlist drawer with badge counter, and Shopping Bag drawer.

---

## 🖼️ Local Non-Repeated Compressed Image Architecture (`images/`)

All images are stored locally in [`images/`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/images). Every product has its own authentic luxury fashion photography strictly matching its designer, title, and silhouette:

- **160 Completely Unique Runway & Studio Photos**:
  - **Clothing (32 unique images)**: `clothing_101_a.webp` to `clothing_116_b.webp`
  - **Shoes (32 unique images)**: `shoes_201_a.webp` to `shoes_216_b.webp`
  - **Bags (32 unique images)**: `bags_301_a.webp` to `bags_316_b.webp`
  - **Accessories (32 unique images)**: `accessories_401_a.webp` to `accessories_416_b.webp`
  - **Dresses (32 unique images)**: `dresses_1_a.webp` to `dresses_16_b.webp`
- **Zero Duplicate Images**: Every single item has a distinct studio front angle (`_a.webp`) and an alternate runway/editorial hover flip angle (`_b.webp`).
- **Strictly Under 100KB**: 100% of images verified < 100KB (Average: ~30 KB, Min: 5.6 KB, Max: 87.1 KB).
- **Stackly Brand Logo**:
  - `images/logo-transparent.png` — Transparent PNG logo for light headers and cards.
  - `images/logo-white.png` — Pure white transparent logo for dark footers.
  - `images/logo.webp` — Next-gen WebP ultra-compressed logo.
  - `images/logo.png` — Standard crisp PNG version.

---

## 🏛️ Dedicated Department Pages

| Page | URL | Department Description | Catalog Size |
| :--- | :--- | :--- | :--- |
| **Flagship Portal** | [`index.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/index.html) | Complete luxury catalog, visual department spotlights, What's New & Sale | 80 Items |
| **Clothing** | [`clothing.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/clothing.html) | Blazers, silk tops, cashmere knits, denim, tailored pants, outerwear | 16 Items |
| **Shoes** | [`shoes.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/shoes.html) | Architectural heels, runway boots, strappy sandals, Italian mules, loafers | 16 Items |
| **Bags** | [`bags.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/bags.html) | Intrecciato woven leather totes, shoulder bags, mini bags, evening clutches | 16 Items |
| **Accessories** | [`accessories.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/accessories.html) | Acetate sunglasses, calfskin belts, runway jewelry, silk scarves | 16 Items |
| **Dresses** | [`dresses.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/dresses.html) | Runway evening gowns, mini dresses, silk midis, backless & cut-out styles | 16 Items |

---

## 🚀 How to Open the Website

Simply double-click [`index.html`](file:///c:/Users/91939/Documents/Fashion%20&%20Clothing%20Store/index.html) or right-click `index.html` &rarr; **Open with** &rarr; **Google Chrome / Microsoft Edge**. No installation, command line, or backend server needed!

---

## 📁 File Structure

```
Fashion & Clothing Store/
│
├── index.html          # Flagship portal: visual department showcases & full 80-item catalog
├── clothing.html       # Dedicated Designer Clothing department page (16 items)
├── shoes.html          # Dedicated Designer Shoes department page (16 items)
├── bags.html           # Dedicated Designer Bags department page (16 items)
├── accessories.html    # Dedicated Designer Accessories department page (16 items)
├── dresses.html        # Dedicated Designer Dresses department page (16 items)
├── styles.css          # Custom luxury editorial CSS, hover flips, animations, slider styling
├── data.js             # Curated dataset of 80 luxury products across 5 departments
├── app.js              # State manager: cross-page routing, filtering, search, bag, wishlist, modal
├── package.json        # Frontend project metadata
├── images/             # 160 unique luxury fashion WebP images strictly under 100KB + Stackly logos
└── README.md           # Documentation
```
