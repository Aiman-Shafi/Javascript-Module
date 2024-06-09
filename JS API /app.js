// fetch - https://jsonplaceholder.typicode.com/posts

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => displayData(data));

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((data) => displayData(data));

// const postsDiv = document.querySelector(".posts");

// const arr = ["apple", "mango", "lichi", "kiwi"];

// function displayData(fruits) {
//   let data = fruits.slice(0, 20);
//   data.forEach((fruit) => {
//     // console.log(post);
//     postsDiv.innerHTML += `
//     <div class="box">
//         <h4>${fruit.id}</h4>
//         <h2>${fruit.email}</h2>
//         <h2>${fruit.name}</h2>
//         <p>${fruit.body}</p>
//     </div>
//     `;
//   });
// }

// displayData(arr);

const PHOTOS_API = "https://jsonplaceholder.typicode.com/photos";

const postsDiv = document.querySelector(".posts");

function fetchApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((photos) => displayPhotos(photos));
}

function displayPhotos(photos) {
  const allPhotos = photos.slice(0, 20);
  allPhotos.forEach((photo) => {
    console.log(photo);
    postsDiv.innerHTML += `
        <div class="box">
            <img src=${photo.thumbnailUrl} alt=${photo.title} />
            <h4>${photo.id}</h4>
            <h2>${photo.title}</h2>
        </div>
    `;
  });
}

fetchApi(PHOTOS_API);
