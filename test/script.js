const baseUrl = "https://fakestoreapi.com/products";

async function fetchProducts(limit = 10, page = 1) {
  const response = await fetch(`${baseUrl}?limit=${limit}&page=${page}`);
  const data = await response.json();
  displayResults(data);
  return data;
}

async function fetchAllProducts() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

function displayResults(data) {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";
  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
        `;
    productsContainer.appendChild(productElement);
  });
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  fetchAllProducts().then((data) => {
    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    applyFilters(filteredData);
  });
}

function handleFilters() {
  fetchAllProducts().then((data) => {
    applyFilters(data);
  });
}

function applyFilters(data) {
  const checkedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((input) => input.value);

  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filteredData = data.filter((product) => {
    const matchesCategory =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.category);
    const matchesSearch = product.title.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  displayResults(filteredData);
}

function handlePagination(page) {
  fetchProducts(10, page).then(displayResults);
}

// function initializePagination() {
//   const paginationContainer = document.getElementById("pagination");
//   for (let i = 1; i <= 10; i++) {
//     // Assuming there are 10 pages
//     const button = document.createElement("button");
//     button.textContent = i;
//     button.dataset.page = i;
//     paginationContainer.appendChild(button);
//   }
// }

document.getElementById("searchInput").addEventListener("input", handleSearch);
// document.getElementById("pagination").addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const page = parseInt(event.target.dataset.page);
//     handlePagination(page);
//   }
// });
document.querySelectorAll('input[name="category"]').forEach((checkbox) => {
  checkbox.addEventListener("change", handleFilters);
});

// Initial setup
// initializePagination();
// fetchProducts().then(displayResults);
fetchProducts();
