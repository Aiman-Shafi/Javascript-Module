const productDiv = document.querySelector(".products");
const errorDiv = document.querySelector(".error");
const loader = document.getElementById("loader");
const preLoader = document.querySelector(".preloader");

// fetch("https://fakestoreapi.com/product?limit=5")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Something went wrong! :(");
//     }
//     return response.json();
//   })
//   .then((data) => showProducts(data))
//   .catch((error) => {
//     console.log(error);
//     errorDiv.innerHTML = `<h4>${error}</h4>`;
//   });

// async function fetchProducts() {
//   const response = await fetch("https://fakestoreapi.com/products?limit=5");
//   const data = await response.json();

//   showProducts(data);
// }

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function showPreloader() {
  preLoader.style.display = "flex";
}

function hidePreloader() {
  preLoader.style.display = "none";
}

setTimeout(hidePreloader, 2000);

const fetchAllProducts = async () => {
  try {
    showLoader();
    const response = await fetch("https://fakestoreapi.com/products?limit=5");

    // check if response is ok
    if (!response.ok) {
      throw new Error("Something Went Wrong!");
    }

    const data = await response.json();
    hideLoader();
    // show products
    showProducts(data);
  } catch (error) {
    hideLoader();
    errorDiv.innerHTML = `<h4>${error}</h4>`;
  }
};

function showProducts(products) {
  products.forEach((product) => {
    productDiv.innerHTML += `
        <div class="product">
            <img src=${product.image} alt="" />
            <h2>${product.title}</h2>
            <p>${product.category}</p>
            <p>${product.price}</p>
        </div>
    `;
  });
}

fetchAllProducts();
// fetchProducts();
// fetchAllProducts().then(showProducts);

// function checkNumber(value) {
//   if (isNaN(value)) {
//     throw new Error(`${value} is not a number`);
//   }

//   return value + 2;
// }

// try {
//   const number = checkNumber("hello");
//   console.log(number);
// } catch (error) {
//   console.log(error);
// }
