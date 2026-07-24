/* ============================================
   PrintLearn Kids - Main JavaScript
   ============================================ */

// ---------- Product Data ----------
const products = [
  { id: 1, name: "Unicorn Kids Door Name Plate", emoji: "🦄", category: "nameplates", theme: "unicorn", price: 4.99, oldPrice: 7.99, rating: 4.9, reviews: 128, badge: "hot", description: "Magical unicorn themed door name plate perfect for kids' bedrooms. Includes A4 and US Letter sizes." },
  { id: 2, name: "Dinosaur Adventure Name Plate", emoji: "🦕", category: "nameplates", theme: "dinosaur", price: 4.99, oldPrice: 7.99, rating: 4.8, reviews: 95, badge: "new", description: "Fun dinosaur themed name plate for little explorers. Instant download printable." },
  { id: 3, name: "Space Astronaut Name Plate", emoji: "🚀", category: "nameplates", theme: "space", price: 5.99, oldPrice: 9.99, rating: 5.0, reviews: 156, badge: "hot", description: "Blast off with this awesome space themed name plate. Perfect for young astronauts!" },
  { id: 4, name: "Mermaid Under the Sea", emoji: "🧜", category: "nameplates", theme: "mermaid", price: 4.99, oldPrice: 6.99, rating: 4.7, reviews: 82, badge: "", description: "Beautiful mermaid themed name plate with ocean elements." },
  { id: 5, name: "Jungle Safari Animals", emoji: "🦁", category: "nameplates", theme: "jungle", price: 5.99, oldPrice: 8.99, rating: 4.9, reviews: 112, badge: "new", description: "Wild jungle safari animals name plate for adventurous kids." },
  { id: 6, name: "Woodland Forest Friends", emoji: "🐻", category: "nameplates", theme: "woodland", price: 4.99, oldPrice: 7.99, rating: 4.8, reviews: 94, badge: "", description: "Cute woodland creatures name plate with forest theme." },
  { id: 7, name: "Butterfly Garden Name Plate", emoji: "🦋", category: "nameplates", theme: "butterfly", price: 4.99, oldPrice: 6.99, rating: 4.6, reviews: 67, badge: "", description: "Beautiful butterfly and flowers themed name plate." },
  { id: 8, name: "Princess Castle Name Plate", emoji: "🏰", category: "nameplates", theme: "princess", price: 5.99, oldPrice: 8.99, rating: 4.9, reviews: 143, badge: "hot", description: "Magical princess castle name plate for little royals." },
  { id: 9, name: "Football Soccer Name Plate", emoji: "⚽", category: "nameplates", theme: "sports", price: 4.99, oldPrice: 6.99, rating: 4.7, reviews: 78, badge: "", description: "Sporty football themed name plate for young athletes." },
  { id: 10, name: "Construction Truck Name Plate", emoji: "🚗", category: "nameplates", theme: "construction", price: 4.99, oldPrice: 7.99, rating: 4.8, reviews: 101, badge: "new", description: "Exciting construction truck themed name plate." },
  { id: 11, name: "Cute Dinosaur Classroom", emoji: "🦖", category: "classroom", theme: "dinosaur", price: 6.99, oldPrice: 9.99, rating: 4.9, reviews: 167, badge: "hot", description: "Adorable dinosaur desk name plates for classroom use." },
  { id: 12, name: "Rainbow Clouds Name Plate", emoji: "🌈", category: "nameplates", theme: "rainbow", price: 4.99, oldPrice: 6.99, rating: 4.8, reviews: 89, badge: "", description: "Colorful rainbow and clouds themed name plate." },
  { id: 13, name: "Cute Panda Name Plate", emoji: "🐼", category: "nameplates", theme: "panda", price: 4.99, oldPrice: 7.99, rating: 4.7, reviews: 76, badge: "", description: "Adorable panda themed name plate for kids." },
  { id: 14, name: "Fox Woodland Friends", emoji: "🦊", category: "nameplates", theme: "woodland", price: 4.99, oldPrice: 7.99, rating: 4.8, reviews: 98, badge: "", description: "Charming fox and woodland friends name plate." },
  { id: 15, name: "Fairy Garden Name Plate", emoji: "🧚", category: "nameplates", theme: "fairy", price: 5.99, oldPrice: 8.99, rating: 4.9, reviews: 134, badge: "new", description: "Magical fairy garden themed name plate." },
  { id: 16, name: "Boho Floral Name Plate", emoji: "🌸", category: "nameplates", theme: "boho", price: 4.99, oldPrice: 6.99, rating: 4.6, reviews: 65, badge: "", description: "Elegant boho floral name plate design." },
  { id: 17, name: "Ocean Animals Name Plate", emoji: "🌊", category: "nameplates", theme: "ocean", price: 5.99, oldPrice: 8.99, rating: 4.8, reviews: 110, badge: "", description: "Fun ocean animals themed name plate." },
  { id: 18, name: "Train Theme Name Plate", emoji: "🚂", category: "nameplates", theme: "train", price: 4.99, oldPrice: 7.99, rating: 4.7, reviews: 88, badge: "", description: "Classic train themed name plate for kids." },
  { id: 19, name: "Crayon School Supplies", emoji: "🎨", category: "classroom", theme: "school", price: 5.99, oldPrice: 8.99, rating: 4.9, reviews: 145, badge: "hot", description: "Colorful crayon and school supplies themed name plate." },
  { id: 20, name: "Teacher Classroom Desk", emoji: "🍎", category: "classroom", theme: "teacher", price: 6.99, oldPrice: 9.99, rating: 5.0, reviews: 189, badge: "hot", description: "Professional teacher classroom desk name plate." },
  { id: 21, name: "ABC Learning Worksheet", emoji: "📝", category: "worksheets", theme: "abc", price: 3.99, oldPrice: 5.99, rating: 4.8, reviews: 234, badge: "new", description: "Fun ABC learning worksheets for preschoolers." },
  { id: 22, name: "Math Practice Flashcards", emoji: "🔢", category: "flashcards", theme: "math", price: 4.99, oldPrice: 7.99, rating: 4.9, reviews: 178, badge: "", description: "Colorful math practice flashcards." },
  { id: 23, name: "Star Reward Certificate", emoji: "⭐", category: "certificates", theme: "reward", price: 2.99, oldPrice: 4.99, rating: 4.7, reviews: 156, badge: "", description: "Beautiful star reward certificate template." },
  { id: 24, name: "Animal Coloring Pages", emoji: "🎨", category: "coloring", theme: "animals", price: 3.99, oldPrice: 6.99, rating: 4.8, reviews: 201, badge: "new", description: "Fun animal coloring pages for kids." }
];

