const formEl = document.querySelector("form");
const inPut = document.querySelector("#input");
const searchBtn = document.querySelector("#search");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
});

// let userName = "dadondev";
// async function getUsers(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const users = await response.json();
//   console.log(users);
// }
// getUsers(userName);
