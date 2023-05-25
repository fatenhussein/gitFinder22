let searchVal = document.getElementById("searchVal");
let searchBtn = document.getElementById("search-btn");
let FLname = document.querySelector(".name");
let userName = document.querySelector(".userName");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let small_img = document.querySelector(".small-img");
let repo_con = document.querySelector(".repo-con");
let profileIng = document.querySelector(".profile-img");
let techName = document.querySelector("tech-name");
let color = "blueViolet";

repo_con.innerHTML = ``;
async function getDefUser() {
  const response = await fetch("https://api.github.com/users/fatenhussein");
  const response2 = await fetch(
    "https://api.github.com/users/fatenhussein/repos"
  );
  const data = await response.json();
  const repos = await response2.json();
  FLname.innerHTML = data.name;
  userName.innerHTML = data.login;
  profileIng.src = data.avatar_url;
  small_img.src = data.avatar_url;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;

  arrRepos = repos.slice(0, 6);
  console.log(arrRepos);
  arrRepos.map((el) => {
    if (el.language === "HTML") {
      color = "red";
    } else if (el.language === "JavaScript") {
      color = "yellow";
    } else if (el.language === "CSS") {
      color = "purple";
    } else if (el.language === "PHD") {
      color = "blueViolet";
    }
    repo_con.innerHTML += `

<div class="repo-name-acceses">
<div class="name-acceses">
<h3 class="repo-name">${el.name}</h3>
<p class="tech-name">
  <span
    class="repo-language-color"
 
    style="background-color: ${color}"
  ></span
  >${el.language}
</p>
</div>

<p class="acceses">${el.visibility}</p>
</div>


`;
  });
}

getDefUser();

let arrRepos = [];

repo_con.innerHTML = ``;
FLname.innerHTML = "";
async function getUser() {
  repo_con.innerHTML = ``;
  const response = await fetch(
    "https://api.github.com/users/" + searchVal.value
  );
  const response2 = await fetch(
    "https://api.github.com/users/" + searchVal.value + "/repos"
  );
  const data = await response.json();
  const repos = await response2.json();
  FLname.innerHTML = data.name;
  userName.innerHTML = data.login;
  profileIng.src = data.avatar_url;
  small_img.src = data.avatar_url;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;

  arrRepos = repos.slice(0, 6);
  console.log(arrRepos);
  arrRepos.map((el) => {
    if (el.language === "HTML") {
      color = "red";
    } else if (el.language === "JavaScript") {
      color = "yellow";
    } else if (el.language === "CSS") {
      color = "purple";
    } else if (el.language === "PHD") {
      color = "blueViolet";
    }
    repo_con.innerHTML += `

<div class="repo-name-acceses">
<div class="name-acceses">
  <h3 class="repo-name">${el.name}</h3>
  <p class="tech-name">
    <span
      class="repo-language-color"
   
      style="background-color: ${color}"
    ></span
    >${el.language}
  </p>
</div>

<p class="acceses">${el.visibility}</p>
</div>


`;
  });
  console.log(repos);
}

searchVal.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getUser();
  }
});
