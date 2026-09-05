/* =====================================================
   SHE TREND — app.js
   Organized into logical modules:
   - DATA           : product catalog
   - STATE          : cart / wishlist / filters state + localStorage
   - RENDER         : DOM rendering functions
   - FILTERS        : filtering / sorting / search logic
   - CART           : cart operations
   - CHECKOUT       : WhatsApp order generation
   - UI             : navbar, announcement bar, toasts, animations
   - INIT           : bootstrapping
   ===================================================== */

/* ============================ DATA ============================ */
const WHATSAPP_NUMBER = "970599094331"; 

const COLOR_MAP = {
  "أسود": "#111111",
  "بيج": "#D8CBBE",
  "بني": "#8B6F53",
  "رمادي": "#9B9691",
  "زيتي": "#6E7452",
  "كحلي": "#232C42",
"التركواز" :"#122f3d",
"الزيتي الفسدقي" :"#3c6c43",
};

const products = [
  {
    id: 1,
    name: "العباية العملية",
    category: "يومية",
    price: 200,
    oldPrice: 250,
    colors: ["التركواز"],
    image: "assets/products/abaya-1-amalya.jpeg",
    image2: "assets/products/abaya-1-amalya.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "باردة وخفيفة، عملية، لا بتخايل ولا بتكرمش ولا بتشمر",
    styleType: ["صيفي", "كلوش عادي", "ملون"],
    isNew: true,
    bestSeller: true,
    available: true,
    dateAdded: "2026-08-01",
  },

  {
    id: 2,
    name: "عباية التوليب",
    category: "يومية",
    price: 200,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["42", "44", "46", "48", "50"],
    image: "assets/products/abaya-2-tuleeb.jpeg",
    image2: "assets/products/abaya-2-2-tuleeb.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "الكريب السعودي",
    styleType: ["صيفي", "كلوش عادي", "نقشة عالكم والشالة"],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10",
  },

 {
    id: 3,
    name: "العباية العملية",
    category: "يومية",
    price: 230,
    oldPrice: 250,
    colors: ["أسود","البني","الزيتي الفسدقي"],
    sizes: ["38", "40", "42", "44", "46","48"],
    image: "assets/products/abaya-3-amalya.jpeg",
    image2: "assets/products/abaya-3-3-amalya.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "باردة وخفيفة عملية لا بتخايل ولا بتكرمش ولا تشمر",
    styleType: ["صيفي", "كلوش عادي", "ملون"],
    isNew: true,
  bestSeller: true,
  available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 4,
    name: "عباية رُقي",
    category: "يومية",
    price: 200,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["44", "46", "48", "50", "52"],
    image: "assets/products/abaya-4-4-rwqay.jpeg",
    image2: "assets/products/abaya-4-4-rwqay.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "الكريب السعودي",
    styleType: ["صيفي", "ضبل كلوش", "نقشة على الكُم الإيد"],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10"
  },

  {
    id: 5,
    name: "عباية شمس",
    category: "يومية",
    price: 200,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["44", "46", "48", "50", "52"],
    image: "assets/products/abaya-5-shams.jpeg",
    image2: "assets/products/abaya-5-5-shams.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "الكريب السعودي",
    styleType: ["صيفي", "ضبل كلوش", "نقشة على الكُم الإيد"],
    isNew: true,
  bestSeller: true,
  available: false,
    dateAdded: "2026-08-10"
  },


  {
    id: 6,
    name: "عباية السنبلة",
    category: "يومية",
    price: 0,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["38","42","44", "46", "48", "50", "52"],
    image: "assets/products/abaya-6-sunbla.jpeg",
    image2: "assets/products/abaya-6-sunbla.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "الكريب السعودي",
    styleType: ["صيفي", "ضبل كلوش", "نقشة على الكُم والضهر"],
    isNew: true,
  bestSeller: true,
  available: false,
    dateAdded: "2026-08-10"
  },


   {
    id: 7,
    name: "عباية الأنوثة الحرير",
    category: "يومية",
    price: null,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["38","42","44", "46", "48", "50", "52"],
    image: "assets/products/abaya-7-girl.jpeg",
    image2: "assets/products/abaya-7-girl.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "حرير ياباني (سعودي)",
    styleType: ["صيفي", "ضبل كلوش", " سادة "],
    isNew: true,
  bestSeller: true,
  available: false,
    dateAdded: "2026-08-10"
  },
   {
    id: 8,
    name: "عباية الدوام",
    category: "يومية",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: [ "56", "58"],
    image: "assets/products/doam.jpeg",
    image2: "assets/products/doam.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "  قماش بليزر واقف",
    styleType: ["عملي", "ستريت ", " سادة "],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10"
  },
   {
    id: 9,
    name: "عباية الترتر العملية",
    category: "يومية",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: [ "56", "58"],
    image: "assets/products/trtr.jpeg",
    image2: "assets/products/trtr.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  "  قماش بليزر واقف",
    styleType: ["عملي", "كلوش عادي واسعة ووافية ", " مع تداخل الترتر والشيفون "],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10"
  },
  {
    id: 10,
    name: "عباية الورد النهدي",
    category: "يومية",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: [  "58"],
    image: "assets/products/wardi-nahdi.jpeg",
    image2: "assets/products/wardi-nahdi.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  " حرير ياباني",
    styleType: [ "  حرير خميل وناعم مع تطريز الورد ", " نظام البشت واسعة ووافية جدا "],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10"
  },
  {
    id: 11,
    name: "عباية النجوم",
    category: "يومية",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: [  "58"],
    image: "assets/products/star.jpeg",
    image2: "assets/products/star.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  " كريب سعودي ",
    styleType: [ "مع تداخل الخرز الفضي شفاف", "نظام البشت واسعة ووافية جدا "],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10"
  },
   {
    id: 12,
    name: "عباية شك الخرز ",
    category: "يومية",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: [  "58"],
    image: "assets/products/kharaz.jpeg",
    image2: "assets/products/kharaz.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType:  " كريب سعودي ",
    styleType: [  " شك خرز تقيل وماكن باللون الذهبي والفضي مناسبة للمناسبات والافراح "],
    isNew: true,
  bestSeller: true,
  available: true,
    dateAdded: "2026-08-10"
  }
];



