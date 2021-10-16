const lowerSlider = document.querySelector("#lower"),
  upperSlider = document.querySelector("#upper");

let filters = {
  price: {
    lowerPriceVal: parseFloat(lowerSlider.value),
    upperPriceVal: parseFloat(upperSlider.value),
  },
};

const products = [
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-silver-ring.png",
    name: "Diamond Silver Ring",
    price: 9.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "necklace.png",
    name: "Necklace",
    price: 15.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-bracelet.png",
    name: "Bracelet",
    price: 20.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-ring.png",
    name: "Ring",
    price: 40.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-silver-ring.png",
    name: "Diamond Silver Ring",
    price: 50.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "necklace.png",
    name: "Necklace",
    price: 80.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-bracelet.png",
    name: "Bracelet",
    price: 89.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-ring.png",
    name: "Ring",
    price: 125.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-silver-ring.png",
    name: "Diamond Silver Ring",
    price: 160.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "necklace.png",
    name: "Necklace",
    price: 190.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-bracelet.png",
    name: "Bracelet",
    price: 230.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-ring.png",
    name: "Ring",
    price: 250.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-silver-ring.png",
    name: "Diamond Silver Ring",
    price: 290.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "necklace.png",
    name: "Necklace",
    price: 350.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-bracelet.png",
    name: "Bracelet",
    price: 380.99,
  },
  {
    reviewsCount: 4,
    ratings: 4,
    img: "diamond-ring.png",
    name: "Ring",
    price: 400.99,
  },
];

function sliderHandler() {
  const minPriceWrapper = $("#min-price-filter");
  const maxPriceWrapper = $("#max-price-filter");

  minPriceWrapper.html(filters.price.lowerPriceVal);
  maxPriceWrapper.html(filters.price.upperPriceVal);

  upperSlider.oninput = function () {
    filters.price.lowerPriceVal = parseFloat(lowerSlider.value);
    filters.price.upperPriceVal = parseFloat(upperSlider.value);

    minPriceWrapper.html(filters.price.lowerPriceVal);
    maxPriceWrapper.html(filters.price.upperPriceVal);

    // if (lowerVal > upperVal) {
    //   lowerSlider.value = upperVal - 4;
    //   upperSlider.value = 4;
    // }

    // if (upperVal < lowerVal + 4) {
    //   lowerSlider.value = upperVal - 4;

    //   if (lowerVal == lowerSlider.min) {
    //     upperSlider.value = 4;
    //   }
    // }
    filterByPrice();
  };

  lowerSlider.oninput = function () {
    filters.price.lowerPriceVal = parseFloat(lowerSlider.value);
    filters.price.upperPriceVal = parseFloat(upperSlider.value);

    minPriceWrapper.html(filters.price.lowerPriceVal);
    maxPriceWrapper.html(filters.price.upperPriceVal);

    // if (lowerVal > upperVal) {
    //   upperSlider.value = lowerVal + 4;
    //   lowerSlider.value = parseFloat(upperSlider.max) - 4;
    // }

    // if (lowerVal > upperVal - 4) {
    //   upperSlider.value = lowerVal + 4;

    //   if (upperVal == upperSlider.max) {
    //     lowerSlider.value = parseFloat(upperSlider.max) - 4;
    //   }
    // }
    filterByPrice();
  };
}

function showProductsOnDOM(prods) {
  let productsMarkup = "";
  $(".product-card").parent().remove();

  let filteredProducts;

  filteredProducts = products;

  if (prods) {
    filteredProducts = prods;
  }
  filteredProducts.forEach((el) => {
    productsMarkup += `
  <div class="col-6 col-sm-4 col-md-3">
  <div class="product-card">
  <div class="product-slider">
  <img
  src="./assets/images/${el.img}"
  alt=""
  />
  </div>
  <div class="product-details">
  <div class="reviews">
  <img src="./assets/images/star-fill.png" alt="" />
  <img src="./assets/images/star-fill.png" alt="" />
  <img src="./assets/images/star-fill.png" alt="" />
  <img src="./assets/images/star-fill.png" alt="" />
  <img src="./assets/images/star-no-fill.png" alt="" />
  <span>(4 Customer Review)</span>
  </div>
  <h3>${el.name}</h3>
  <h2>${el.price}</h2>
  </div>
  </div>
  </div>
  `;
  });

  $(".products_container .row").append(productsMarkup);
  $("#result-count").html(filteredProducts.length);
  const filtersLen = Object.keys(filters).length;

  console.log(filtersLen > 0);

  $("#filters-names").html(
    `${
      filtersLen > 0
        ? filtersLen + ` ${filtersLen === 1 ? "Filter" : "Filters"} Applied`
        : "No Filters Applied"
    }`
  );
}

function filterByPrice() {
  let filtered = products.filter(
    (el) =>
      el.price > filters.price.lowerPriceVal &&
      el.price < filters.price.upperPriceVal
  );
  showProductsOnDOM(filtered);
}

showProductsOnDOM();
filterByPrice();
sliderHandler();

// $(document).on("click", ".dropdown-menu", function (e) {
//   $this = $(this);
//   e.stopPropagation();
//   console.log();
//   let styles = $this.attr("style");
//   setTimeout(function () {
//     console.log(styles);
//     $this.addClass("show");
//     $this.attr("style", styles);
//   }, 1);
// });

$(".dropdown-menu").unbind();
