export default class State {
  constructor(item) {
    this.item = item;
  }

  setState(newItem) {
    this.item = newItem;
  }


  getItem() {
    return this.item;
  }
}
