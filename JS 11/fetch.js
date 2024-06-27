const productDiv = document.querySelector(".products");
const errorDiv = document.querySelector(".error");

// fetch("https://fakestoreapi.com/products?limit=5")
//   .then((response) => {
//     if (response.status === 404) {
//       throw new Error("No data found!");
//     } else if (response.status === 500) {
//       throw new Error("Server Error");
//     } else if (response.status !== 200) {
//       throw new Error("Request Failed");
//     }
//     // return response.json();
//     console.log(response);
//   })
//   .then((data) => showProducts(data))
//   .catch((error) => {
//     console.log(error);
//     errorDiv.innerHTML = `<h4>${error}</h4>`;
//   });

fetch("https://fakestoreapi.com/product?limit=5")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong! :(");
    }
    return response.json();
  })
  .then((data) => showProducts(data))
  .catch((error) => {
    console.log(error);
    errorDiv.innerHTML = `<h4>${error}</h4>`;
  });

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