// const reviews = [
//   { name: "سارة محمد", city: "غزة", avatar: "assets/testimonials/avatar-1.jpg", text: "العباية أجمل من الصور والخامة جدًا راقية، أكيد مو آخر طلب." },
//   { name: "جنى أحمد", city: "الرياض", avatar: "assets/testimonials/avatar-2.jpg", text: "تجربة تسوق مريحة والتوصيل كان سريع جدًا. القصة تناسب جميع الأجسام." },
//   { name: "لمى عبدالله", city: "جدة", avatar: "assets/testimonials/avatar-3.jpg", text: "من أفضل المتاجر اللي جربتها، التفاصيل دقيقة والقماش يستاهل السعر." },
//   { name: "نور خالد", city: "الدمام", avatar: "assets/testimonials/avatar-4.jpg", text: "عباية المناسبات فاقت توقعاتي، لبستها في عرس أختي وكل الناس سألوا عنها." },
//   { name: "ريم سعيد", city: "خان يونس", avatar: "assets/testimonials/avatar-5.jpg", text: "خدمة العملاء عبر واتساب سهلت علي كل شي، تواصل راقٍ وسريع." },
//   { name: "دانة يوسف", city: "الكويت", avatar: "assets/testimonials/avatar-6.jpg", text: "أناقة وحشمة في نفس الوقت، فعلاً شعار She Trend ينطبق على منتجاتهم." }
// ];

/* ============================ STATE ============================ */
const state = {
  cart: [],
  wishlist: [],
  filters: {
    category: "الكل",
    price: [],
    colors: [],
    search: ""
  },
  sort: "newest"
};

function loadState(){
  try{
    const savedCart = localStorage.getItem("shetrend_cart");
    const savedWishlist = localStorage.getItem("shetrend_wishlist");
    if(savedCart) state.cart = JSON.parse(savedCart);
    if(savedWishlist) state.wishlist = JSON.parse(savedWishlist);
  }catch(e){ console.warn("تعذر تحميل بيانات السلة المحفوظة", e); }
}
function saveCart(){ localStorage.setItem("shetrend_cart", JSON.stringify(state.cart)); }
function saveWishlist(){ localStorage.setItem("shetrend_wishlist", JSON.stringify(state.wishlist)); }

/* ============================ HELPERS ============================ */
// function formatPrice(n){ return n.toLocaleString("ar-SA"); }
function formatPrice(n){
  const price = Number(n);

  if(!Number.isFinite(price)){
    return "0";
  }

  return price.toLocaleString("ar-SA");
}
function findProduct(id){ return products.find(p => p.id === Number(id)); }
function swatchesHTML(colors, limit=3){
  return colors.slice(0, limit).map(c => `<span class="swatch" style="background:${COLOR_MAP[c] || '#ccc'}" title="${c}"></span>`).join("");
}

/* ============================ RENDER: PRODUCT CARD ============================ */

function productCardHTML(p){
  const badgeHTML = p.badge
    ? `<span class="product-badge ${p.badge === 'خصم' ? 'sale' : ''}">${p.badge}</span>`
    : "";

  const oldPriceHTML = p.oldPrice
    ? `<span class="price-old">${formatPrice(p.oldPrice)}شيكل  </span>`
    : "";

  const isWished = state.wishlist.includes(p.id);

  const availabilityHTML = p.available
    ? `<span class="product-availability available">
         <span class="availability-dot"></span>
         متوفرة
       </span>`
    : `<span class="product-availability unavailable">
         <span class="availability-dot"></span>
         غير متوفرة
       </span>`;

  const quickAddHTML = p.available
    ? `<button class="quick-add-btn" data-quickadd="${p.id}">
         أضيفي للسلة
       </button>`
    : `<div class="quick-add-btn disabled">
         غير متوفرة
       </div>`;

  return `
  <div class="col-6 col-md-4 col-lg-3 fade-in-up">
    <div class="product-card ${!p.available ? 'out-of-stock' : ''}" data-id="${p.id}">

      <div class="product-media" data-qv="${p.id}">

        ${badgeHTML}

        ${!p.available ? `
          <span class="product-stock-badge">
            غير متوفرة
          </span>
        ` : ""}

        <button
          class="wishlist-btn ${isWished ? 'active' : ''}"
          data-wish="${p.id}"
          aria-label="أضيفي للمفضلة"
        >
          <i class="bi ${isWished ? 'bi-heart-fill' : 'bi-heart'}"></i>
        </button>

        <img
          src="${p.image}"
          alt="${p.name}"
          class="img-primary"
          loading="lazy"
        >

        <img
          src="${p.image2}"
          alt="${p.name}"
          class="img-secondary"
          loading="lazy"
        >

        ${quickAddHTML}

      </div>

      <div class="product-info">

        <h3 class="product-name" data-qv="${p.id}">
          ${p.name}
        </h3>

        <p class="product-desc">
          ${p.description}
        </p>

        <div class="product-price-row">
          <span class="price-current">
            ${formatPrice(p.price)}شيكل
          </span>
          ${oldPriceHTML}
        </div>

        ${availabilityHTML}

       <div class="swatches">
  ${swatchesHTML(p.colors)}
</div>

${p.sizes && p.sizes.length > 0 ? `
  <div class="product-sizes">
    <span class="sizes-label">المقاس:</span>
    <div class="sizes-options">
      ${p.sizes.map(size => `
        <button
          type="button"
          class="size-option"
          data-size="${size}"
          data-product="${p.id}"
        >
          ${size}
        </button>
      `).join("")}
    </div>
  </div>
` : ""}

      </div>

    </div>
  </div>`;
}

