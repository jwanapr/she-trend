const WHATSAPP_NUMBER = "970599094331";

const COLOR_MAP = {
  "أسود": "#111111",
  "بيج": "#D8CBBE",
  "بني": "#8B6F53",
  "رمادي": "#9B9691",
  "زيتي": "#6E7452",
  "كحلي": "#232C42",
  "التركواز": "#122f3d",
  "الزيتي الفسدقي": "#3c6c43"
};


/* =========================================================
   CATEGORY ALIASES
========================================================= */

const CATEGORY_ALIASES = {
  "all": "الكل",
  "كل": "الكل",

  "daily": "يومية",
  "everyday": "يومية",
  "every-day": "يومية",

  "jalabib": "جلبابات",
  "jalbab": "جلبابات",

  "black": "سوداء",
  "black-abayas": "سوداء",

  "colored": "ملونة",
  "colorful": "ملونة",

  "dresses": "فساتين طلعة",
  "dress": "فساتين طلعة",

  "winter": "شتوي",
  "winter-abayas": "شتوي",

  "occasions": "مناسبات",
  "occasion": "مناسبات",

  "new": "جديدة",
  "new-arrivals": "جديدة",
  "newest": "جديدة",

  "best": "الأكثر مبيعًا",
  "best-seller": "الأكثر مبيعًا",
  "best-sellers": "الأكثر مبيعًا",
  "bestseller": "الأكثر مبيعًا",
  "bestsellers": "الأكثر مبيعًا"
};


function normalizeCategory(value) {
  if (!value) {
    return "الكل";
  }

  let decodedValue = String(value);

  try {
    decodedValue = decodeURIComponent(decodedValue);
  } catch (error) {
    // Keep original value if decoding fails
  }

  decodedValue = decodedValue.trim();

  const key = decodedValue
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    CATEGORY_ALIASES[key] ||
    decodedValue
  );
}


/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    name: "العباية العملية",
    category: "مناسبات",
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
    dateAdded: "2026-08-20"
  },

  {
    id: 2,
    name: "عباية التوليب",
    category: "ملونة",
    price: 200,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["42", "44", "46", "48", "50"],
    image: "assets/products/abaya-2-tuleeb.jpeg",
    image2: "assets/products/abaya-2-2-tuleeb.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "الكريب السعودي",
    styleType: ["صيفي", "كلوش عادي", "نقشة عالكم والشالة"],
    isNew: true,
    bestSeller: true,
    available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 3,
    name: "العباية العملية",
    category: "مناسبات",
    price: 230,
    oldPrice: 250,
    colors: ["أسود", "بني", "الزيتي الفسدقي"],
    sizes: ["38", "40", "42", "44", "46", "48"],
    image: "assets/products/abaya-3-amalya.jpeg",
    image2: "assets/products/abaya-3-3-amalya.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "باردة وخفيفة عملية لا بتخايل ولا بتكرمش ولا تشمر",
    styleType: ["صيفي", "كلوش عادي", "ملون"],
    isNew: true,
    bestSeller: true,
    available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 4,
    name: "عباية رُقي",
    category: "مناسبات",
    price: 200,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["44", "46", "48", "50", "52"],
    image: "assets/products/abaya-4-4-rwqay.jpeg",
    image2: "assets/products/abaya-4-4-rwqay.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "الكريب السعودي",
    styleType: ["صيفي", "ضبل كلوش", "نقشة على الكُم الإيد"],
    isNew: true,
    bestSeller: true,
    available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 5,
    name: "عباية شمس",
    category: "ملونة",
    price: 200,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["44", "46", "48", "50", "52"],
    image: "assets/products/abaya-5-shams.jpeg",
    image2: "assets/products/abaya-5-5-shams.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "الكريب السعودي",
    styleType: ["صيفي", "ضبل كلوش", "نقشة على الكُم الإيد"],
    isNew: true,
    bestSeller: true,
    available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 6,
    name: "عباية السنبلة",
    category: "مناسبات",
    price: 0,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["38", "42", "44", "46", "48", "50", "52"],
    image: "assets/products/abaya-6-sunbla.jpeg",
    image2: "assets/products/abaya-6-sunbla.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "الكريب السعودي",
    styleType: ["صيفي", "ضبل كلوش", "نقشة على الكُم والضهر"],
    isNew: true,
    bestSeller: true,
    available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 7,
    name: "عباية الأنوثة الحرير",
    category: "مناسبات",
    price: null,
    oldPrice: 250,
    colors: ["أسود"],
    sizes: ["38", "42", "44", "46", "48", "50", "52"],
    image: "assets/products/abaya-7-girl.jpeg",
    image2: "assets/products/abaya-7-girl.jpeg",
    badge: "بلد الاستيراد: السعودية",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "حرير ياباني (سعودي)",
    styleType: ["صيفي", "ضبل كلوش", "سادة"],
    isNew: true,
    bestSeller: true,
    available: false,
    dateAdded: "2026-08-10"
  },

  {
    id: 8,
    name: "عباية الدوام",
    category: "مناسبات",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: ["56", "58"],
    image: "assets/products/doamm.jpeg",
    image2: "assets/products/doam.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "قماش بليزر واقف",
    styleType: ["عملي", "ستريت", "سادة"],
    isNew: true,
    bestSeller: true,
    available: true,
    dateAdded: "2026-08-20"
  },

  {
    id: 9,
    name: "عباية الترتر العملية",
    category: "سوداء",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: ["56", "58"],
    image: "assets/products/trtrr.jpeg",
    image2: "assets/products/trtrr.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "قماش بليزر واقف",
    styleType: ["عملي", "كلوش عادي واسعة ووافية", "مع تداخل الترتر والشيفون"],
    isNew: true,
    bestSeller: true,
    available: true,
    dateAdded: "2026-08-20"
  },

  {
    id: 10,
    name: "عباية الورد النهدي",
    category: "سوداء",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: ["58"],
    image: "assets/products/wardi.jpeg",
    image2: "assets/products/wardi-nahdi.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "حرير ياباني",
    styleType: ["حرير خميل وناعم مع تطريز الورد", "نظام البشت واسعة ووافية جدا"],
    isNew: true,
    bestSeller: true,
    available: true,
    dateAdded: "2026-08-20"
  },

  {
    id: 11,
    name: "عباية النجوم",
    category: "سوداء",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: ["58"],
    image: "assets/products/starr.jpeg",
    image2: "assets/products/starr.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "كريب سعودي",
    styleType: ["مع تداخل الخرز الفضي شفاف", "نظام البشت واسعة ووافية جدا"],
    isNew: true,
    bestSeller: true,
    available: true,
    dateAdded: "2026-08-20"
  },

  {
    id: 12,
    name: "عباية شك الخرز",
    category: "مناسبات",
    price: 250,
    oldPrice: 0,
    colors: ["أسود"],
    sizes: ["58"],
    image: "assets/products/shk-kharaz.jpeg",
    image2: "assets/products/shk-kharaz.jpeg",
    badge: "بلد الاستيراد: اليمن",
    description: "عباية بقصة أنيقة وانسيابية مناسبة للإطلالات اليومية.",
    fabricType: "كريب سعودي",
    styleType: ["شك خرز تقيل وماكن باللون الذهبي والفضي مناسبة للمناسبات والافراح"],
    isNew: true,
    bestSeller: true,
    available: true,
    dateAdded: "2026-08-20"
  }
];


/* =========================================================
   STATE
========================================================= */

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


/* =========================================================
   HELPERS
========================================================= */

function getElement(selectors) {
  for (const selector of selectors) {
    const element =
      document.querySelector(selector);

    if (element) {
      return element;
    }
  }

  return null;
}


function getElements(selectors) {
  const elements = [];

  selectors.forEach(selector => {
    document
      .querySelectorAll(selector)
      .forEach(element => {
        if (!elements.includes(element)) {
          elements.push(element);
        }
      });
  });

  return elements;
}