// ---------- Cart ----------
let cart = JSON.parse(localStorage.getItem('plk_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('plk_wishlist') || '[]');

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  localStorage.setItem('plk_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`"${product.name}" added to cart!`, 'success');
}

function toggleWishlist(productId, element) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    if (element) element.classList.remove('active');
    showToast('Removed from wishlist', 'error');
  } else {
    wishlist.push(productId);
    if (element) element.classList.add('active');
    showToast('Added to wishlist!', 'success');
  }
  localStorage.setItem('plk_wishlist', JSON.stringify(wishlist));
}

// ---------- Toast ----------
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✓' : '!'}</span> ${message}`;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---------- Product Card Rendering ----------
function createProductCard(product) {
  const isWishlisted = wishlist.includes(product.id);
  const badgeHtml = product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : '';
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image" onclick="window.location.href='product.html?id=${product.id}'">
        ${badgeHtml}
        <div class="product-wishlist ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id}, this)">
          ${isWishlisted ? '❤️' : '🤍'}
        </div>
        <span>${product.emoji}</span>
      </div>
      <div class="product-info" onclick="window.location.href='product.html?id=${product.id}'">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span>${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${product.oldPrice ? `<span class="old">$${product.oldPrice}</span>` : ''}
            $${product.price}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">+</button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(container, productList) {
  if (!container) return;
  if (productList.length === 0) {
    container.innerHTML = '<p style="text-align:center;grid-column:1/-1;color:var(--gray);padding:40px;">No products found. Try different filters.</p>';
    return;
  }
  container.innerHTML = productList.map(createProductCard).join('');
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// ---------- FAQ Accordion ----------
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// ---------- Shop Filters ----------
function initShopFilters() {
  const filters = document.querySelectorAll('.filter-group input');
  const searchInput = document.querySelector('.search-box input');
  const sortSelect = document.querySelector('.shop-toolbar select');
  const productsContainer = document.getElementById('productsContainer');
  
  if (!productsContainer) return;
  
  function applyFilters() {
    let filtered = [...products];
    
    // Category filter
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    if (categoryCheckboxes.length > 0) {
      const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    
    // Theme filter
    const themeCheckboxes = document.querySelectorAll('input[name="theme"]:checked');
    if (themeCheckboxes.length > 0) {
      const selectedThemes = Array.from(themeCheckboxes).map(cb => cb.value);
      filtered = filtered.filter(p => selectedThemes.includes(p.theme));
    }
    
    // Price filter
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || 100;
    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);
    
    // Search
    if (searchInput && searchInput.value) {
      const query = searchInput.value.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }
    
    // Sort
    if (sortSelect) {
      switch (sortSelect.value) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'popular': filtered.sort((a, b) => b.reviews - a.reviews); break;
      }
    }
    
    renderProducts(productsContainer, filtered);
  }
  
  filters.forEach(f => f.addEventListener('change', applyFilters));
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
  
  applyFilters();
}

// ---------- Product Detail Page ----------
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = products.find(p => p.id === productId);
  
  if (!product) return;
  
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productEmoji').textContent = product.emoji;
  document.getElementById('productPrice').innerHTML = 
    `${product.oldPrice ? `<span class="old">$${product.oldPrice}</span>` : ''} $${product.price}`;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productRating').textContent = `${product.rating} (${product.reviews} reviews)`;
  document.getElementById('productCategory').textContent = product.category.toUpperCase();
  
  // Add to cart button
  document.getElementById('addToCartBtn').addEventListener('click', () => addToCart(product.id));
  
  // Quantity selector
  let quantity = 1;
  const qtyDisplay = document.getElementById('quantityDisplay');
  document.getElementById('qtyMinus').addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
    }
  });
  document.getElementById('qtyPlus').addEventListener('click', () => {
    quantity++;
    qtyDisplay.textContent = quantity;
  });
}

// ---------- Category Page ----------
function initCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat');
  const productsContainer = document.getElementById('productsContainer');
  
  if (!productsContainer) return;
  
  let filtered = products;
  if (category) {
    filtered = products.filter(p => p.category === category);
  }
  
  renderProducts(productsContainer, filtered);
}

// ---------- Newsletter Form ----------
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      if (email && email.includes('@')) {
        showToast('Thanks for subscribing! 🎉', 'success');
        form.reset();
      } else {
        showToast('Please enter a valid email', 'error');
      }
    });
  }
}

// ---------- Contact Form ----------
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent! We\'ll get back to you soon 📧', 'success');
      form.reset();
    });
  }
}

// ---------- Scroll Animation ----------
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.product-card, .category-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initMobileMenu();
  initFAQ();
  initShopFilters();
  initProductDetail();
  initCategoryPage();
  initNewsletter();
  initContactForm();
  initScrollAnimations();
  
  // Render featured products on home page
  const featuredContainer = document.getElementById('featuredProducts');
  if (featuredContainer) {
    const featured = products.slice(0, 8);
    renderProducts(featuredContainer, featured);
  }
});
