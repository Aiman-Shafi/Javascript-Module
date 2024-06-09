const USER_API = "https://randomuser.me/api/?results=20";

const postsDiv = document.querySelector(".posts");

function fetchApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((users) => displayUser(users));
}

function displayUser(users) {
  //   console.log(users.results);
  const allUsers = users.results;
  //   console.log(allUsers);
  allUsers.forEach((user) => {
    postsDiv.innerHTML += `
          <div class="box">
              <img src=${user.picture.large} alt="" />
              <h4>${user.email}</h4>
              <h4>${user.gender}</h4>
              <h2>${user.name.first} ${user.name.last}</h2>
          </div>
      `;
  });
}

fetchApi(USER_API);
