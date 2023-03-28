export default class Team {
  constructor(arr) {
    this.arr = arr;
  }

  * [Symbol.iterator]() {
    yield* this.arr;
  }
}
