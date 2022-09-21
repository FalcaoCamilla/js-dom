"use strict";

const h1 = document.querySelector('h1');
const classP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
    title.innerText = timer;
    timer++
}, 10)

h1.textContent = "Novo texto"
h1.innerText = "Texto alterado"

const div = document.querySelector("div");
//div.innerHTML += "<strong>Esse é o meu texto alterado</strong>"
//div.innerHTML = `${div.innerHTML} <strong>Esse é o meu texto alterado</strong>`

const elementUl = document.createElement("ul");

[1, 2, 3].forEach((element) => {
    const elementLi = document.createElement("li");
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);

div.setAttribute("class", "bgRed")
div.style.setProperty("background", "red")
 