function renderGrid(el, list){
  if(!el) return;
  if(list.length === 0){
    el.innerHTML = "";
    return;
  }
  el.innerHTML = list.map(productCardHTML).join("");
  observeFadeIns(el);
}

/* ============================ FILTERS / SORT / SEARCH ============================ */
function priceInRange(price, rangeKey){
  if(rangeKey === "under200") return price < 200;
  if(rangeKey === "200-300") return price >= 200 && price <= 300;
  if(rangeKey === "300-500") return price >= 300 && price <= 500;
  if(rangeKey === "over500") return price > 500;
  return true;
}

function getFilteredProducts(){
  let list = [...products];
  const f = state.filters;

  if(f.category && f.category !== "الكل"){
    if(f.category === "الأكثر مبيعًا"){
      list = list.filter(p => p.bestSeller);
    } else if(f.category === "جديدة"){
      list = list.filter(p => p.isNew);
    } else {
      list = list.filter(p => p.category === f.category);
    }
  }

  if(f.price.length > 0){
    list = list.filter(p => f.price.some(r => priceInRange(p.price, r)));
  }

  if(f.colors.length > 0){
    list = list.filter(p => p.colors.some(c => f.colors.includes(c)));
  }

  if(f.search && f.search.trim() !== ""){
    const q = f.search.trim().toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  list = sortProducts(list, state.sort);
  return list;
}

function sortProducts(list, sortKey){
  const sorted = [...list];
  if(sortKey === "price-asc") sorted.sort((a,b) => a.price - b.price);
  else if(sortKey === "price-desc") sorted.sort((a,b) => b.price - a.price);
  else if(sortKey === "bestselling") sorted.sort((a,b) => (b.bestSeller?1:0) - (a.bestSeller?1:0));
  else sorted.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded)); // newest
  return sorted;
}

function renderShop(){
  const list = getFilteredProducts();
  const grid = document.getElementById("shopGrid");
  const noResults = document.getElementById("noResults");
  const countEl = document.getElementById("productCount");

  renderGrid(grid, list);
  noResults.classList.toggle("d-none", list.length !== 0);
  countEl.textContent = `${list.length} منتج`;
}

/* ============================ FILTERS SIDEBAR RENDER ============================ */
function filtersHTML(){
  const categories = ["الكل", "يومية", "مناسبات", "سوداء", "جديدة", "الأكثر مبيعًا"];
  const priceRanges = [
    { key: "under200", label: "أقل من 200" },
    { key: "200-300", label: "200 - 300" },
    { key: "300-500", label: "300 - 500" },
    { key: "over500", label: "أكثر من 500" }
  ];
  const colors = Object.keys(COLOR_MAP);

  const catHTML = categories.map(c => `
    <label class="filter-option">
      <input type="radio" name="category" value="${c}" ${state.filters.category === c ? 'checked' : ''}>
      ${c}
    </label>`).join("");

  const priceHTML = priceRanges.map(r => `
    <label class="filter-option">
      <input type="checkbox" value="${r.key}" class="price-filter-input" ${state.filters.price.includes(r.key) ? 'checked' : ''}>
      ${r.label}
    </label>`).join("");

  const colorHTML = `<div class="color-filter-options">` + colors.map(c => `
      <span class="color-filter-swatch ${state.filters.colors.includes(c) ? 'active' : ''}" style="background:${COLOR_MAP[c]}" data-color="${c}" title="${c}"></span>
    `).join("") + `</div>`;

  return `
    <div class="filter-group">
      <h6>التصنيف</h6>
      ${catHTML}
    </div>
    <div class="filter-group">
      <h6>السعر</h6>
      ${priceHTML}
    </div>
    <div class="filter-group">
      <h6>اللون</h6>
      ${colorHTML}
    </div>
    <button class="btn btn-premium-outline w-100 clear-filters-btn">مسح الفلاتر</button>
  `;
}

function renderFilters(){
  const desktop = document.getElementById("filtersSidebar");
  const mobile = document.getElementById("filtersSidebarMobile");
  const html = filtersHTML();
  if(desktop) desktop.innerHTML = html;
  if(mobile) mobile.innerHTML = html;
  bindFilterEvents(desktop);
  bindFilterEvents(mobile);
}

function bindFilterEvents(container){
  if(!container) return;
  container.querySelectorAll('input[name="category"]').forEach(input => {
    input.addEventListener("change", () => {
      state.filters.category = input.value;
      renderFilters();
      renderShop();
    });
  });
  container.querySelectorAll(".price-filter-input").forEach(input => {
    input.addEventListener("change", () => {
      const val = input.value;
      if(input.checked){ state.filters.price.push(val); }
      else{ state.filters.price = state.filters.price.filter(v => v !== val); }
      renderShop();
    });
  });
  container.querySelectorAll(".color-filter-swatch").forEach(sw => {
    sw.addEventListener("click", () => {
      const color = sw.dataset.color;
      if(state.filters.colors.includes(color)){
        state.filters.colors = state.filters.colors.filter(c => c !== color);
      } else {
        state.filters.colors.push(color);
      }
      renderFilters();
      renderShop();
    });
  });
  const clearBtn = container.querySelector(".clear-filters-btn");
  if(clearBtn){
    clearBtn.addEventListener("click", () => {
      state.filters = { category: "الكل", price: [], colors: [], search: "" };
      renderFilters();
      renderShop();
    });
  }
}

