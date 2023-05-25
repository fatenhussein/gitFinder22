let reposno1 = document.getElementById("repo1");
let searchVal1 = document.getElementById("searchVal1");
let searchVal2 = document.getElementById("searchVal2");
let FLname1 = document.getElementById("name1");
let userName1 = document.getElementById("userName1");
let followers1 = document.getElementById("followers1");
let following1 = document.getElementById("following1");
let btnCompare = document.querySelector(".compare");
let profileImg1 = document.getElementById("profile-img1");
let winner = document.querySelector("#winnner");

////////////////////////////////////

let name1;
let name2;
let reposno2 = document.getElementById("repo2");

let FLname2 = document.getElementById("name2");
let userName2 = document.getElementById("userName2");
let followers2 = document.getElementById("followers2");
let following2 = document.getElementById("following2");

let profileImg2 = document.getElementById("profile-img2");

let norepo1;
let user1Follwers;
let user2Follwers;
let norepo2;
/////////////////////////////////////////

async function getUser1() {
  // repo_con.innerHTML = ``;
  const response = await fetch(
    "https://api.github.com/users/" + searchVal1.value
  );
  const response2 = await fetch(
    "https://api.github.com/users/" + searchVal1.value + "/repos"
  );
  const data = await response.json();
  const repos = await response2.json();
  FLname1.innerHTML = data.name;
  name1 = data.login;
  userName1.innerHTML = data.login;
  profileImg1.src = data.avatar_url;

  followers1.innerHTML = data.followers;
  user1Follwers = data.followers;
  following1.innerHTML = data.following;
  arrRepos = repos;
  reposno1.innerHTML = arrRepos.length;
  norepo1 = arrRepos.length;
  console.log(arrRepos);
  // name1= arrRepos.full_name;
  console.log(repos);
  // followers1 = data.followers;
}

async function getUser2() {
  // repo_con.innerHTML = ``;
  const response = await fetch(
    "https://api.github.com/users/" + searchVal2.value
  );
  const response2 = await fetch(
    "https://api.github.com/users/" + searchVal2.value + "/repos"
  );
  const data = await response.json();
  const repos = await response2.json();
  FLname2.innerHTML = data.name;
  userName2.innerHTML = data.login;
  name2 = data.login;
  profileImg2.src = data.avatar_url;

  followers2.innerHTML = data.followers;
  following2.innerHTML = data.following;
  arrRepos = repos;
  reposno2.innerHTML = arrRepos.length;
  user2Follwers = data.followers;
  norepo2 = arrRepos.length;
  user2Follwers = data.followers;
  console.log(arrRepos);

  // followers2 = data.followers;
  // user2Follwers= data.followers;
  console.log(repos);
}

searchVal1.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getUser1();
  }
});

searchVal2.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getUser2();
    console.log("hi");
  }
});
////////////////////////////////////////////////

btnCompare.addEventListener("click", () => {
  if (norepo1 > norepo2) {
    winner.innerHTML = name1;
  } else if (norepo2 > norepo1) {
    winner.innerHTML = name2;
  } else if (norepo1 === norepo2) {
    if (user1Follwers > user2Follwers) {
      winner.innerHTML = name1;
    } else if (user2Follwers > user1Follwers) {
      winner.innerHTML = name2;
    } else if ((norepo1 === norepo2) & (user1Follwers === user2Follwers)) {
      winner.innerHTML = "";
      winner.innerHTML = "it's a tie!";
    }
  }
});
