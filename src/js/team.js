export default class Team {
  constructor(arr) {
    this.arr = arr;
  }

  [Symbol.iterator]() {
    const { arr } = this;
    let nextIndex = 0;
    return {
      next() {
        if (nextIndex < arr.length) {
          const result = { value: arr[nextIndex], done: false };
          nextIndex += 1;
          return result;
        }
        return { done: true };
      },
    };
  }
}
