/* Pretty Pointless storefront. Edit js/config.js, not this file. */
(function () {
  "use strict";
  var C = window.CONFIG, P = window.PRODUCTS || [], CATS = window.CATEGORIES || [];

  // Placeholder photo gradients (from the logo palette)
  var GRADS = [
    "linear-gradient(135deg,#FF8FDD 0%,#C39BFF 55%,#7EE3FA 100%)",
    "linear-gradient(135deg,#B98AF5 0%,#FF7AD9 100%)",
    "linear-gradient(135deg,#6FF5CF 0%,#7EDFFA 45%,#C39BFF 100%)",
    "linear-gradient(160deg,#FF7AD9 0%,#FFC2EC 45%,#7EE3FA 100%)"
  ];
  var BADGE_CLASS = { "spooky": "sticker-lilac", "holiday": "sticker-pink", "new": "sticker-mint", "add-on": "sticker-yellow", "big one": "sticker-cyan" };
  var SWATCH = {
    "red": "#E2555E", "white": "#FFFFFF", "bone white": "#F3EEE2", "black": "#2E2A33", "pastel pink": "#F4B6C2",
    "pink": "#F4B6C2", "lilac": "#C9B8E0", "periwinkle": "#B6B8EA", "mint": "#A8E0CC", "gold": "#D8B45A",
    "silver": "#C7CBD1", "as shown": "conic-gradient(#3FA9F5 0 34%,#F3F0E8 0 67%,#1E1B22 0)",
    "custom on request": "conic-gradient(#F956CB,#A665ED,#0BCBF4,#19F5BF,#F956CB)", "orange": "#F29A4A", "wheat": "#E8D1A0", "brown": "#8A5A3C", "sand": "#DCC7A1", "yellow": "#F6D35B"
  };

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function waLink(message) {
    return "https://wa.me/" + String(C.whatsappNumber).replace(/\D/g, "") + "?text=" + encodeURIComponent(message).replace(/[!'()*]/g, function (c) { return "%" + c.charCodeAt(0).toString(16).toUpperCase(); });
  }
  function orderMessage(p) {
    return C.orderMessage.replace("{product}", p.name).replace("{price}", p.price).replace("{currency}", C.currency);
  }
  function swatchStyle(color) {
    var parts = color.toLowerCase().split("&").map(function (s) { return s.trim(); });
    var cols = parts.map(function (s) { return SWATCH[s] || "#DDD"; });
    return cols.length > 1 ? "background:linear-gradient(135deg," + cols[0] + " 50%," + cols[1] + " 50%)" : "background:" + cols[0];
  }
  var WA_SVG = '<svg class="wa-ico" viewBox="0 0 32 32" aria-hidden="true"><use href="#wa-icon"/></svg>';

  // Global text from config
  document.querySelectorAll(".js-store-name").forEach(function (n) { n.textContent = C.storeName; });
  document.querySelectorAll(".js-tagline").forEach(function (n) { n.textContent = C.tagline; });
  document.querySelectorAll(".js-delivery").forEach(function (n) { n.textContent = C.deliveryNote; });
  document.querySelectorAll(".js-wa-display").forEach(function (n) { n.textContent = C.whatsappDisplay; });
  document.querySelectorAll(".js-wa-general").forEach(function (a) {
    a.href = waLink(C.generalMessage);
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  if (document.title.indexOf(C.storeName) === -1) document.title = C.storeName + " | Spooky, Festive & Cozy 3D Printed Decor, Made in the UAE";

  // Product cards
  var grid = document.getElementById("product-grid");
  P.forEach(function (p, i) {
    var photo;
    if (p.image) {
      photo = el("div", { "class": "photo has-img" + (p.imageFit === "contain" ? " fit-contain" : "") }, [el("img", { src: p.image, alt: p.imageAlt || p.name, loading: "lazy", decoding: "async" })]);
    } else {
      photo = el("div", { "class": "photo placeholder", style: "background:" + GRADS[i % GRADS.length], role: "img", "aria-label": p.name + " (photo coming soon)" }, [
        el("span", { "class": "ph-name", text: p.name }),
        el("span", { "class": "ph-note", text: "Photo coming soon" })
      ]);
    }
    if (p.badge) {
      photo.appendChild(el("span", { "class": "sticker badge " + (BADGE_CLASS[p.badge.toLowerCase()] || "sticker-yellow"), text: p.badge }));
    }
    var tags = el("div", { "class": "tags" }, p.categories.map(function (c) { return el("span", { "class": "tag", text: c }); }));
    var btn = el("a", { "class": "btn btn-wa btn-block", href: waLink(orderMessage(p)), target: "_blank", rel: "noopener",
      "aria-label": "Order " + p.name + " on WhatsApp", html: WA_SVG + "<span>Order on WhatsApp</span>" });
    var card = el("article", { "class": "card", "data-cats": p.categories.join("|"), id: "p-" + p.id }, [
      photo,
      el("div", { "class": "card-body" }, [
        tags,
        el("h3", { "class": "card-title", text: p.name }),
        el("p", { "class": "desc", text: p.description }),
        el("div", { "class": "buy-row" }, [
          el("p", { "class": "price", html: '<span class="cur">' + C.currency + "</span> " + p.price }),
          p.badge && p.badge.toLowerCase() === "add-on" ? el("span", { "class": "addon-note", text: "Add-on" }) : null
        ]),
        btn
      ])
    ]);
    grid.appendChild(card);
  });

  // Filters
  var filtersEl = document.getElementById("filters");
  var countEl = document.getElementById("result-count");
  var active = "All";
  ["All"].concat(CATS).forEach(function (cat) {
    var b = el("button", { type: "button", "class": "chip", "data-cat": cat, "aria-pressed": cat === "All" ? "true" : "false", text: cat });
    b.addEventListener("click", function () { setFilter(cat); });
    filtersEl.appendChild(b);
  });
  function setFilter(cat) {
    active = cat;
    filtersEl.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-cat") === cat ? "true" : "false"); });
    var shown = 0;
    grid.querySelectorAll(".card").forEach(function (c) {
      var match = cat === "All" || c.getAttribute("data-cats").split("|").indexOf(cat) !== -1;
      c.hidden = !match;
      if (match) shown++;
    });
    countEl.textContent = shown + (shown === 1 ? " design" : " designs") + (cat === "All" ? "" : " in " + cat);
  }
  setFilter("All");
  window.setFilter = setFilter;

  // Hero collection pills jump to filtered shop
  document.querySelectorAll("[data-jump]").forEach(function (b) {
    b.addEventListener("click", function () {
      setFilter(b.getAttribute("data-jump"));
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
  });
})();
