const userBtn = document.querySelector(".user");
const doubleBtn = document.querySelector(".double");
const milBtn = document.querySelector(".millionaires");
const sortBtn = document.querySelector(".sort");
const sumBtn = document.querySelector(".sum");

const userWindow = document.querySelector(".users-new");
const userWealth = document.querySelectorAll(".wealth");

let userArr = []
let wealthArr = []

function addUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      let first = data.results[0].name.first;
      let last = data.results[0].name.last;

      let money =
        "$ " +
        (Math.random() * 1500000)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      const user = document.createElement("div");
      user.classList.add("users");

      const person = document.createElement("li");
      person.innerHTML = first + " " + last;
      person.classList.add("person");

      const wealth = document.createElement("li");
      wealth.innerHTML = money;
      wealth.classList.add("wealth");

      user.appendChild(person);
      user.appendChild(wealth);
      userWindow.appendChild(user);
    });
}

userBtn.addEventListener("click", () => {
  addUser();
  console.log(userWealth);
});

/* const output = 
`<div class="users">
    <h3 class="person">${a}</h3>
   <h4 class="wealth">${a}</h4>
</div>`;

userWindow.innerHTML = output; */

/* const user = document.createElement("div");
  user.classList.add("users");

  const person = document.createElement("li");
  person.innerText = first + " " + last;
  person.classList.add("person");

  const wealth = document.createElement("li");
  wealth.innerText = b;
  wealth.classList.add("wealth");

  user.appendChild(person);
  user.appendChild(wealth);
  userWindow.appendChild(user); */