function loadState() {
  try {
    const savedCart =
      localStorage.getItem("shetrend_cart") ||
      localStorage.getItem("sheTrendCart");

    const savedWishlist =
      localStorage.getItem(
        "shetrend_wishlist"
      );

    if (savedCart) {
      const parsedCart =
        JSON.parse(savedCart);

      if (Array.isArray(parsedCart)) {
        state.cart =
          parsedCart
            .map(item => ({
              productId: Number(
                item.productId
              ),
              color:
                item.color || "",
              size:
                item.size || null,
              qty:
                Math.max(
                  1,
                  Number(item.qty || 1)
                )
            }))
            .filter(
              item =>
                findProduct(
                  item.productId
                )
            );
      }
    }

    if (savedWishlist) {
      const parsedWishlist =
        JSON.parse(
          savedWishlist
        );

      if (Array.isArray(parsedWishlist)) {
        state.wishlist =
          parsedWishlist.map(Number);
      }
    }
  } catch (error) {
    console.warn(
      "تعذر تحميل بيانات السلة المحفوظة",
      error
    );

    state.cart = [];
    state.wishlist = [];
  }
}


function saveCart() {
  localStorage.setItem(
    "shetrend_cart",
    JSON.stringify(state.cart)
  );

  localStorage.removeItem(
    "sheTrendCart"
  );
}


function saveWishlist() {
  localStorage.setItem(
    "shetrend_wishlist",
    JSON.stringify(state.wishlist)
  );
}


function formatPrice(value) {
  const price = Number(value);

  if (!Number.isFinite(price)) {
    return "0";
  }

  return price.toLocaleString("ar-SA");
}


function findProduct(id) {
  return products.find(
    product =>
      product.id === Number(id)
  );
}


/* =========================================================
   PRODUCT CARDS
========================================================= */

function swatchesHTML(
  colors,
  productId
) {
  if (
    !colors ||
    !colors.length
  ) {
    return "";
  }

  return colors
    .map(
      color => `
        <button
          type="button"
          class="swatch"
          style="background:${COLOR_MAP[color] || "#ccc"}"
          title="${color}"
          data-color="${color}"
          data-product="${productId}"
          aria-label="اختيار اللون ${color}"
        ></button>
      `
    )
    .join("");
}


function productCardHTML(product) {
  const badgeHTML =
    product.badge
      ? `
        <span class="product-badge ${
          product.badge === "خصم"
            ? "sale"
            : ""
        }">
          ${product.badge}
        </span>
      `
      : "";

  const oldPriceHTML =
    product.oldPrice
      ? `
        <span class="price-old">
          ${formatPrice(
            product.oldPrice
          )}شيكل
        </span>
      `
      : "";

  const isWished =
    state.wishlist.includes(
      product.id
    );

  const availabilityHTML =
    product.available
      ? `
        <span class="product-availability available">
          <span class="availability-dot"></span>
          متوفرة
        </span>
      `
      : `
        <span class="product-availability unavailable">
          <span class="availability-dot"></span>
          غير متوفرة
        </span>
      `;

  const quickAddHTML =
    product.available
      ? `
        <button
          class="quick-add-btn"
          data-quickadd="${product.id}"
          type="button"
        >
          أضيفي للسلة
        </button>
      `
      : `
        <div class="quick-add-btn disabled">
          غير متوفرة
        </div>
      `;

  return `
    <div class="col-6 col-md-4 col-lg-3 fade-in-up">

      <div
        class="product-card ${
          !product.available
            ? "out-of-stock"
            : ""
        }"
        data-id="${product.id}"
      >

        <div
          class="product-media"
          data-qv="${product.id}"
        >

          ${badgeHTML}

          ${
            !product.available
              ? `
                <span class="product-stock-badge">
                  غير متوفرة
                </span>
              `
              : ""
          }

          <button
            class="wishlist-btn ${
              isWished
                ? "active"
                : ""
            }"
            data-wish="${product.id}"
            aria-label="أضيفي للمفضلة"
            type="button"
          >
            <i class="bi ${
              isWished
                ? "bi-heart-fill"
                : "bi-heart"
            }"></i>
          </button>

          <img
            src="${product.image}"
            alt="${product.name}"
            class="img-primary"
            loading="lazy"
          >

          <img
            src="${product.image2}"
            alt="${product.name}"
            class="img-secondary"
            loading="lazy"
          >

          ${quickAddHTML}

        </div>

        <div class="product-info">

          <h3
            class="product-name"
            data-qv="${product.id}"
          >
            ${product.name}
          </h3>

          <p class="product-desc">
            ${product.description}
          </p>

          <div class="product-price-row">

            <span class="price-current">
              ${formatPrice(
                product.price
              )}شيكل
            </span>

            ${oldPriceHTML}

          </div>

          ${availabilityHTML}

          <div class="swatches">
            ${swatchesHTML(
              product.colors,
              product.id
            )}
          </div>

          ${
            product.sizes &&
            product.sizes.length > 0
              ? `
                <div class="product-sizes">

                  <span class="sizes-label">
                    المقاس:
                  </span>

                  <div class="sizes-options">

                    ${
                      product.sizes
                        .map(
                          size => `
                            <button
                              type="button"
                              class="size-option"
                              data-size="${size}"
                              data-product="${product.id}"
                            >
                              ${size}
                            </button>
                          `
                        )
                        .join("")
                    }

                  </div>

                </div>
              `
              : ""
          }

        </div>

      </div>

    </div>
  `;
}


function renderGrid(
  element,
  list
) {
  if (!element) {
    return;
  }

  if (!list.length) {
    element.innerHTML = "";
    return;
  }

  element.innerHTML =
    list
      .map(productCardHTML)
      .join("");

  observeFadeIns(element);
}


/* =========================================================
   FILTERS
========================================================= */

function priceInRange(
  price,
  rangeKey
) {
  const numericPrice =
    Number(price);

  if (
    !Number.isFinite(
      numericPrice
    )
  ) {
    return false;
  }

  if (rangeKey === "under200") {
    return numericPrice < 200;
  }

  if (
    rangeKey === "200-300"
  ) {
    return (
      numericPrice >= 200 &&
      numericPrice <= 300
    );
  }

  if (
    rangeKey === "300-500"
  ) {
    return (
      numericPrice >= 300 &&
      numericPrice <= 500
    );
  }

  if (rangeKey === "over500") {
    return numericPrice > 500;
  }

  return true;
}


function getFilteredProducts() {
  let list = [...products];

  const filters =
    state.filters;

  const category =
    normalizeCategory(
      filters.category
    );


  /* CATEGORY */

  if (
    category &&
    category !== "الكل"
  ) {

    if (
      category ===
      "الأكثر مبيعًا"
    ) {
      list =
        list.filter(
          product =>
            product.bestSeller
        );

    } else if (
      category === "جديدة"
    ) {
      list =
        list.filter(
          product =>
            product.isNew
        );

    } else if (
      category === "سوداء"
    ) {

      list =
        list.filter(
          product =>
            Array.isArray(
              product.colors
            ) &&
            product.colors.includes(
              "أسود"
            )
        );

    } else if (
      category === "ملونة"
    ) {

      list =
        list.filter(
          product =>
            Array.isArray(
              product.colors
            ) &&
            product.colors.some(
              color =>
                color !== "أسود"
            )
        );

    } else {

      list =
        list.filter(
          product =>
            product.category ===
            category
        );
    }
  }


  /* PRICE */

  if (
    filters.price.length > 0
  ) {
    list =
      list.filter(
        product =>
          filters.price.some(
            range =>
              priceInRange(
                product.price,
                range
              )
          )
      );
  }


  /* COLORS */

  if (
    filters.colors.length > 0
  ) {
    list =
      list.filter(
        product =>
          product.colors &&
          product.colors.some(
            color =>
              filters.colors.includes(
                color
              )
          )
      );
  }


  /* SEARCH */

  if (
    filters.search &&
    filters.search.trim() !== ""
  ) {
    const query =
      filters.search
        .trim()
        .toLowerCase();

    list =
      list.filter(
        product =>
          product.name
            .toLowerCase()
            .includes(query) ||
          product.category
            .toLowerCase()
            .includes(query) ||
          product.description
            .toLowerCase()
            .includes(query)
      );
  }

  return sortProducts(
    list,
    state.sort
  );
}


