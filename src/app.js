/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const suits = ["1", "2", "3", "4"];
  const number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  //Selectores de Html
  let htmlTopSuit = document.querySelector("#top-suit");
  let htmlBotSuit = document.querySelector("#bot-suit");
  let htmlNumber = document.querySelector(".number");
  //Funciones
  function randomNumber(array, htmlElement) {
    let iteration = Math.floor(Math.random() * array.length);
    htmlElement.innerHTML = array[iteration];
  }

  function randomSuit(array, htmlElement, htmlElement2) {
    let iteration = Math.floor(Math.random() * array.length);
    if (iteration === 1) {
      htmlElement.innerHTML = "&clubs;";
      htmlElement2.innerHTML = "&clubs;";
      htmlElement.classList.add("text-success");
      htmlElement2.classList.add("text-success");
    }
    if (iteration === 2) {
      htmlElement.innerHTML = "&diams;";
      htmlElement.classList.add("text-warning");
      htmlElement2.innerHTML = "&diams;";
      htmlElement2.classList.add("text-warning");
    }
    if (iteration === 3) {
      htmlElement.innerHTML = "&hearts;";
      htmlElement.classList.add("text-danger");
      htmlElement2.innerHTML = "&hearts;";
      htmlElement2.classList.add("text-danger");
    }
    if (iteration === 4) {
      htmlElement.innerHTML = "&spades;";
      htmlElement2.innerHTML = "&spades;";
    }
  }
  randomNumber(number, htmlNumber);
  randomSuit(suits, htmlTopSuit, htmlBotSuit);
};
