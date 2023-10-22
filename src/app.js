/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  setInterval(() => {}, 1000 * 10);

  //Selectores de Html
  let htmlTopSuit = document.querySelector("#top-suit");
  let htmlBotSuit = document.querySelector("#bot-suit");
  let htmlNumber = document.querySelector(".number");
  const htmlButton = document.querySelector("button");

  //Funciones
  randomNumber(htmlNumber);
  randomSuit(htmlTopSuit, htmlBotSuit);

  htmlButton.addEventListener("click", event => {
    randomNumber(htmlNumber);
    randomSuit(htmlTopSuit, htmlBotSuit);
  });

  function randomNumber(htmlElement) {
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
    let iteration = Math.floor(Math.random() * number.length);
    htmlElement.innerHTML = number[iteration];
    return htmlElement;
  }

  function randomSuit(htmlElement, htmlElement2) {
    const suits = ["1", "2", "3", "4"];
    let iteration = Math.floor(Math.random() * suits.length);
    if (iteration == 1) {
      htmlElement.innerHTML = "&clubs;";
      htmlElement.classList.add("text-primary");
      htmlElement2.innerHTML = "&clubs;";
      htmlElement2.classList.add("text-primary");
    }
    if (iteration == 2) {
      htmlElement.innerHTML = "&diams;";
      htmlElement.classList.add("text-danger");
      htmlElement2.innerHTML = "&diams;";
      htmlElement2.classList.add("text-danger");
    }
    if (iteration == 3) {
      htmlElement.innerHTML = "&hearts;";
      htmlElement.classList.add("text-danger");
      htmlElement2.innerHTML = "&hearts;";
      htmlElement2.classList.add("text-danger");
    }
    if (iteration == 4) {
      htmlElement.innerHTML = "&spades;";
      htmlElement2.innerHTML = "&spades;";
    }
    return htmlElement, htmlElement2;
  }
};
