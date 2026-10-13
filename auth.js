// ==========================================================================
// STACKLY LUXURY CLIENT AUTHENTICATION & SESSION ENGINE (100% PURE FRONTEND)
// Client-Side User Storage, VIP Authentication, and Session State
// ==========================================================================

const AUTH_USERS_KEY = 'fwrd_users';
const CURRENT_USER_KEY = 'fwrd_current_user';

// Seed default demo VIP account if none exists
function initAuthSeed() {
  if (!localStorage.getItem(AUTH_USERS_KEY)) {
    const demoUsers = [
      {
        id: 'usr_8921',
        name: 'Victoria Sterling',
        email: 'vip@stackly.com',
        password: 'luxury123',
        phone: '+1 (555) 234-5678',
        tier: 'Private Client Couture VIP',
        since: '2024',
        rewardPoints: 4850,
        address: {
          line1: '740 Park Avenue, Apt 14B',
          city: 'New York',
          state: 'NY',
          zip: '10021',
          country: 'United States'
        },
        orders: [
          {
            id: 'STK-92841',
            date: 'October 8, 2026',
            status: 'In Transit — Express Courier',
            deliveryEstimate: 'Tomorrow by 10:30 AM',
            trackingNumber: '1Z9999999999999999',
            total: 3690,
            items: [
              {
                id: 101,
                designer: 'SAINT LAURENT',
                title: 'Le Smoking Tuxedo Blazer',
                price: 3690,
                size: 'FR 36 (US 4)',
                image: 'images/clothing_101_a.webp'
              }
            ]
          },
          {
            id: 'STK-87103',
            date: 'September 24, 2026',
            status: 'Delivered — Signature Verified',
            deliveryEstimate: 'Delivered on Sep 26, 2026',
            trackingNumber: '1Z8888888888888888',
            total: 2120,
            items: [
              {
                id: 201,
                designer: 'AMINA MUADDI',
                title: 'Begum Crystal Glass High Heel Mule',
                price: 1190,
                size: 'IT 38',
                image: 'images/shoes_201_a.webp'
              },
              {
                id: 401,
                designer: 'SAINT LAURENT',
                title: 'SL M94 Oversized Acetate Sunglasses',
                price: 490,
                size: 'One Size',
                image: 'images/accessories_401_a.webp'
              }
            ]
          }
        ]
      }
    ];
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(demoUsers));
  }
}