function sortProducts(
  list,
  sortKey
) {
  const sorted =
    [...list];

  if (
    sortKey === "price-asc"
  ) {

    sorted.sort(
      (a, b) =>
        Number(a.price || 0) -
        Number(b.price || 0)
    );

  } else if (
    sortKey === "price-desc"
  ) {

    sorted.sort(
      (a, b) =>
        Number(b.price || 0) -
        Number(a.price || 0)
    );

  } else if (
    sortKey === "bestselling"
  ) {

    sorted.sort(
      (a, b) =>
        (b.bestSeller ? 1 : 0) -
        (a.bestSeller ? 1 : 0)
    );

  } else {

    sorted.sort(
      (a, b) =>
        new Date(
          b.dateAdded
        ) -
        new Date(
          a.dateAdded
        )
    );
  }

  return sorted;
}


function renderShop() {
  const list =
    getFilteredProducts();

  const grid =
    document.getElementById(
      "shopGrid"
    );

  const noResults =
    document.getElementById(
      "noResults"
    );

  const countEl =
    document.getElementById(
      "productCount"
    );

  renderGrid(
    grid,
    list
  );

  if (noResults) {
    noResults.classList.toggle(
      "d-none",
      list.length !== 0
    );
  }

  if (countEl) {
    countEl.textContent =
      `${list.length} منتج`;
  }
}


function filtersHTML() {
  const categories = [
    "الكل",
    "يومية",
    "جلبابات",
    "سوداء",
    "ملونة",
    "فساتين طلعة",
    "شتوي",
    "مناسبات",
    "جديدة",
    "الأكثر مبيعًا"
  ];

  const priceRanges = [
    {
      key: "under200",
      label: "أقل من 200"
    },
    {
      key: "200-300",
      label: "200 - 300"
    },
    {
      key: "300-500",
      label: "300 - 500"
    },
    {
      key: "over500",
      label: "أكثر من 500"
    }
  ];

  const colors =
    Object.keys(
      COLOR_MAP
    );


  const categoryHTML =
    categories
      .map(
        category => `
          <label class="filter-option">

            <input
              type="radio"
              name="category"
              value="${category}"
              ${
                state.filters.category ===
                category
                  ? "checked"
                  : ""
              }
            >

            ${category}

          </label>
        `
      )
      .join("");


  const priceHTML =
    priceRanges
      .map(
        range => `
          <label class="filter-option">

            <input
              type="checkbox"
              value="${range.key}"
              class="price-filter-input"
              ${
                state.filters.price.includes(
                  range.key
                )
                  ? "checked"
                  : ""
              }
            >

            ${range.label}

          </label>
        `
      )
      .join("");


  const colorHTML = `
    <div class="color-filter-options">

      ${
        colors
          .map(
            color => `
              <span
                class="color-filter-swatch ${
                  state.filters.colors.includes(
                    color
                  )
                    ? "active"
                    : ""
                }"
                style="background:${COLOR_MAP[color]}"
                data-color="${color}"
                title="${color}"
              ></span>
            `
          )
          .join("")
      }

    </div>
  `;


  return `
    <div class="filter-group">

      <h6>
        التصنيف
      </h6>

      ${categoryHTML}

    </div>


    <div class="filter-group">

      <h6>
        السعر
      </h6>

      ${priceHTML}

    </div>


    <div class="filter-group">

      <h6>
        اللون
      </h6>

      ${colorHTML}

    </div>


    <button
      class="btn btn-premium-outline w-100 clear-filters-btn"
      type="button"
    >
      مسح الفلاتر
    </button>
  `;
}


function renderFilters() {
  const containers = [
    document.getElementById(
      "filtersContainer"
    ),
    document.getElementById(
      "filtersSidebar"
    ),
    document.getElementById(
      "filtersSidebarMobile"
    )
  ].filter(Boolean);

  const html =
    filtersHTML();

  containers.forEach(
    container => {
      container.innerHTML =
        html;

      bindFilterEvents(
        container
      );
    }
  );
}


function bindFilterEvents(
  container
) {
  if (!container) {
    return;
  }


  container
    .querySelectorAll(
      'input[name="category"]'
    )
    .forEach(
      input => {
        input.addEventListener(
          "change",
          () => {
            state.filters.category =
              normalizeCategory(
                input.value
              );

            renderFilters();
            renderShop();
          }
        );
      }
    );


  container
    .querySelectorAll(
      ".price-filter-input"
    )
    .forEach(
      input => {
        input.addEventListener(
          "change",
          () => {

            const value =
              input.value;

            if (input.checked) {

              if (
                !state.filters.price.includes(
                  value
                )
              ) {
                state.filters.price.push(
                  value
                );
              }

            } else {

              state.filters.price =
                state.filters.price.filter(
                  item =>
                    item !== value
                );
            }

            renderShop();
          }
        );
      }
    );


  container
    .querySelectorAll(
      ".color-filter-swatch"
    )
    .forEach(
      swatch => {

        swatch.addEventListener(
          "click",
          () => {

            const color =
              swatch.dataset.color;

            if (
              state.filters.colors.includes(
                color
              )
            ) {

              state.filters.colors =
                state.filters.colors.filter(
                  item =>
                    item !== color
                );

            } else {

              state.filters.colors.push(
                color
              );
            }

            renderFilters();
            renderShop();
          }
        );
      }
    );


  const clearButton =
    container.querySelector(
      ".clear-filters-btn"
    );

  if (clearButton) {

    clearButton.addEventListener(
      "click",
      () => {

        state.filters = {
          category: "الكل",
          price: [],
          colors: [],
          search: ""
        };

        renderFilters();
        renderShop();
      }
    );
  }
}


/* =========================================================
   HOME SECTIONS
========================================================= */

function renderNewArrivals() {
  const list =
    [...products]
      .filter(
        product =>
          product.isNew
      )
      .concat(
        [...products].sort(
          (a, b) =>
            new Date(
              b.dateAdded
            ) -
            new Date(
              a.dateAdded
            )
        )
      );

  const unique =
    Array.from(
      new Map(
        list.map(
          product => [
            product.id,
            product
          ]
        )
      ).values()
    ).slice(0, 4);

  renderGrid(
    document.getElementById(
      "newArrivalsGrid"
    ),
    unique
  );
}


function renderTrending() {
  const list =
    [...products]
      .filter(
        product =>
          product.bestSeller
      )
      .slice(0, 6);

  const track =
    document.getElementById(
      "trendingTrack"
    );

  if (!track) {
    return;
  }

  track.innerHTML =
    list
      .map(
        product => `
          <div class="trending-item">

            <span class="trending-label">
              ترند حالياً
            </span>

            ${productCardHTML(
              product
            )}

          </div>
        `
      )
      .join("");

  observeFadeIns(track);
}


