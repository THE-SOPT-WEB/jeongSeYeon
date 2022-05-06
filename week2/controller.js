import View from "./view";
import Model from "./model";

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.initEventHandlers();
    this.initQuiz();
  }

  initQuiz() {
    const { coffeeList, order } = this.model;
    this.view.changeCoffee(coffeeList[order].name);
  }

  initEventHandlers() {
    this.view.setOnClickCoffeeButton(this.onClickCoffeeButton.bind(this));
    this.view.setOnClickResetButton(this.onClickResetCoffee.bind(this));
    this.view.setOnLoadImg(this.onLoadImg.bind(this));
    this.view.setOnClickModalBackgrounds(
      this.onClickModalBackground.bind(this)
    );
  }

  onClickCoffeeButton(e) {
    const { coffeeList, order } = this.model;

    if (coffeeList.length) {
      this.checkAnswer(+e.target.dataset.id, coffeeList[order].id);
    }
  }

  onClickResetCoffee() {
    this.model.resetCoffee();
    this.view.resetScore();
    this.initQuiz();
  }

  onClickModalBackground(e) {
    this.view.closeModal(e);
  }

  onLoadImg() {
    this.view.endLoading();
  }

  checkAnswer(myChoiceId, answerId) {
    if (myChoiceId === answerId) {
      this.onSuccess();
      this.setNextQuiz(answerId);
    } else {
      this.onFail();
    }
  }

  onSuccess() {
    this.view.startLoading();
    this.view.resetAni();
    this.view.upScore();
  }

  onFail() {
    this.view.openModal();
  }

  setNextQuiz(answerId) {
    const coffeeList = this.model.updateCoffeeList(answerId);
    const order = this.model.choiceRandom();

    if (coffeeList.length) {
      this.view.changeCoffee(coffeeList[order].name);
    } else {
      this.view.showEnding();
    }
  }
}
