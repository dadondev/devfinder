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
// Not Refresh doing
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getUsers(inpSearch.value);
});
// is it error

async function getUsers(user, userObj) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const users = await response.json();
  async function errorSearch(e) {
    if (e.login) {
      userObj = e;
      await update(e);
      console.log(1);
    } else {
      return false;
    }
  }
  errorSearch(users);
}

// Starting
let not = "Not available";

// ---------------------
async function update(obj) {
  userAvatar.src = `${obj.avatar_url}`;
  userFirstName.textContent = obj.login ? obj.login : not;
  userName.href = `https://github.com/${obj.login}`;
  userName.textContent = `@${obj.login}`;
  console.log(obj);
  userJoin.textContent = obj.created_at;
  userBio.textContent = obj.bio ? obj.bio : not;
  userBlog.href = obj.blog ? obj.blog : "#";
  userBlog.textContent = obj.blog ? obj.blog : not;
  userFollowers.textContent = obj.followers ? obj.followers : "0";
  userFollowing.textContent = obj.following ? obj.following : "0";
  userRepos.textContent = obj.public_repos ? obj.public_repos : "0";
}
