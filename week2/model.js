import { coffeeList } from "./utils/constant";

export default class Model {
  order;
  coffeeList;
  left;

  constructor() {
    this.initCoffee();
  }

  initCoffee() {
    this.coffeeList = coffeeList.slice();
    this.choiceRandom();
  }

  resetCoffee() {
    this.initCoffee();
  }

  updateCoffeeList(answerId) {
    this.coffeeList = this.coffeeList.filter(({ _, id }) => id !== answerId);

    return this.coffeeList;
  }

  choiceRandom() {
    this.left = this.coffeeList.length;
    this.order = Math.floor(Math.random() * this.left);

    return this.order;
  }
}