/* ============================ NEW ARRIVALS / TRENDING / REVIEWS / INSTAGRAM ============================ */
function renderNewArrivals(){
  const list = [...products].filter(p => p.isNew).concat(
    [...products].sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded))
  );
  const unique = Array.from(new Map(list.map(p => [p.id, p])).values()).slice(0, 4);
  renderGrid(document.getElementById("newArrivalsGrid"), unique);
}

function renderTrending(){
  const list = [...products].filter(p => p.bestSeller).slice(0, 6);
  const track = document.getElementById("trendingTrack");
  track.innerHTML = list.map(p => `
    <div class="trending-item">
      <span class="trending-label">ترند حالياً </span>
      ${productCardHTML(p).replace(/<div class="col-6 col-md-4 col-lg-3 fade-in-up">([\s\S]*)<\/div>\s*$/, '$1')}
    </div>
  `).join("");
  observeFadeIns(track);
}

// function renderReviews(){
//   const grid = document.getElementById("reviewsGrid");
//   grid.innerHTML = reviews.map(r => `
//     <div class="col-md-6 col-lg-4 fade-in-up">
//       <div class="review-card">
//         <div class="review-stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
//         <p class="review-text">"${r.text}"</p>
//         <div class="review-author">
//           <img src="${r.avatar}" alt="${r.name}" class="review-avatar">
//           <div>
//             <div class="review-name">${r.name}</div>
//             <div class="review-city">${r.city}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `).join("");
//   observeFadeIns(grid);
// }
async function renderReviews(){
  const grid = document.getElementById("reviewsGrid");

  if(!grid) return;

  try {
    const approvedReviews = await SheTrendReviews.getApproved();

    grid.innerHTML = approvedReviews.map(r => `
      <div class="col-md-6 col-lg-4 fade-in-up">
        <div class="review-card">
          <div class="review-stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>

          <p class="review-text">"${r.review_text || r.text || ''}"</p>

          <div class="review-author">
            <img
              src="${r.avatar_data || r.avatar || 'assets/testimonials/avatar-1.jpg'}"
              alt="${r.name || ''}"
              class="review-avatar"
            >

            <div>
              <div class="review-name">${r.name || ''}</div>
              <div class="review-city">${r.city || ''}</div>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    observeFadeIns(grid);

  } catch(error) {
    console.error("تعذر تحميل التعليقات:", error);
    grid.innerHTML = "";
  }
}

function renderInstagram(){
  const grid = document.getElementById("instagramGrid");

  if(!grid) return;

  const reels = [
    {
      url: "https://www.instagram.com/reel/DbjM-lkMBXa/",
      image: "assets/instagram/insta-1.jpeg",
      views: "390K"
    },
    {
      url: "https://www.instagram.com/reel/DbgGq7CsTe8/",
      image: "assets/instagram/insta-2.jpeg",
      views: "26.1K"
    },
    {
      url: "https://www.instagram.com/reel/Dbd9HP4MqZe/?igsi=eHpzbTk5NGF2MWdh",
      image: "assets/instagram/insta-3.jpeg",
      views: "41K"
    },
    {
      url: "https://www.instagram.com/reel/DbgGq7CsTe8/",
      image: "assets/instagram/insta-4.jpeg",
      views: "100K"
    }
  ];

  grid.innerHTML = reels.map((reel, index) => `
    
    <div class="instagram-card">

      <a
        href="${reel.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="insta-item"
        aria-label="مشاهدة ريل She Trend على إنستغرام ${index + 1}"
      >

        <img
          src="${reel.image}"
          alt="ريل She Trend على إنستغرام ${index + 1}"
          loading="lazy"
        >

        <div class="insta-overlay">
          <i class="bi bi-instagram"></i>
        </div>

      </a>

      <div class="insta-views">
        <i class="bi bi-play-fill"></i>
        <span>${reel.views}</span>
        <span>مشاهدة</span>
      </div>

    </div>

  `).join("");
}

/* ============================ WISHLIST ============================ */
function toggleWishlist(id){
  id = Number(id);
  if(state.wishlist.includes(id)){
    state.wishlist = state.wishlist.filter(w => w !== id);
    showToast("تمت إزالة المنتج من المفضلة", "bi-heart");
  } else {
    state.wishlist.push(id);
    showToast("تمت الإضافة إلى المفضلة 🤍", "bi-heart-fill");
  }
  saveWishlist();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(btn => {
    const active = state.wishlist.includes(id);
    btn.classList.toggle("active", active);
    btn.querySelector("i").className = `bi ${active ? 'bi-heart-fill' : 'bi-heart'}`;
    btn.classList.add("pulse");
    setTimeout(() => btn.classList.remove("pulse"), 400);
  });
}

/* ============================ QUICK VIEW MODAL ============================ */
let quickViewState = {
  productId: null,
  color: null,
  size: null,
  qty: 1
};

//  openQuickView(id)

function openQuickView(id){
  const p = findProduct(id);
  if(!p) return;

  quickViewState = {
    productId: p.id,
    color: null,
    size: null,
    qty: 1
  };

  renderQuickView();

  const modalEl = document.getElementById("quickViewModal");
  bootstrap.Modal.getOrCreateInstance(modalEl).show();
}



function renderQuickView(){
  const p = findProduct(quickViewState.productId);
  if(!p) return;

  const body = document.getElementById("quickViewBody");

  const oldPriceHTML = p.oldPrice
    ? `<span class="price-old">${formatPrice(p.oldPrice)}شيكل</span>`
    : "";

  // =========================
  // COLORS
  // =========================
  const colorsHTML = p.colors.map(c => `
    <button
      type="button"
      class="qv-swatch ${quickViewState.color === c ? 'active' : ''}"
      style="background:${COLOR_MAP[c] || '#ccc'}"
      data-qvcolor="${c}"
      title="${c}"
      aria-label="${c}"
    ></button>
  `).join("");

  // =========================
  // SIZES
  // =========================
  const sizesHTML = p.sizes && p.sizes.length > 0
    ? `
      <div class="qv-selection-group">
        <div class="qv-selection-header">
          <span class="qv-label">المقاس</span>
          <span class="qv-required">مطلوب</span>
        </div>

        <div class="qv-sizes">
          ${p.sizes.map(size => `
            <button
              type="button"
              class="qv-size ${quickViewState.size === size ? 'active' : ''}"
              data-qvsize="${size}"
            >
              ${size}
            </button>
          `).join("")}
        </div>
      </div>
    `
    : "";

  body.innerHTML = `
    <div class="qv-row">

      <div class="qv-image">
        <img src="${p.image}" alt="${p.name}">
      </div>

      <div class="qv-details">

        <h3 class="qv-name">${p.name}</h3>

        <div class="qv-price-row">
          <span class="price-current">
            ${formatPrice(p.price)} شيكل
          </span>
          ${oldPriceHTML}
        </div>

        <p class="qv-desc">
          ${p.description}
        </p>

        <!-- COLOR -->
        <div class="qv-selection-group">

          <div class="qv-selection-header">
            <span class="qv-label">
              اللون
              ${quickViewState.color
                ? `: ${quickViewState.color}`
                : ""}
            </span>

            <span class="qv-required">مطلوب</span>
          </div>

          <div class="qv-colors">
            ${colorsHTML}
          </div>

        </div>

        <!-- SIZE -->
        ${sizesHTML}

        <!-- QUANTITY -->
        <div class="qv-selection-group">

          <span class="qv-label">
            الكمية
          </span>

          <div class="qv-qty-row">
            <div class="qty-control">

              <button
                type="button"
                data-qvqty="-1"
                aria-label="إنقاص الكمية"
              >
                −
              </button>

              <span>${quickViewState.qty}</span>

              <button
                type="button"
                data-qvqty="1"
                aria-label="زيادة الكمية"
              >
                +
              </button>

            </div>
          </div>

        </div>

        <!-- ADD TO CART -->
        ${
          p.available
            ? `
              <button
                class="btn btn-premium w-100 qv-add-btn"
                id="qvAddToCart"
              >
                <i class="bi bi-bag-heart"></i>
                أضيفي للسلة
              </button>

              <div
                id="qvSelectionError"
                class="qv-selection-error"
              ></div>
            `
            : `
              <button
                class="btn btn-secondary w-100"
                disabled
              >
                غير متوفرة حاليًا
              </button>
            `
        }

      </div>
    </div>
  `;

  // =========================
  // COLOR SELECT
  // =========================
  body.querySelectorAll("[data-qvcolor]").forEach(sw => {

    sw.addEventListener("click", () => {

      quickViewState.color = sw.dataset.qvcolor;

      renderQuickView();

    });

  });


  // =========================
  // SIZE SELECT
  // =========================
  body.querySelectorAll("[data-qvsize]").forEach(btn => {

    btn.addEventListener("click", () => {

      quickViewState.size = btn.dataset.qvsize;

      renderQuickView();

    });

  });


  // =========================
  // QUANTITY
  // =========================
  body.querySelectorAll("[data-qvqty]").forEach(btn => {

    btn.addEventListener("click", () => {

      const delta = Number(btn.dataset.qvqty);

      quickViewState.qty = Math.max(
        1,
        quickViewState.qty + delta
      );

      renderQuickView();

    });

  });


  // =========================
  // ADD TO CART
  // =========================
  const addBtn = document.getElementById("qvAddToCart");

  if(addBtn){

    addBtn.addEventListener("click", () => {

      const errorEl =
        document.getElementById("qvSelectionError");

      // اللون مطلوب
      if(!quickViewState.color){

        errorEl.innerHTML = `
          <i class="bi bi-exclamation-circle"></i>
          اختاري اللون أولًا
        `;

        return;
      }

      // المقاس مطلوب إذا المنتج عنده مقاسات
      if(p.sizes && p.sizes.length > 0 && !quickViewState.size){

        errorEl.innerHTML = `
          <i class="bi bi-exclamation-circle"></i>
          اختاري المقاس أولًا
        `;

        return;
      }

      // كل شيء تمام
      addToCart(
        p.id,
        quickViewState.color,
        quickViewState.qty,
        quickViewState.size
      );

      bootstrap.Modal
        .getOrCreateInstance(
          document.getElementById("quickViewModal")
        )
        .hide();

    });

  }
}






function addToCart(productId, color, qty=1, size=null){

  productId = Number(productId);

  const product = findProduct(productId);

  if(!product){
    return;
  }

  if(!product.available){

    showToast(
      "عذرًا، هذا المنتج غير متوفر حاليًا",
      "bi-x-circle"
    );

    return;
  }

  // =========================
  // VALIDATION
  // =========================

  if(!color){

    showToast(
      "اختاري اللون أولًا 🤍",
      "bi-palette"
    );

    return;
  }

  if(product.sizes && product.sizes.length > 0 && !size){

    showToast(
      "اختاري المقاس أولًا 🤍",
      "bi-rulers"
    );

    return;
  }


  // =========================
  // FIND EXISTING ITEM
  // =========================

  const existing = state.cart.find(
    item =>
      item.productId === productId &&
      item.color === color &&
      item.size === size
  );


  if(existing){

    existing.qty += qty;

  } else {

    state.cart.push({
      productId,
      color,
      size,
      qty
    });

  }


  saveCart();
  renderCart();
  updateCartCount();


  showToast(
    "تمت الإضافة إلى السلة 🤍",
    "bi-bag-check"
  );


  const cartOffcanvas =
    bootstrap.Offcanvas.getOrCreateInstance(
      document.getElementById("cartOffcanvas")
    );

  cartOffcanvas.show();
}



function removeFromCart(productId, color, size){
  productId = Number(productId);

  state.cart = state.cart.filter(item => {
    return !(
      Number(item.productId) === productId &&
      String(item.color || "") === String(color || "") &&
      String(item.size || "") === String(size || "")
    );
  });

  saveCart();
  renderCart();
  updateCartCount();

  showToast("تم حذف المنتج من السلة", "bi-trash");
}



function changeCartQty(productId, color, size, delta){

  productId = Number(productId);

  const item = state.cart.find(item =>
    item.productId === productId &&
    item.color === color &&
    (item.size || null) === (size || null)
  );

  if(!item) return;

  item.qty += Number(delta);

  // لا تسمح بكمية أقل من 1
  if(item.qty < 1){
    item.qty = 1;
  }

  saveCart();
  renderCart();
  updateCartCount();
}




function cartTotal(){
  return state.cart.reduce((sum, item) => {
    const p = findProduct(item.productId);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartCountTotal(){
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart(){
  const list = document.getElementById("cartItemsList");
  const emptyState = document.getElementById("cartEmptyState");
  const footer = document.getElementById("cartFooter");

  if(state.cart.length === 0){
    list.innerHTML = "";
    emptyState.classList.remove("d-none");
    footer.style.display = "none";
  } else {
    emptyState.classList.add("d-none");
    footer.style.display = "flex";
    list.innerHTML = state.cart.map(item => {
      const p = findProduct(item.productId);
      if(!p) return "";
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}">
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-color">
  <span
    class="dot"
    style="background:${COLOR_MAP[item.color] || '#ccc'}"
  ></span>

  اللون: ${item.color}
</div>

${
  item.size
    ? `
      <div class="cart-item-size">
        المقاس: ${item.size}
      </div>
    `
    : ""
}

            <div class="cart-item-bottom">
              <div class="qty-control">
                <button
  type="button"
  data-cartminus
  data-pid="${item.productId}"
  data-color="${item.color}"
  data-size="${item.size || ''}"
  aria-label="إنقاص الكمية"
>
  −
</button>

<span>${item.qty}</span>

<button
  type="button"
  data-cartplus
  data-pid="${item.productId}"
  data-color="${item.color}"
  data-size="${item.size || ''}"
  aria-label="زيادة الكمية"
>
  +
</button>
              </div>
             <span class="cart-item-price">${formatPrice(p.price * item.qty)} شيكل</span>
            </div>
          </div>
         <button
  class="cart-item-remove"
  data-cartremove
  data-pid="${item.productId}"
  data-color="${item.color}"
  data-size="${item.size || ''}"
  aria-label="حذف من السلة"
>
            <i class="bi bi-trash"></i>
          </button>
        </div>`;
    }).join("");
  }

  document.getElementById("cartTotal").textContent = `${formatPrice(cartTotal())} شيكل`;

 list.querySelectorAll("[data-cartminus]").forEach(btn => {
  btn.addEventListener("click", () => {
    changeCartQty(
      btn.dataset.pid,
      btn.dataset.color,
      btn.dataset.size,
      -1
    );
  });
});

