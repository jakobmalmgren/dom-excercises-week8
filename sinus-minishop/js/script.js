// Code here!
const hoddie = document.querySelector(".art-1 h3");
hoddie.innerText = "potato";

const start = document.querySelector("nav a");
start.innerText = "Start";

const contact = document.querySelector(".contact");
contact.innerText = "Mail Us";

const pElement = document.querySelector(".fire");
pElement.innerText = " lalalalalalalalalalal";

const button = document.querySelector(".btn");
button.style.backgroundColor = "red";
button.innerText = "PUSH";

const backgroundCard = document.querySelector(".art-1");
backgroundCard.style.backgroundColor = "blue";
document.title = "hej";

const adress = document.querySelector("footer article p");
adress.innerText = "kvarngatan 8b, 291 37 Kristianstad";

const paraGraph = document.querySelectorAll("p");
for (let i = 0; i < paraGraph.length; i++) {
  paraGraph[i].style.color = " pink";
}

const allBtn = document.querySelectorAll("button");
console.log(allBtn.length);
for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].innerText = "Add to cart";
}

const addClass = document.querySelector("nav a");
addClass.classList.add("active");

const removeLogo = document.querySelector(".logo");
removeLogo.classList.remove("logo");

const addNavEl = document.querySelector("nav");
addNavEl.innerHTML += `<a href="#">Ny Link</a>`;

const mainEl = document.querySelector("main");
let html = `    
                <article class="art-1"><figure><img src="img/hoodie-ocean.png" alt="hoodie" /></figure>
                    <h2>Sinus Hoodie</h2>
                    <h3>Forrest</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores
                </p></article>`;

mainEl.insertAdjacentHTML("beforeend", html);

const clickLogo = document.querySelector("header img");
clickLogo.addEventListener("click", () => {
  console.log("found you");
});

const articleEl = document.querySelectorAll("article");
for (let i = 0; i < articleEl.length; i++) {
  articleEl[i].addEventListener("click", () => {
    console.log("Hi, Im article Fire / Ash / Water");
  });
}