async function renderReviews() {
  const grid =
    document.getElementById(
      "reviewsGrid"
    );

  const dotsContainer =
    document.getElementById(
      "reviewsDots"
    );

  if (!grid) {
    return;
  }

  if (
    typeof SheTrendReviews ===
    "undefined"
  ) {
    grid.innerHTML = "";

    if (dotsContainer) {
      dotsContainer.innerHTML = "";
    }

    return;
  }

  try {
    const reviews =
      await SheTrendReviews.getApproved();

    if (
      !reviews ||
      reviews.length === 0
    ) {
      grid.innerHTML = "";

      if (dotsContainer) {
        dotsContainer.innerHTML = "";
      }

      return;
    }

    grid.innerHTML =
      reviews
        .map(
          review => `
            <div class="review-slide fade-in-up">

              <div class="review-card">

                <div class="review-stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>

                <p class="review-text">
                  "${review.review_text || review.text || ""}"
                </p>

                <div class="review-author">

                  <img
                    src="${
                      review.avatar_data ||
                      review.avatar ||
                      "assets/testimonials/avatar-1.jpg"
                    }"
                    alt="${review.name || ""}"
                    class="review-avatar"
                  >

                  <div>

                    <div class="review-name">
                      ${review.name || ""}
                    </div>

                    <div class="review-city">
                      ${review.city || ""}
                    </div>

                  </div>

                </div>

              </div>

            </div>
          `
        )
        .join("");

    const slides =
      Array.from(
        grid.querySelectorAll(
          ".review-slide"
        )
      );

    if (!slides.length) {
      return;
    }

    const previous =
      document.querySelector(
        ".reviews-prev"
      );

    const next =
      document.querySelector(
        ".reviews-next"
      );


    function slidesPerView() {
      if (
        window.innerWidth <=
        575
      ) {
        return 1;
      }

      if (
        window.innerWidth <=
        991
      ) {
        return 2;
      }

      return 3;
    }


    function totalPages() {
      return Math.max(
        1,
        Math.ceil(
          slides.length /
          slidesPerView()
        )
      );
    }


    let currentPage = 0;


    function createDots() {
      if (!dotsContainer) {
        return;
      }

      dotsContainer.innerHTML =
        "";

      for (
        let i = 0;
        i < totalPages();
        i++
      ) {
        const dot =
          document.createElement(
            "button"
          );

        dot.type = "button";

        dot.className =
          "review-dot" +
          (
            i === currentPage
              ? " active"
              : ""
          );

        dot.addEventListener(
          "click",
          () => {
            goToPage(i);
          }
        );

        dotsContainer.appendChild(
          dot
        );
      }
    }


    function updateDots() {
      if (!dotsContainer) {
        return;
      }

      dotsContainer
        .querySelectorAll(
          ".review-dot"
        )
        .forEach(
          (
            dot,
            index
          ) => {

            dot.classList.toggle(
              "active",
              index ===
                currentPage
            );
          }
        );
    }


    function goToPage(page) {
      const total =
        totalPages();

      if (page < 0) {
        page = total - 1;
      }

      if (page >= total) {
        page = 0;
      }

      currentPage = page;

      const index =
        currentPage *
        slidesPerView();

      const slide =
        slides[index];

      if (slide) {
        grid.scrollTo({
          left:
            slide.offsetLeft -
            grid.offsetLeft,
          behavior:
            "smooth"
        });
      }

      updateDots();
    }


    if (next) {
      next.addEventListener(
        "click",
        () =>
          goToPage(
            currentPage + 1
          )
      );
    }


    if (previous) {
      previous.addEventListener(
        "click",
        () =>
          goToPage(
            currentPage - 1
          )
      );
    }

    createDots();
    goToPage(0);

    observeFadeIns(grid);

  } catch (error) {

    console.error(
      "تعذر تحميل التعليقات:",
      error
    );

    grid.innerHTML = "";
  }
}


function renderInstagram() {
  const grid =
    document.getElementById(
      "instagramGrid"
    );

  if (!grid) {
    return;
  }

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

  grid.innerHTML =
    reels
      .map(
        (reel, index) => `
          <div class="instagram-card">

            <a
              href="${reel.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="insta-item"
            >

              <img
                src="${reel.image}"
                alt="ريل She Trend ${index + 1}"
                loading="lazy"
              >

              <div class="insta-overlay">
                <i class="bi bi-instagram"></i>
              </div>

            </a>

            <div class="insta-views">

              <i class="bi bi-play-fill"></i>

              <span>
                ${reel.views}
              </span>

              <span>
                مشاهدة
              </span>

            </div>

          </div>
        `
      )
      .join("");
}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {
  id = Number(id);

  if (
    state.wishlist.includes(id)
  ) {

    state.wishlist =
      state.wishlist.filter(
        item =>
          item !== id
      );

    showToast(
      "تمت إزالة المنتج من المفضلة",
      "bi-heart"
    );

  } else {

    state.wishlist.push(id);

    showToast(
      "تمت الإضافة إلى المفضلة 🤍",
      "bi-heart-fill"
    );
  }

  saveWishlist();

  document
    .querySelectorAll(
      `[data-wish="${id}"]`
    )
    .forEach(
      button => {

        const active =
          state.wishlist.includes(
            id
          );

        button.classList.toggle(
          "active",
          active
        );

        const icon =
          button.querySelector(
            "i"
          );

        if (icon) {
          icon.className =
            `bi ${
              active
                ? "bi-heart-fill"
                : "bi-heart"
            }`;
        }
      }
    );
}


/* =========================================================
   QUICK VIEW
========================================================= */

let quickViewState = {
  productId: null,
  color: null,
  size: null,
  qty: 1
};


function openQuickView(id) {
  const product =
    findProduct(id);

  if (!product) {
    return;
  }

  quickViewState = {
    productId:
      product.id,
    color: null,
    size: null,
    qty: 1
  };

  renderQuickView();

  const modal =
    document.getElementById(
      "quickViewModal"
    );

  if (
    !modal ||
    !window.bootstrap ||
    !bootstrap.Modal
  ) {
    return;
  }

  bootstrap.Modal
    .getOrCreateInstance(
      modal
    )
    .show();
}


function renderQuickView() {
  const product =
    findProduct(
      quickViewState.productId
    );

  if (!product) {
    return;
  }

  const body =
    document.getElementById(
      "quickViewBody"
    );

  if (!body) {
    return;
  }

  const oldPriceHTML =
    product.oldPrice
      ? `
        <span class="price-old">
          ${formatPrice(
            product.oldPrice
          )}شيكل
        </span>
      `
      : "";


  const colorsHTML =
    (
      product.colors ||
      []
    )
      .map(
        color => `
          <button
            type="button"
            class="qv-swatch ${
              quickViewState.color ===
              color
                ? "active"
                : ""
            }"
            style="background:${
              COLOR_MAP[color] ||
              "#ccc"
            }"
            data-qvcolor="${color}"
            title="${color}"
            aria-label="${color}"
          ></button>
        `
      )
      .join("");


  const sizesHTML =
    product.sizes &&
    product.sizes.length
      ? `
        <div class="qv-selection-group">

          <div class="qv-selection-header">

            <span class="qv-label">
              المقاس
            </span>

            <span class="qv-required">
              مطلوب
            </span>

          </div>

          <div class="qv-sizes">

            ${
              product.sizes
                .map(
                  size => `
                    <button
                      type="button"
                      class="qv-size ${
                        quickViewState.size ===
                        size
                          ? "active"
                          : ""
                      }"
                      data-qvsize="${size}"
                    >
                      ${size}
                    </button>
                  `
                )
                .join("")
            }

          </div>

        </div>
      `
      : "";


  body.innerHTML = `
    <div class="qv-row">

      <div class="qv-image">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </div>


      <div class="qv-details">

        <h3 class="qv-name">
          ${product.name}
        </h3>


        <div class="qv-price-row">

          <span class="price-current">
            ${formatPrice(
              product.price
            )} شيكل
          </span>

          ${oldPriceHTML}

        </div>


        <p class="qv-desc">
          ${product.description}
        </p>


        <div class="qv-selection-group">

          <div class="qv-selection-header">

            <span class="qv-label">
              اللون
              ${
                quickViewState.color
                  ? `: ${quickViewState.color}`
                  : ""
              }
            </span>

            <span class="qv-required">
              مطلوب
            </span>

          </div>


          <div class="qv-colors">
            ${colorsHTML}
          </div>

        </div>


        ${sizesHTML}


        <div class="qv-selection-group">

          <span class="qv-label">
            الكمية
          </span>

          <div class="qv-qty-row">

            <div class="qty-control">

              <button
                type="button"
                data-qvqty="-1"
              >
                −
              </button>

              <span>
                ${quickViewState.qty}
              </span>

              <button
                type="button"
                data-qvqty="1"
              >
                +
              </button>

            </div>

          </div>

        </div>


        ${
          product.available
            ? `
              <button
                class="btn btn-premium w-100 qv-add-btn"
                id="qvAddToCart"
                type="button"
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


  body
    .querySelectorAll(
      "[data-qvcolor]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            quickViewState.color =
              button.dataset.qvcolor;

            renderQuickView();
          }
        );
      }
    );


  body
    .querySelectorAll(
      "[data-qvsize]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            quickViewState.size =
              button.dataset.qvsize;

            renderQuickView();
          }
        );
      }
    );


  body
    .querySelectorAll(
      "[data-qvqty]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            quickViewState.qty =
              Math.max(
                1,
                quickViewState.qty +
                Number(
                  button.dataset.qvqty
                )
              );

            renderQuickView();
          }
        );
      }
    );


  const addButton =
    document.getElementById(
      "qvAddToCart"
    );

  if (addButton) {

    addButton.addEventListener(
      "click",
      () => {

        const error =
          document.getElementById(
            "qvSelectionError"
          );


        if (
          !quickViewState.color
        ) {

          if (error) {
            error.innerHTML = `
              <i class="bi bi-exclamation-circle"></i>
              اختاري اللون أولًا
            `;
          }

          return;
        }


        if (
          product.sizes &&
          product.sizes.length > 0 &&
          !quickViewState.size
        ) {

          if (error) {
            error.innerHTML = `
              <i class="bi bi-exclamation-circle"></i>
              اختاري المقاس أولًا
            `;
          }

          return;
        }


        addToCart(
          product.id,
          quickViewState.color,
          quickViewState.qty,
          quickViewState.size
        );


        const modal =
          document.getElementById(
            "quickViewModal"
          );

        if (
          modal &&
          window.bootstrap &&
          bootstrap.Modal
        ) {
          bootstrap.Modal
            .getOrCreateInstance(
              modal
            )
            .hide();
        }
      }
    );
  }
}