list.querySelectorAll("[data-cartplus]").forEach(btn => {
  btn.addEventListener("click", () => {
    changeCartQty(
      btn.dataset.pid,
      btn.dataset.color,
      btn.dataset.size,
      1
    );
  });
});

list.querySelectorAll("[data-cartremove]").forEach(btn => {
  btn.addEventListener("click", () => {
    removeFromCart(
      btn.dataset.pid,
      btn.dataset.color,
      btn.dataset.size
    );
  });
});

  updateStickyCartBar();
}

function updateCartCount(){
  const count = cartCountTotal();
  document.getElementById("cartCount").textContent = count;
  document.getElementById("stickyCartCount").textContent = count;
  document.getElementById("stickyCartTotal").textContent = formatPrice(cartTotal());
}

function updateStickyCartBar(){
  const bar = document.getElementById("stickyCartBar");
  if(state.cart.length > 0){
    bar.classList.add("show");
    bar.style.display = "block";
  } else {
    bar.classList.remove("show");
    bar.style.display = "none";
  }
}

/* ============================ CHECKOUT / WHATSAPP ============================ */
function renderOrderSummary(){
  const summaryEl = document.getElementById("orderSummary");
  if(!summaryEl) return;
  let rows = state.cart.map(item => {
    const p = findProduct(item.productId);
    if(!p) return "";
    return `<div class="order-summary-row"><span>${p.name} (${item.color}) × ${item.qty}</span><span>${formatPrice(p.price * item.qty)}شيكل</span></div>`;
  }).join("");
  rows += `<div class="order-summary-total"><span>الإجمالي</span><span>${formatPrice(cartTotal())} شيكل</span></div>`;
  summaryEl.innerHTML = rows;
}

