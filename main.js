"use strict";

// dom manipulations

 // 1. selecting elements
// getElementByID() -- fast / rarely
// const title = document.getElementById("main-heading");
// const secondTitle = document.getElementById("second-heading");


// getElementsByClassName()
// const country = document.getElementsByClassName("country");


// getElementsByTagName()
// const input = document.getElementsByTagName("input");
// const country = document.getElementsByTagName("li");


/* // querySelector() -- most of the cases
const title2 = document.querySelector("#main-heading"); // id
const btn = document.querySelector(".btn"); // class
const h2 = document.querySelector("h2"); // tag */

/* // querySelectorAll() -- most of the cases
const country = document.querySelectorAll(".country");
// console.log(country); */

// styling element
/* const title = document.querySelector("#main-heading");
title.style.color = "crimson";
title.style.backgroundColor = "crimson"; 

const country = document.querySelectorAll(".country");

for(let i=0; i<country.length; i++)
{
    country[i].style.color = "red";
    country[i].style.fontSize = "5rem";
}
 */


// Creating Element
/* const ul = document.querySelector("ul")

const li = document.querySelector("li");
const li2 = document.querySelector("li");

li.textContent = "indPakia";
li2.textContent = "argentine"; 


// Append
ul.append(li);
console.log(li)
ul.appendChild(li)
console.log(li)
ul.insertAdjacentElement("afterbegin", li);
ul.insertAdjacentElement("afterbegin", li2);
console.log(li2)
ul.insertAdjacentElement("beforeend", li); */

/* const firstCountry = document.querySelector(".country");
firstCountry.innerHTML = " BD"; */

/* const myCountry = "Bangladesh";

const container = document.querySelector(".container");
container.innerHTML = `
      <h1 id="main-heading">Countries</h1>
      <h2 id="second-heading">List</h2>
      <ul>
        <li class="country">${myCountry}</li>
        <li class="country">USA</li>
        <li class="country">Canada</li>
        <li class="country">Dubai</li>
        <li class="country">UK</li>
      </ul>
      <input type="text" class="input" />
      <button class="btn">Add country</button>
`;

console.log(container); */

// const h1 = document.querySelector("#main-heading");
/* h1.setAttribute("class", "main-headline m");
h1.setAttribute("width", "300px");
h1.removeAttribute("class");
h1.removeAttribute("width"); */
/* h1.classList.add("main-heading", "first-country");
h1.classList.remove("main-heading"); */

// ********************node traversal

// const ul = document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.parentNode);
// console.log(ul.childNodes);
// console.log(ul.children);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

/* const h1 = document.querySelector("#main-heading");

console.log(h1.nextSibling)
console.log(h1.nextElementSibling)
console.log(h1.previousSibling)
console.log(h1.previousElementSibling) */

// ************************Event Handlers

/* const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    const li = document.createElement("li");
    li.classList.add("rasu");
    li.textContent = input.value;

    ul.insertAdjacentElement("beforeend", li);
    input.value = "";
}); */





/* const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    const li = document.createElement("li");
    li.classList.add("comeback");

    li.textContent = Number(input.value) * 2; // input.value always provide string value
    ul.append(li);
    input.value = "";
}) */