/* =========================================================
   CART
========================================================= */

function addToCart(
  productId,
  color,
  qty = 1,
  size = null
) {
  productId =
    Number(productId);

  qty = Number(qty);

  if (
    !Number.isFinite(qty) ||
    qty < 1
  ) {
    qty = 1;
  }

  const product =
    findProduct(productId);

  if (!product) {
    return;
  }


  if (!product.available) {

    showToast(
      "عذرًا، هذا المنتج غير متوفر حاليًا",
      "bi-x-circle"
    );

    return;
  }


  if (!color) {

    showToast(
      "اختاري اللون أولًا 🤍",
      "bi-palette"
    );

    return;
  }


  if (
    product.sizes &&
    product.sizes.length > 0 &&
    !size
  ) {

    showToast(
      "اختاري المقاس أولًا 🤍",
      "bi-rulers"
    );

    return;
  }


  const existing =
    state.cart.find(
      item =>
        Number(
          item.productId
        ) === productId &&
        String(
          item.color || ""
        ) ===
          String(
            color || ""
          ) &&
        String(
          item.size || ""
        ) ===
          String(
            size || ""
          )
    );


  if (existing) {

    existing.qty =
      Number(
        existing.qty || 0
      ) + qty;

  } else {

    state.cart.push({
      productId:
        productId,
      color:
        color,
      size:
        size || null,
      qty:
        qty
    });
  }


  saveCart();

  updateCartUI();


  showToast(
    "تمت الإضافة إلى السلة 🤍",
    "bi-bag-check"
  );


  const cartElement =
    document.getElementById(
      "cartOffcanvas"
    );

  if (
    cartElement &&
    window.bootstrap &&
    bootstrap.Offcanvas
  ) {

    bootstrap.Offcanvas
      .getOrCreateInstance(
        cartElement
      )
      .show();
  }
}


function removeFromCart(
  productId,
  color,
  size
) {
  productId =
    Number(productId);

  state.cart =
    state.cart.filter(
      item =>
        !(
          Number(
            item.productId
          ) === productId &&
          String(
            item.color || ""
          ) ===
            String(
              color || ""
            ) &&
          String(
            item.size || ""
          ) ===
            String(
              size || ""
            )
        )
    );

  saveCart();

  updateCartUI();

  showToast(
    "تم حذف المنتج من السلة",
    "bi-trash"
  );
}


function changeCartQty(
  productId,
  color,
  size,
  delta
) {
  productId =
    Number(productId);

  const item =
    state.cart.find(
      cartItem =>
        Number(
          cartItem.productId
        ) === productId &&
        String(
          cartItem.color || ""
        ) ===
          String(
            color || ""
          ) &&
        String(
          cartItem.size || ""
        ) ===
          String(
            size || ""
          )
    );

  if (!item) {
    return;
  }

  item.qty =
    Number(
      item.qty || 0
    ) +
    Number(delta);

  if (item.qty < 1) {
    item.qty = 1;
  }

  saveCart();

  updateCartUI();
}


function cartTotal() {
  return state.cart.reduce(
    (total, item) => {

      const product =
        findProduct(
          item.productId
        );

      if (
        !product ||
        !Number.isFinite(
          Number(
            product.price
          )
        )
      ) {
        return total;
      }

      return (
        total +
        Number(
          product.price
        ) *
        Number(
          item.qty || 0
        )
      );
    },
    0
  );
}


function cartCountTotal() {
  return state.cart.reduce(
    (
      total,
      item
    ) =>
      total +
      Number(
        item.qty || 0
      ),
    0
  );
}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

  /* Supports both index.html and shop.html */

  const list =
    getElement([
      "#cartItems",
      "#cartItemsList",
      "[data-cart-items]",
      ".cart-items-list"
    ]);


  const emptyState =
    document.getElementById(
      "cartEmptyState"
    );


  const footer =
    document.getElementById(
      "cartFooter"
    );


  /*
    If the current page doesn't contain
    a cart list, don't throw an error.
  */

  if (!list) {
    updateCartCount();
    updateStickyCartBar();
    return;
  }


  /* EMPTY CART */

  if (
    state.cart.length === 0
  ) {

    list.innerHTML = `
      <div class="text-center py-5">

        <i
          class="bi bi-bag"
          style="font-size:2.5rem;"
        ></i>

        <p class="mt-3 mb-0">
          السلة فارغة
        </p>

      </div>
    `;


    if (emptyState) {
      emptyState.classList.remove(
        "d-none"
      );
    }


    /*
      index.html has a separate
      empty state. Hide footer when empty.
    */

    if (
      footer &&
      emptyState
    ) {
      footer.style.display =
        "none";
    }

  } else {

    /*
      Hide index empty state
    */

    if (emptyState) {
      emptyState.classList.add(
        "d-none"
      );
    }


    if (
      footer &&
      emptyState
    ) {
      footer.style.display =
        "";
    }


    list.innerHTML =
      state.cart
        .map(
          item => {

            const product =
              findProduct(
                item.productId
              );

            if (!product) {
              return "";
            }


            return `
              <div
                class="cart-item"
                data-cart-item
              >

                <img
                  src="${product.image}"
                  alt="${product.name}"
                >


                <div class="cart-item-info">

                  <div class="cart-item-name">
                    ${product.name}
                  </div>


                  <div class="cart-item-color">

                    <span
                      class="dot"
                      style="background:${
                        COLOR_MAP[
                          item.color
                        ] ||
                        "#ccc"
                      }"
                    ></span>

                    اللون:
                    ${item.color}

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
                        data-size="${
                          item.size || ""
                        }"
                        aria-label="إنقاص الكمية"
                      >
                        −
                      </button>


                      <span>
                        ${item.qty}
                      </span>


                      <button
                        type="button"
                        data-cartplus
                        data-pid="${item.productId}"
                        data-color="${item.color}"
                        data-size="${
                          item.size || ""
                        }"
                        aria-label="زيادة الكمية"
                      >
                        +
                      </button>

                    </div>


                    <span class="cart-item-price">

                      ${formatPrice(
                        Number(
                          product.price ||
                          0
                        ) *
                        Number(
                          item.qty ||
                          0
                        )
                      )}

                      شيكل

                    </span>

                  </div>

                </div>


                <button
                  class="cart-item-remove"
                  data-cartremove
                  data-pid="${item.productId}"
                  data-color="${item.color}"
                  data-size="${
                    item.size || ""
                  }"
                  aria-label="حذف من السلة"
                  type="button"
                >

                  <i class="bi bi-trash"></i>

                </button>

              </div>
            `;
          }
        )
        .join("");
  }


  /* TOTAL */

  const totalElement =
    document.getElementById(
      "cartTotal"
    );

  if (totalElement) {

    totalElement.textContent =
      `${formatPrice(
        cartTotal()
      )} شيكل`;
  }


  /* CART MINUS */

  list
    .querySelectorAll(
      "[data-cartminus]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeCartQty(
              button.dataset.pid,
              button.dataset.color,
              button.dataset.size,
              -1
            );
          }
        );
      }
    );


  /* CART PLUS */

  list
    .querySelectorAll(
      "[data-cartplus]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeCartQty(
              button.dataset.pid,
              button.dataset.color,
              button.dataset.size,
              1
            );
          }
        );
      }
    );


  /* REMOVE */

  list
    .querySelectorAll(
      "[data-cartremove]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            removeFromCart(
              button.dataset.pid,
              button.dataset.color,
              button.dataset.size
            );
          }
        );
      }
    );


  updateCartCount();
  updateStickyCartBar();
}