function buildWhatsAppMessage(customer){
  let msg = `مرحبًا She Trend 🤍\nأرغب في طلب المنتجات التالية:\n\n`;
  state.cart.forEach((item, idx) => {
    const p = findProduct(item.productId);
    if(!p) return;
    msg += `${idx + 1}. ${p.name}\n`;
    msg += `اللون: ${item.color}\n`;
    msg += `الكمية: ${item.qty}\n`;
    msg += `السعر: ${formatPrice(p.price * item.qty)} شيكل\n\n`;
  });
  msg += `الإجمالي: ${formatPrice(cartTotal())} شيكل\n\n`;
  msg += `بيانات العميل:\n`;
  msg += `الاسم: ${customer.name}\n`;
  msg += `رقم الجوال: ${customer.phone}\n`;
  msg += `المدينة: ${customer.city}\n`;
  msg += `العنوان: ${customer.address}\n`;
  msg += `ملاحظات:\n${customer.notes || "لا يوجد"}\n\n`;
  msg += `شكرًا 🤍`;
  return msg;
}

function handleCheckoutSubmit(e){
  e.preventDefault();
  const form = document.getElementById("checkoutForm");

  const name = document.getElementById("custName");
  const phone = document.getElementById("custPhone");
  const city = document.getElementById("custCity");
  const address = document.getElementById("custAddress");
  const notes = document.getElementById("custNotes");

  let valid = true;
  [name, phone, city, address].forEach(input => {
    if(!input.value.trim()){
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
  });
  // basic phone sanity check
  const phoneDigits = phone.value.replace(/\D/g, "");
  if(phoneDigits.length < 8){
    phone.classList.add("is-invalid");
    valid = false;
  }

  if(!valid) return;

  const customer = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    city: city.value.trim(),
    address: address.value.trim(),
    notes: notes.value.trim()
  };

  const message = buildWhatsAppMessage(customer);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  bootstrap.Modal.getOrCreateInstance(document.getElementById("checkoutModal")).hide();
  showToast("تم تجهيز طلبك 🤍 سيتم تحويلك الآن إلى واتساب لإرسال الطلب.", "bi-whatsapp", 3500);

  window.open(url, "_blank");

  // clear cart after successful redirect
  state.cart = [];
  saveCart();
  renderCart();
  updateCartCount();
  form.reset();
  form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
}

