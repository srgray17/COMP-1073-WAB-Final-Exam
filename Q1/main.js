// JavaScript Document

let main = document.querySelector("main");
let submitButton = document.querySelectorAll("input")[1];
let body = document.querySelector("body");

submitButton.addEventListener("click", function(e) {
  let personName = document.querySelector("input").value;
  console.log(personName);
  let para = document.createElement("p");
  para.innerHTML = "Hey there " + personName + "! Thanks for stopping by!";
  main.appendChild(para);
  body.setAttribute("class", "meow");
  console.log("=^..^=");
});

