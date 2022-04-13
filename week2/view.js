import { $, $$ } from "./utils/common.js";
export default class View {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.$score = $("score-board > h2");
    this.$img = $("quiz-board__coffee");
    this.$coffeeButton = $("quiz-board__button-wrapper");
    this.$resetButton = $("reset-section__button");
    this.$loading = $("loading");
    this.$background = $("background");
  }

  setOnClickCoffeeButton(fn) {
    this.$coffeeButton.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) fn(e);
    });
  }

  setOnClickResetButton(fn) {
    this.$resetButton.addEventListener("click", () => fn());
  }

  setOnClickModalBackgrounds(fn) {
    this.$background.addEventListener("click", (e) => fn(e));
  }

  setOnLoadImg(fn) {
    this.$img.addEventListener("load", () => fn());
  }

  changeCoffee(name) {
    this.$img.setAttribute("src", `./assets/${name}.jpeg`);
  }

  upScore() {
    this.$score.innerText = +this.$score.innerText + 1;
    this.$score.classList.add("correct");
  }

  resetScore() {
    this.$score.innerText = 0;
  }

  openModal() {
    this.$background.classList.remove("hidden");
  }

  resetAni() {
    this.$score.classList.remove("correct");
  }

  closeModal(e) {
    e.target.classList.add("hidden");
  }

  startLoading() {
    this.$loading.classList.remove("hidden");
  }

  endLoading() {
    this.$loading.classList.add("hidden");
  }

  showEnding() {
    this.$img.setAttribute("src", `./assets/end.jpeg`);
  }
}
