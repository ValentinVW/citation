import "./style.scss";
import { citation } from "./table.js";
/**
let btn = document.querySelector("button");

function random() {
  let rdm = citation[Math.floor(Math.random() * citation.length)];
  return rdm;
}

function event(event) {
  let paragraph = document.querySelector("p");
  let newText = paragraph.textContent(random());
  return newText;
}

btn.addEventListener("click", event);
**/
// --------------------------------------------------------------------------------------------------------------------------------------------------------

let btn = document.querySelector("button");

function event(event) {
  let rdm = citation[Math.floor(Math.random() * citation.length)];
  let paragraph = document.querySelector("p");
  let newText = (paragraph.textContent = rdm);
  return newText;
}

btn.addEventListener("click", event);
