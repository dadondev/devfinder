// Form elements catch
const formEl = document.querySelector("form");
const inpSearch = document.querySelector("#input");
const btnSearch = document.querySelector("#search");
// User about elements catch
const userAvatar = document.querySelector("#avatar");
const userFirstName = document.querySelector("#name");
const userName = document.querySelector("#userName");
const userJoin = document.querySelector("#data");
const userBio = document.querySelector("#bio");
const userRepos = document.querySelector("#repos");
const userFollowers = document.querySelector("#followers");
const userFollowing = document.querySelector("#following");
const userLocation = document.querySelector("#location");
const userBlog = document.querySelector("#blog");
const userSocial = document.querySelector("#social");
const userGit = document.querySelector("#home");
// Got user information
let userObj;
// Not avaible function
function notAvailable(el) {
  if (el) {
    return el;
  } else {
    return "Not Available";
  }
}
// Not Refresh doing
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getUsers(inpSearch.value);
});
btnSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  getUsers(inpSearch.value);
});
// is it error

async function getUsers(user, userObj) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const users = await response.json();

  async function errorSearch(e) {
    if (e.login) {
      userObj = e;
      await elUpdate(e);
      console.log(1);
    } else {
      return false;
    }
  }
  errorSearch(users);
}

// Starting
async function elUpdate(e) {
  userAvatar.src = `${e.avatar_url}`;
}