function updateCartUI() {
  renderCart();
  updateCartCount();
  updateStickyCartBar();
}


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {

  const count =
    cartCountTotal();


  /*
    Supports:
    #cartCount
    #stickyCartCount
    [data-cart-count]
    .cart-count
  */

  const countElements =
    getElements([
      "#cartCount",
      "#stickyCartCount",
      "[data-cart-count]",
      ".cart-count"
    ]);


  countElements.forEach(
    element => {

      element.textContent =
        count;


      /*
        Only hide normal cart badges
        when count is zero.
      */

      if (
        element.id ===
          "cartCount" ||
        element.hasAttribute(
          "data-cart-count"
        )
      ) {

        element.style.display =
          count > 0
            ? "flex"
            : "none";
      }
    }
  );


  const stickyTotal =
    document.getElementById(
      "stickyCartTotal"
    );

  if (stickyTotal) {

    stickyTotal.textContent =
      formatPrice(
        cartTotal()
      );
  }
}


/* =========================================================
   STICKY CART
========================================================= */

function updateStickyCartBar() {
  const bar =
    document.getElementById(
      "stickyCartBar"
    );

  if (!bar) {
    return;
  }

  if (
    state.cart.length > 0
  ) {

    bar.classList.add(
      "show"
    );

    bar.style.display =
      "block";

  } else {

    bar.classList.remove(
      "show"
    );

    bar.style.display =
      "none";
  }
}


/* =========================================================
   ORDER SUMMARY
========================================================= */

function renderOrderSummary() {

  const summary =
    document.getElementById(
      "orderSummary"
    );

  if (!summary) {
    return;
  }

  const rows =
    state.cart
      .map(
        item => {

          const product =
            findProduct(
              item.productId
            );

          if (!product) {
            return "";
          }

          return `
            <div class="order-summary-row">

              <span>

                ${product.name}

                (${item.color})

                ${
                  item.size
                    ? ` - مقاس ${item.size}`
                    : ""
                }

                × ${item.qty}

              </span>


              <span>

                ${formatPrice(
                  Number(
                    product.price ||
                    0
                  ) *
                  Number(
                    item.qty ||
                    0
                  )
                )}

                شيكل

              </span>

            </div>
          `;
        }
      )
      .join("");


  summary.innerHTML =
    rows +
    `
      <div class="order-summary-total">

        <span>
          الإجمالي
        </span>

        <span>

          ${formatPrice(
            cartTotal()
          )}

          شيكل

        </span>

      </div>
    `;
}


/* =========================================================
   WHATSAPP
========================================================= */

function buildWhatsAppMessage(
  customer
) {

  let message =
    `مرحبًا She Trend 🤍\nأرغب في طلب المنتجات التالية:\n\n`;


  state.cart.forEach(
    (
      item,
      index
    ) => {

      const product =
        findProduct(
          item.productId
        );

      if (!product) {
        return;
      }


      message +=
        `${index + 1}. ${product.name}\n`;

      message +=
        `اللون: ${item.color}\n`;


      if (item.size) {
        message +=
          `المقاس: ${item.size}\n`;
      }


      message +=
        `الكمية: ${item.qty}\n`;


      message +=
        `السعر: ${formatPrice(
          Number(
            product.price ||
            0
          ) *
          Number(
            item.qty ||
            0
          )
        )} شيكل\n\n`;
    }
  );


  message +=
    `الإجمالي: ${formatPrice(
      cartTotal()
    )} شيكل\n\n`;


  message +=
    `بيانات العميل:\n`;


  message +=
    `الاسم: ${customer.name}\n`;

  message +=
    `رقم الجوال: ${customer.phone}\n`;

  message +=
    `المدينة: ${customer.city}\n`;

  message +=
    `العنوان: ${customer.address}\n`;

  message +=
    `ملاحظات:\n${
      customer.notes ||
      "لا يوجد"
    }\n\n`;

  message +=
    `شكرًا 🤍`;


  return message;
}


function handleCheckoutSubmit(
  event
) {
  event.preventDefault();


  const form =
    document.getElementById(
      "checkoutForm"
    );

  const name =
    document.getElementById(
      "custName"
    );

  const phone =
    document.getElementById(
      "custPhone"
    );

  const city =
    document.getElementById(
      "custCity"
    );

  const address =
    document.getElementById(
      "custAddress"
    );

  const notes =
    document.getElementById(
      "custNotes"
    );


  let valid = true;


  [
    name,
    phone,
    city,
    address
  ].forEach(
    input => {

      if (!input) {
        return;
      }

      if (
        !input.value.trim()
      ) {

        input.classList.add(
          "is-invalid"
        );

        valid = false;

      } else {

        input.classList.remove(
          "is-invalid"
        );

        input.classList.add(
          "is-valid"
        );
      }
    }
  );


  if (!phone) {
    return;
  }


  const phoneDigits =
    phone.value.replace(
      /\D/g,
      ""
    );


  if (
    phoneDigits.length < 8
  ) {

    phone.classList.add(
      "is-invalid"
    );

    valid = false;
  }


  if (!valid) {
    return;
  }


  const customer = {
    name:
      name.value.trim(),
    phone:
      phone.value.trim(),
    city:
      city.value.trim(),
    address:
      address.value.trim(),
    notes:
      notes
        ? notes.value.trim()
        : ""
  };


  const message =
    buildWhatsAppMessage(
      customer
    );


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;


  const checkoutModal =
    document.getElementById(
      "checkoutModal"
    );


  if (
    checkoutModal &&
    window.bootstrap &&
    bootstrap.Modal
  ) {

    bootstrap.Modal
      .getOrCreateInstance(
        checkoutModal
      )
      .hide();
  }


  showToast(
    "تم تجهيز طلبك 🤍 سيتم تحويلك الآن إلى واتساب لإرسال الطلب.",
    "bi-whatsapp",
    3500
  );


  window.open(
    whatsappURL,
    "_blank"
  );


  state.cart = [];

  saveCart();

  updateCartUI();


  if (form) {

    form.reset();

    form
      .querySelectorAll(
        ".is-valid"
      )
      .forEach(
        element =>
          element.classList.remove(
            "is-valid"
          )
      );
  }
}


/* =========================================================
   NAVBAR
========================================================= */

function initNavbarScroll() {

  const navbar =
    document.getElementById(
      "siteNavbar"
    );

  if (!navbar) {
    return;
  }


  function onScroll() {

    if (
      window.scrollY > 60
    ) {

      navbar.classList.add(
        "solid"
      );

    } else {

      navbar.classList.remove(
        "solid"
      );
    }
  }


  window.addEventListener(
    "scroll",
    onScroll,
    {
      passive: true
    }
  );


  onScroll();
}


/* =========================================================
   ANNOUNCEMENT
========================================================= */