// Get registered users list
function getStoredUsers() {
  try {
    const raw = localStorage.getItem(AUTH_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Error reading stored users:', e);
    return [];
  }
}

// Get logged-in user
function getLoggedInUser() {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

// Login (Supports ANY email and password seamlessly for friction-free VIP access)
function loginUser(email, password) {
  initAuthSeed();
  
  // Clean inputs with graceful fallbacks
  const inputEmail = (email || '').trim();
  const inputPassword = (password || '').trim() || 'luxury123';
  
  const normalizedEmail = (inputEmail.includes('@') ? inputEmail : `${inputEmail || 'client'}@stackly.com`).toLowerCase();
  const users = getStoredUsers();
  
  // Check if user already exists
  let existingUser = users.find(u => u.email.toLowerCase() === normalizedEmail);
  
  if (existingUser) {
    existingUser.password = inputPassword; // Update password
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(existingUser));
    return { success: true, user: existingUser };
  }

  // Format a realistic luxury client name from the email prefix
  const rawPrefix = normalizedEmail.split('@')[0];
  const formattedName = rawPrefix
    .replace(/[._-]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') || 'Private Client';

  // Create new active VIP client profile immediately
  const newUser = {
    id: 'usr_' + Date.now().toString(36),
    name: formattedName,
    email: normalizedEmail,
    password: inputPassword,
    phone: '+1 (555) 234-5678',
    tier: 'Private Client Couture VIP',
    since: new Date().getFullYear().toString(),
    rewardPoints: 4850,
    address: {
      line1: '740 Park Avenue, Apt 14B',
      city: 'New York',
      state: 'NY',
      zip: '10021',
      country: 'United States'
    },
    orders: [
      {
        id: 'STK-92841',
        date: 'October 8, 2026',
        status: 'In Transit — Express Courier',
        deliveryEstimate: 'Tomorrow by 10:30 AM',
        trackingNumber: '1Z9999999999999999',
        total: 3690,
        items: [
          {
            id: 101,
            designer: 'SAINT LAURENT',
            title: 'Le Smoking Tuxedo Blazer',
            price: 3690,
            size: 'FR 36 (US 4)',
            image: 'images/clothing_101_a.webp'
          }
        ]
      },
      {
        id: 'STK-87103',
        date: 'September 24, 2026',
        status: 'Delivered — Signature Verified',
        deliveryEstimate: 'Delivered on Sep 26, 2026',
        trackingNumber: '1Z8888888888888888',
        total: 2120,
        items: [
          {
            id: 201,
            designer: 'AMINA MUADDI',
            title: 'Begum Crystal Glass High Heel Mule',
            price: 1190,
            size: 'IT 38',
            image: 'images/shoes_201_a.webp'
          },
          {
            id: 401,
            designer: 'SAINT LAURENT',
            title: 'SL M94 Oversized Acetate Sunglasses',
            price: 490,
            size: 'One Size',
            image: 'images/accessories_401_a.webp'
          }
        ]
      }
    ]
  };

  users.push(newUser);
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return { success: true, user: newUser };
}

// Signup (Supports ANY registration details with seamless instant login)
function signupUser(userData) {
  initAuthSeed();
  const users = getStoredUsers();
  const inputEmail = (userData.email || '').trim();
  const normalizedEmail = (inputEmail.includes('@') ? inputEmail : `${inputEmail || 'client'}@stackly.com`).toLowerCase();
  const inputPassword = (userData.password || '').trim() || 'luxury123';

  const existingIdx = users.findIndex(u => u.email.toLowerCase() === normalizedEmail);
  if (existingIdx !== -1) {
    if (userData.name) users[existingIdx].name = userData.name;
    users[existingIdx].password = inputPassword;
    if (userData.phone) users[existingIdx].phone = userData.phone;
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[existingIdx]));
    return { success: true, user: users[existingIdx] };
  }

  const newUser = {
    id: 'usr_' + Date.now().toString(36),
    name: userData.name || 'Private Client',
    email: normalizedEmail,
    password: inputPassword,
    phone: userData.phone || '+1 (555) 234-5678',
    tier: 'Private Client Couture VIP',
    since: new Date().getFullYear().toString(),
    rewardPoints: 4850,
    address: {
      line1: userData.address || '740 Park Avenue, Apt 14B',
      city: userData.city || 'New York',
      state: userData.state || 'NY',
      zip: userData.zip || '10021',
      country: 'United States'
    },
    orders: [
      {
        id: 'STK-92841',
        date: 'October 8, 2026',
        status: 'In Transit — Express Courier',
        deliveryEstimate: 'Tomorrow by 10:30 AM',
        trackingNumber: '1Z9999999999999999',
        total: 3690,
        items: [
          {
            id: 101,
            designer: 'SAINT LAURENT',
            title: 'Le Smoking Tuxedo Blazer',
            price: 3690,
            size: 'FR 36 (US 4)',
            image: 'images/clothing_101_a.webp'
          }
        ]
      }
    ]
  };

  users.push(newUser);
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return { success: true, user: newUser };
}

// Logout
function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.location.href = 'login.html';
}

// Update current user profile
function updateUserProfile(updatedFields) {
  const currentUser = getLoggedInUser();
  if (!currentUser) return { success: false, message: 'No active session' };

  const updatedUser = { ...currentUser, ...updatedFields };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));

  // Also update in registered users list
  const users = getStoredUsers();
  const idx = users.findIndex(u => u.id === currentUser.id || u.email.toLowerCase() === currentUser.email.toLowerCase());
  if (idx !== -1) {
    users[idx] = updatedUser;
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  }

  return { success: true, user: updatedUser };
}

// Update UI across pages
function syncAuthNavUI() {
  const user = getLoggedInUser();
  const userLinks = document.querySelectorAll('.nav-user-link');
  
  userLinks.forEach(link => {
    if (user) {
      link.href = 'dashboard.html';
      link.title = `VIP Account: ${user.name} (${user.tier})`;
      link.classList.add('text-black');
    } else {
      link.href = 'login.html';
      link.title = 'Sign In / Register';
    }
  });

  const headerUserLabel = document.getElementById('headerUserLabel');
  if (headerUserLabel) {
    if (user) {
      headerUserLabel.textContent = `HELLO, ${user.name.split(' ')[0].toUpperCase()}`;
      headerUserLabel.href = 'dashboard.html';
    } else {
      headerUserLabel.textContent = 'SIGN IN / REGISTER';
      headerUserLabel.href = 'login.html';
    }
  }
}

// Auto-run on DOMContentLoaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initAuthSeed();
    syncAuthNavUI();
  });
}
