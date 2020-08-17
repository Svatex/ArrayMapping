const userBtn = document.querySelector(".user");
const doubleBtn = document.querySelector(".double");
const milBtn = document.querySelector(".millionaires");
const sortBtn = document.querySelector(".sort");
const sumBtn = document.querySelector(".sum");

const userWindow = document.querySelector(".users-new");
const userWealth = document.querySelectorAll(".wealth");

let userData = [];

async function createUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  let userName = `${data.results[0].name.first} ${data.results[0].name.last}`;
  let rndMoney = Math.random() * 1500000;

  const newUser = {
    name: userName,
    money: rndMoney,
  };
  userData.push(newUser);

  upadateDOM(userData);
}

function upadateDOM(obj) {
  userWindow.innerHTML = "";
  obj.forEach((item) => {
    const user = document.createElement("div");
    user.classList.add("users");

    const person = document.createElement("li");
    person.innerHTML = item.name;
    person.classList.add("person");

    const wealth = document.createElement("li");
    wealth.innerHTML =
      "$ " + item.money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    wealth.classList.add("wealth");

    user.appendChild(person);
    user.appendChild(wealth);
    userWindow.appendChild(user);
  });
}

function multiplyMoney() {
  userData = userData.map((item) => {
    console.log(item.money);
    return { ...item, money: item.money * 2 };
  });
  upadateDOM(userData);
}

function sortByRichest() {
  userData.sort((a, b) => b.money - a.money);

  upadateDOM(userData);
}

function filterMil() {
  userData = userData.filter((cash) => {
    return cash.money > 1000000;
  });
  upadateDOM(userData);
}

function sum() {
  let sumMoney = userData.reduce((acc, cash) => acc + cash.money, 0);
  upadateDOM(userData);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>${
    "$ " + sumMoney.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }</h3>`;
  userWindow.appendChild(wealthEl);
}

userBtn.addEventListener("click", () => {
  createUser();
});

doubleBtn.addEventListener("click", () => {
  multiplyMoney();
});

sortBtn.addEventListener("click", () => {
  sortByRichest();
});

milBtn.addEventListener("click", () => {
  filterMil();
});

sumBtn.addEventListener("click", () => {
  sum();
});
