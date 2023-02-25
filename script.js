"use strict";

const button = document.getElementById("myButton");
const input = document.getElementById("myInput");
const blankSpace = document.getElementById("blankSpace");
const anchor = document.getElementById("cleanAll");

button.addEventListener("click", function () {
  const inputValue = input.value;

  const newDiv = document.createElement("div");
  newDiv.classList.add("box");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = inputValue;

  newDiv.appendChild(newParagraph);
  blankSpace.appendChild(newDiv);

  input.value = "";
});

anchor.addEventListener("click", function () {
  blankSpace.innerHTML = "";
});