function initAnnouncementBar() {

  const bar =
    document.getElementById(
      "announcementBar"
    );

  const closeButton =
    document.getElementById(
      "announcementClose"
    );


  if (
    !bar ||
    !closeButton
  ) {
    return;
  }


  if (
    sessionStorage.getItem(
      "shetrend_announcement_closed"
    ) === "1"
  ) {

    bar.classList.add(
      "hidden"
    );
  }


  closeButton.addEventListener(
    "click",
    () => {

      bar.classList.add(
        "hidden"
      );

      sessionStorage.setItem(
        "shetrend_announcement_closed",
        "1"
      );
    }
  );
}


/* =========================================================
   SEARCH
========================================================= */

function initSearch() {

  const toggle =
    document.getElementById(
      "searchToggle"
    );

  const panel =
    document.getElementById(
      "searchPanel"
    );

  const closeButton =
    document.getElementById(
      "searchClose"
    );

  const input =
    document.getElementById(
      "searchInput"
    );

  const results =
    document.getElementById(
      "searchResults"
    );


  if (
    !toggle ||
    !panel ||
    !closeButton ||
    !input ||
    !results
  ) {
    return;
  }


  function openSearch() {

    panel.classList.add(
      "open"
    );

    setTimeout(
      () =>
        input.focus(),
      300
    );
  }


  function closeSearch() {

    panel.classList.remove(
      "open"
    );

    input.value = "";

    results.innerHTML =
      "";
  }


  toggle.addEventListener(
    "click",
    () => {

      if (
        panel.classList.contains(
          "open"
        )
      ) {

        closeSearch();

      } else {

        openSearch();
      }
    }
  );


  closeButton.addEventListener(
    "click",
    closeSearch
  );


  input.addEventListener(
    "input",
    () => {

      const query =
        input.value
          .trim()
          .toLowerCase();


      if (!query) {

        results.innerHTML =
          "";

        return;
      }


      const matches =
        products
          .filter(
            product =>
              product.name
                .toLowerCase()
                .includes(query) ||
              product.category
                .toLowerCase()
                .includes(query)
          )
          .slice(0, 6);


      if (
        matches.length === 0
      ) {

        results.innerHTML = `
          <p class="search-empty">
            لا توجد نتائج مطابقة لـ
            "${input.value}"
          </p>
        `;

        return;
      }


      results.innerHTML =
        matches
          .map(
            product => `
              <a
                href="#"
                class="search-result-item"
                data-searchresult="${product.id}"
              >

                <img
                  src="${product.image}"
                  alt="${product.name}"
                >

                <div>

                  <div class="name">
                    ${product.name}
                  </div>

                  <div class="price">
                    ${formatPrice(
                      product.price
                    )} شيكل
                  </div>

                </div>

              </a>
            `
          )
          .join("");


      results
        .querySelectorAll(
          "[data-searchresult]"
        )
        .forEach(
          link => {

            link.addEventListener(
              "click",
              event => {

                event.preventDefault();

                closeSearch();

                openQuickView(
                  link.dataset.searchresult
                );
              }
            );
          }
        );
    }
  );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(
  message,
  icon = "bi-check-circle",
  delay = 3000
) {

  const container =
    document.getElementById(
      "toastContainer"
    );

  if (!container) {
    return;
  }


  const toastElement =
    document.createElement(
      "div"
    );


  toastElement.className =
    "toast align-items-center";


  toastElement.setAttribute(
    "role",
    "alert"
  );


  toastElement.innerHTML = `
    <div class="d-flex">

      <div class="toast-body">

        <i class="bi ${icon}"></i>

        ${message}

      </div>


      <button
        type="button"
        class="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="إغلاق"
      ></button>

    </div>
  `;


  container.appendChild(
    toastElement
  );


  if (
    window.bootstrap &&
    bootstrap.Toast
  ) {

    const toast =
      new bootstrap.Toast(
        toastElement,
        {
          delay
        }
      );

    toast.show();


    toastElement.addEventListener(
      "hidden.bs.toast",
      () =>
        toastElement.remove()
    );

  } else {

    toastElement.classList.add(
      "show"
    );

    setTimeout(
      () =>
        toastElement.remove(),
      delay
    );
  }
}


/* =========================================================
   FADE INS
========================================================= */

function observeFadeIns(
  root = document
) {

  const items =
    root.querySelectorAll
      ? root.querySelectorAll(
          ".fade-in-up:not(.visible)"
        )
      : [];


  if (
    !(
      "IntersectionObserver" in
      window
    )
  ) {

    items.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          }
        );
      },
      {
        threshold: 0.12
      }
    );


  items.forEach(
    element =>
      observer.observe(
        element
      )
  );
}


/* =========================================================
   HERO
========================================================= */

function initHeroParallax() {

  const heroImage =
    document.getElementById(
      "heroImage"
    );

  const hero =
    document.getElementById(
      "hero"
    );


  if (
    !heroImage ||
    !hero
  ) {
    return;
  }


  window.addEventListener(
    "scroll",
    () => {

      const scrollY =
        window.scrollY;


      if (
        scrollY <
        hero.offsetHeight
      ) {

        heroImage.style.transform =
          `scale(${
            1.05 +
            scrollY *
            0.0002
          }) translateY(${
            scrollY *
            0.08
          }px)`;
      }
    },
    {
      passive: true
    }
  );
}


/* =========================================================
   TRENDING CAROUSEL
========================================================= */

function initTrendingCarousel() {

  const track =
    document.getElementById(
      "trendingTrack"
    );

  const previous =
    document.getElementById(
      "trendPrev"
    );

  const next =
    document.getElementById(
      "trendNext"
    );


  if (
    !track ||
    !previous ||
    !next
  ) {
    return;
  }


  const scrollAmount =
    300;


  previous.addEventListener(
    "click",
    () => {

      track.scrollBy({
        left:
          scrollAmount,
        behavior:
          "smooth"
      });
    }
  );


  next.addEventListener(
    "click",
    () => {

      track.scrollBy({
        left:
          -scrollAmount,
        behavior:
          "smooth"
      });
    }
  );
}


/* =========================================================
   NEWSLETTER
========================================================= */

function initNewsletter() {

  const form =
    document.getElementById(
      "newsletterForm"
    );

  const successMessage =
    document.getElementById(
      "newsletterSuccess"
    );


  if (
    !form ||
    !successMessage
  ) {
    return;
  }


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const email =
        document.getElementById(
          "newsletterEmail"
        );


      if (!email) {
        return;
      }


      if (
        !email.checkValidity()
      ) {

        email.classList.add(
          "is-invalid"
        );

        return;
      }


      successMessage.classList.remove(
        "d-none"
      );


      form.reset();


      showToast(
        "تم الاشتراك بنجاح 🤍",
        "bi-envelope-check"
      );


      setTimeout(
        () =>
          successMessage.classList.add(
            "d-none"
          ),
        5000
      );
    }
  );
}


/* =========================================================
   CATEGORY LINKS FROM INDEX
========================================================= */

function initCategoryLinks() {

  const categoryElements =
    document.querySelectorAll(
      `
      .categories-section [data-category],
      .category-card[data-category],
      [data-category-link][data-category]
      `
    );


  categoryElements.forEach(
    element => {

      const rawCategory =
        element.dataset.category;


      if (!rawCategory) {
        return;
      }


      const category =
        normalizeCategory(
          rawCategory
        );


      const href =
        `shop.html?category=${encodeURIComponent(
          category
        )}`;


      /*
        If the category element itself
        is an <a>
      */

      if (
        element.tagName
          .toLowerCase() ===
        "a"
      ) {

        element.setAttribute(
          "href",
          href
        );

        return;
      }


      /*
        If it contains an <a>
      */

      const anchor =
        element.querySelector(
          "a"
        );


      if (anchor) {

        anchor.setAttribute(
          "href",
          href
        );

        return;
      }


      /*
        Otherwise make the entire
        category card clickable.
      */

      element.style.cursor =
        "pointer";


      element.addEventListener(
        "click",
        event => {

          if (
            event.target.closest(
              "button"
            )
          ) {
            return;
          }

          window.location.href =
            href;
        }
      );
    }
  );
}


/* =========================================================
   GLOBAL DELEGATION
========================================================= */