/* ============================ UI: NAVBAR / SEARCH / TOASTS / ANIMATIONS ============================ */
function initNavbarScroll(){
  const navbar = document.getElementById("siteNavbar");
  function onScroll(){
    if(window.scrollY > 60) navbar.classList.add("solid");
    else navbar.classList.remove("solid");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// function initAnnouncementBar(){
//   const bar = document.getElementById("announcementBar");
//   const closeBtn = document.getElementById("announcementClose");
//   if(sessionStorage.getItem("shetrend_announcement_closed") === "1"){
//     bar.classList.add("hidden");
//   }
//   closeBtn.addEventListener("click", () => {
//     bar.classList.add("hidden");
//     sessionStorage.setItem("shetrend_announcement_closed", "1");
//   });
// }

function initAnnouncementBar(){
  const bar = document.getElementById("announcementBar");
  const closeBtn = document.getElementById("announcementClose");

  // إذا الشريط غير موجود في الصفحة، لا تعمل شيء
  if(!bar || !closeBtn) return;

  if(sessionStorage.getItem("shetrend_announcement_closed") === "1"){
    bar.classList.add("hidden");
  }

  closeBtn.addEventListener("click", () => {
    bar.classList.add("hidden");
    sessionStorage.setItem("shetrend_announcement_closed", "1");
  });
}


function initSearch(){
  const toggle = document.getElementById("searchToggle");
  const panel = document.getElementById("searchPanel");
  const closeBtn = document.getElementById("searchClose");
  const input = document.getElementById("searchInput");
  const resultsEl = document.getElementById("searchResults");

  function openSearch(){
    panel.classList.add("open");
    setTimeout(() => input.focus(), 300);
  }
  function closeSearch(){
    panel.classList.remove("open");
    input.value = "";
    resultsEl.innerHTML = "";
  }
  toggle.addEventListener("click", () => {
    panel.classList.contains("open") ? closeSearch() : openSearch();
  });
  closeBtn.addEventListener("click", closeSearch);

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if(q === ""){ resultsEl.innerHTML = ""; return; }
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    ).slice(0, 6);

    if(matches.length === 0){
      resultsEl.innerHTML = `<p class="search-empty">لا توجد نتائج مطابقة لـ "${input.value}"</p>`;
      return;
    }
    resultsEl.innerHTML = matches.map(p => `
      <a href="#shop" class="search-result-item" data-searchresult="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <div class="name">${p.name}</div>
          <div class="price">${formatPrice(p.price)} شيكل</div>
        </div>
      </a>`).join("");

    resultsEl.querySelectorAll("[data-searchresult]").forEach(a => {
      a.addEventListener("click", () => {
        closeSearch();
        state.filters.search = "";
        openQuickView(a.dataset.searchresult);
      });
    });
  });
}