function initGlobalDelegation() {

  document.addEventListener(
    "click",
    event => {

      /* SWATCH */

      const swatch =
        event.target.closest(
          ".swatch"
        );


      if (swatch) {

        event.preventDefault();
        event.stopPropagation();


        const productId =
          Number(
            swatch.dataset.product
          );


        document
          .querySelectorAll(
            `.swatch[data-product="${productId}"]`
          )
          .forEach(
            button =>
              button.classList.remove(
                "active"
              )
          );


        swatch.classList.add(
          "active"
        );

        return;
      }


      /* SIZE */

      const sizeButton =
        event.target.closest(
          ".size-option"
        );


      if (sizeButton) {

        event.preventDefault();
        event.stopPropagation();


        const productId =
          Number(
            sizeButton.dataset.product
          );


        document
          .querySelectorAll(
            `.size-option[data-product="${productId}"]`
          )
          .forEach(
            button =>
              button.classList.remove(
                "active"
              )
          );


        sizeButton.classList.add(
          "active"
        );

        return;
      }


      /* WISHLIST */

      const wishButton =
        event.target.closest(
          "[data-wish]"
        );


      if (wishButton) {

        event.preventDefault();
        event.stopPropagation();


        toggleWishlist(
          wishButton.dataset.wish
        );

        return;
      }


      /* QUICK ADD */

      const quickAddButton =
        event.target.closest(
          "[data-quickadd]"
        );


      if (quickAddButton) {

        event.preventDefault();
        event.stopPropagation();


        const product =
          findProduct(
            quickAddButton.dataset.quickadd
          );


        if (!product) {
          return;
        }


        if (!product.available) {

          showToast(
            "عذرًا، هذا المنتج غير متوفر حاليًا",
            "bi-x-circle"
          );

          return;
        }


        const color =
          product.colors &&
          product.colors.length === 1
            ? product.colors[0]
            : null;


        /*
          If product has one color
          and no size -> directly add.
        */

        if (
          color &&
          (
            !product.sizes ||
            product.sizes.length === 0
          )
        ) {

          addToCart(
            product.id,
            color,
            1,
            null
          );

          return;
        }


        /*
          Otherwise open Quick View
          to choose color/size.
        */

        openQuickView(
          product.id
        );

        return;
      }


      /* QUICK VIEW */

      const quickViewTarget =
        event.target.closest(
          "[data-qv]"
        );


      if (quickViewTarget) {

        if (
          event.target.closest(
            "button"
          )
        ) {
          return;
        }


        event.preventDefault();


        openQuickView(
          quickViewTarget.dataset.qv
        );

        return;
      }


      /* CART MINUS */

      const cartMinus =
        event.target.closest(
          "[data-cartminus]"
        );


      if (cartMinus) {

        event.preventDefault();


        changeCartQty(
          cartMinus.dataset.pid,
          cartMinus.dataset.color,
          cartMinus.dataset.size,
          -1
        );

        return;
      }


      /* CART PLUS */

      const cartPlus =
        event.target.closest(
          "[data-cartplus]"
        );


      if (cartPlus) {

        event.preventDefault();


        changeCartQty(
          cartPlus.dataset.pid,
          cartPlus.dataset.color,
          cartPlus.dataset.size,
          1
        );

        return;
      }


      /* CART REMOVE */

      const cartRemove =
        event.target.closest(
          "[data-cartremove]"
        );


      if (cartRemove) {

        event.preventDefault();


        removeFromCart(
          cartRemove.dataset.pid,
          cartRemove.dataset.color,
          cartRemove.dataset.size
        );

        return;
      }
    }
  );


  /* CART TOGGLE */

  const cartToggle =
    document.getElementById(
      "cartToggle"
    );


  if (cartToggle) {

    cartToggle.addEventListener(
      "click",
      () => {

        const cart =
          document.getElementById(
            "cartOffcanvas"
          );


        if (
          cart &&
          window.bootstrap &&
          bootstrap.Offcanvas
        ) {

          bootstrap.Offcanvas
            .getOrCreateInstance(
              cart
            )
            .show();
        }
      }
    );
  }


  /* STICKY CART */

  const stickyButton =
    document.getElementById(
      "stickyCartBtn"
    );


  if (stickyButton) {

    stickyButton.addEventListener(
      "click",
      () => {

        const cart =
          document.getElementById(
            "cartOffcanvas"
          );


        if (
          cart &&
          window.bootstrap &&
          bootstrap.Offcanvas
        ) {

          bootstrap.Offcanvas
            .getOrCreateInstance(
              cart
            )
            .show();
        }
      }
    );
  }


  /* SORT */

  const sortSelect =
    document.getElementById(
      "sortSelect"
    );


  if (sortSelect) {

    sortSelect.addEventListener(
      "change",
      event => {

        state.sort =
          event.target.value;

        renderShop();
      }
    );
  }


  /* CHECKOUT */

  const checkoutButton =
    document.getElementById(
      "checkoutBtn"
    );


  if (checkoutButton) {

    checkoutButton.addEventListener(
      "click",
      () => {

        if (
          state.cart.length === 0
        ) {

          showToast(
            "السلة فارغة",
            "bi-bag"
          );

          return;
        }


        const cart =
          document.getElementById(
            "cartOffcanvas"
          );


        if (
          cart &&
          window.bootstrap &&
          bootstrap.Offcanvas
        ) {

          bootstrap.Offcanvas
            .getOrCreateInstance(
              cart
            )
            .hide();
        }


        renderOrderSummary();


        setTimeout(
          () => {

            const checkout =
              document.getElementById(
                "checkoutModal"
              );


            if (
              checkout &&
              window.bootstrap &&
              bootstrap.Modal
            ) {

              bootstrap.Modal
                .getOrCreateInstance(
                  checkout
                )
                .show();
            }

          },
          300
        );
      }
    );
  }


  /* CHECKOUT FORM */

  const checkoutForm =
    document.getElementById(
      "checkoutForm"
    );


  if (checkoutForm) {

    checkoutForm.addEventListener(
      "submit",
      handleCheckoutSubmit
    );
  }
}


/* =========================================================
   CATEGORY FROM URL
========================================================= */

function initCategoryFromURL() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const categoryParam =
    params.get(
      "category"
    );


  /*
    No category
  */

  if (!categoryParam) {

    state.filters.category =
      "الكل";


    const title =
      document.getElementById(
        "categoryTitle"
      );


    if (title) {

      title.textContent =
        "جميع المنتجات";
    }


    const eyebrow =
      document.getElementById(
        "categoryEyebrow"
      );


    if (eyebrow) {

      eyebrow.textContent =
        "SHE TREND COLLECTION";
    }


    renderFilters();
    renderShop();

    return;
  }


  /*
    Convert URL value to the
    correct Arabic category.
  */

  const category =
    normalizeCategory(
      categoryParam
    );


  state.filters.category =
    category;


  const title =
    document.getElementById(
      "categoryTitle"
    );


  if (title) {

    title.textContent =
      category;
  }


  const eyebrow =
    document.getElementById(
      "categoryEyebrow"
    );


  if (eyebrow) {

    eyebrow.textContent =
      "SHE TREND COLLECTION";
  }


  renderFilters();
  renderShop();
}


/* =========================================================
   GLOBAL FUNCTIONS
   In case HTML uses onclick=""
========================================================= */

window.addToCart =
  addToCart;

window.removeFromCart =
  removeFromCart;

window.changeCartQty =
  changeCartQty;

window.openQuickView =
  openQuickView;

window.toggleWishlist =
  toggleWishlist;


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadState();


    /*
      Important:
      initialize category links
      on index.html.
    */

    initCategoryLinks();


    /*
      Read ?category=...
      on shop.html.
    */

    initCategoryFromURL();


    renderNewArrivals();

    renderTrending();

    renderReviews();

    renderInstagram();


    /*
      Render cart after loading
      localStorage.
    */

    renderCart();

    updateCartCount();

    updateStickyCartBar();


    initNavbarScroll();

    initAnnouncementBar();

    initSearch();

    initHeroParallax();

    initTrendingCarousel();

    initNewsletter();

    initGlobalDelegation();


    observeFadeIns(
      document
    );
  }
);