function showToast(message, icon="bi-check-circle", delay=3000){
  const container = document.getElementById("toastContainer");
  const toastEl = document.createElement("div");
  toastEl.className = "toast align-items-center";
  toastEl.setAttribute("role", "alert");
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body"><i class="bi ${icon}"></i> ${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="إغلاق"></button>
    </div>`;
  container.appendChild(toastEl);
  const toast = new bootstrap.Toast(toastEl, { delay });
  toast.show();
  toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}

function observeFadeIns(root=document){
  const items = root.querySelectorAll ? root.querySelectorAll(".fade-in-up:not(.visible)") : [];
  if(!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

function initHeroParallax(){
  const heroImg = document.getElementById("heroImage");
  const hero = document.getElementById("hero");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if(scrollY < hero.offsetHeight){
      heroImg.style.transform = `scale(${1.05 + scrollY * 0.0002}) translateY(${scrollY * 0.08}px)`;
    }
  }, { passive: true });
}

function initTrendingCarousel(){
  const track = document.getElementById("trendingTrack");
  const prev = document.getElementById("trendPrev");
  const next = document.getElementById("trendNext");
  const scrollAmount = 300;
  prev.addEventListener("click", () => track.scrollBy({ left: scrollAmount, behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: -scrollAmount, behavior: "smooth" }));
}

// function initNewsletter(){
//   const form = document.getElementById("newsletterForm");
//   const successMsg = document.getElementById("newsletterSuccess");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const emailInput = document.getElementById("newsletterEmail");
//     if(!emailInput.checkValidity()){
//       emailInput.classList.add("is-invalid");
//       return;
//     }
//     successMsg.classList.remove("d-none");
//     form.reset();
//     showToast("تم الاشتراك بنجاح 🤍", "bi-envelope-check");
//     setTimeout(() => successMsg.classList.add("d-none"), 5000);
//   });
// }


function initNewsletter(){

  const form = document.getElementById("newsletterForm");
  const successMsg = document.getElementById("newsletterSuccess");

  // إذا الفورم غير موجود، أوقفي الدالة بدون خطأ
  if(!form || !successMsg) return;

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailInput =
      document.getElementById("newsletterEmail");

    if(!emailInput) return;

    if(!emailInput.checkValidity()){
      emailInput.classList.add("is-invalid");
      return;
    }

    successMsg.classList.remove("d-none");

    form.reset();

    showToast(
      "تم الاشتراك بنجاح 🤍",
      "bi-envelope-check"
    );

    setTimeout(() => {
      successMsg.classList.add("d-none");
    }, 5000);

  });

}



/* ============================ EVENT DELEGATION ============================ */

function initGlobalDelegation(){

  document.addEventListener("click", (e) => {

    // =========================
    // Wishlist
    // =========================
    const wishBtn = e.target.closest("[data-wish]");

    if(wishBtn){
      toggleWishlist(wishBtn.dataset.wish);
      return;
    }


    // =========================
    // Quick Add To Cart
    // =========================
   // =========================
// Quick Add To Cart
// =========================
// const quickAddBtn = e.target.closest("[data-quickadd]");
// if(quickAddBtn){

//   const p = findProduct(quickAddBtn.dataset.quickadd);

//   if(!p) return;

//   if(!p.available){

//     showToast(
//       "عذرًا، هذا المنتج غير متوفر حاليًا",
//       "bi-x-circle"
//     );

//     return;
//   }

//   openQuickView(p.id);

//   return;
// }

const quickAddBtn = e.target.closest("[data-quickadd]");

if (quickAddBtn) {
  const p = findProduct(quickAddBtn.dataset.quickadd);

  if (!p) return;

  if (!p.available) {
    showToast(
      "عذرًا، هذا المنتج غير متوفر حاليًا",
      "bi-x-circle"
    );
    return;
  }

  // إذا المنتج له لون واحد فقط
  const color =
    p.colors && p.colors.length === 1
      ? p.colors[0]
      : null;

  // إذا المنتج لا يحتاج مقاس ولديه لون واحد
  if (
    color &&
    (!p.sizes || p.sizes.length === 0)
  ) {
    addToCart(p.id, color, 1, null);
    return;
  }

  // إذا يحتاج اختيار لون أو مقاس
  openQuickView(p.id);

  return;
}




    // =========================
    // Quick View
    // =========================
    const qvTarget = e.target.closest("[data-qv]");

    if(qvTarget){
      openQuickView(qvTarget.dataset.qv);
      return;
    }


    // =========================
    // Category
    // =========================
    const categoryCard = e.target.closest("[data-filter-category]");

    if(categoryCard){

      state.filters.category =
        categoryCard.dataset.filterCategory;

      renderFilters();
      renderShop();

      return;
    }

  });


  // Cart
  document.getElementById("cartToggle").addEventListener("click", () => {

    bootstrap.Offcanvas
      .getOrCreateInstance(
        document.getElementById("cartOffcanvas")
      )
      .show();

  });


  // Sticky Cart
  document.getElementById("stickyCartBtn").addEventListener("click", () => {

    bootstrap.Offcanvas
      .getOrCreateInstance(
        document.getElementById("cartOffcanvas")
      )
      .show();

  });


  // Sort
  document.getElementById("sortSelect").addEventListener("change", (e) => {

    state.sort = e.target.value;

    renderShop();

  });


  // Checkout
  document.getElementById("checkoutBtn").addEventListener("click", () => {

    if(state.cart.length === 0) return;

    bootstrap.Offcanvas
      .getOrCreateInstance(
        document.getElementById("cartOffcanvas")
      )
      .hide();

    renderOrderSummary();

    setTimeout(() => {

      bootstrap.Modal
        .getOrCreateInstance(
          document.getElementById("checkoutModal")
        )
        .show();

    }, 300);

  });


  document
    .getElementById("checkoutForm")
    .addEventListener("submit", handleCheckoutSubmit);



    

}



/* ============================ INIT ============================ */
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  renderFilters();
  renderNewArrivals();
  renderShop();
  renderTrending();
  renderReviews();
  renderInstagram();
  renderCart();
  updateCartCount();

  initNavbarScroll();
  initAnnouncementBar();
  initSearch();
  initHeroParallax();
  initTrendingCarousel();
  initNewsletter();
  initGlobalDelegation();
  observeFadeIns(document);
});
