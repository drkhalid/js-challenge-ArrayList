class ArrayList {
  constructor() {
    // this.myArray = [...arguments];
    this.myArray = [1, 2, 3];
  }
  push(data) {
    this.myArray = [...this.myArray, data];
    return this.myArray;
  }
  unshift(data) {
    this.myArray = [data, ...this.myArray];
    return this.myArray;
  }

  pop() {
    this.myArray = this.myArray.slice(0, this.myArray.length - 1);
    return this.myArray;
  }
  shift() {
    this.myArray = this.myArray.slice(1, this.myArray.length);
    return this.myArray;
  }

  clear() {
    this.myArray.length = 0;
  }

  concat(data) {
    let concated = [...this.myArray, ...data];
    return new ArrayList(...concated);
  }

  map(data) {
    let maped = [];
    for (const value of this.myArray) {
      maped.push(data(value));
    }
    return new ArrayList(...maped);
  }

  filter(data) {
    let filtered = [];
    for (const value of this.myArray) {
      if (data(value) === true) {
        filtered.push(value);
      }
    }
    return new ArrayList(...filtered);
  }

  find(data) {
    return this.filter(data)[0];
  }

  reduce(data, total = 0) {
    let sumed = parseInt(total);
    for (const value of this.myArray) {
      sumed += data(parseInt(total), parseInt(value));
    }
    return new ArrayList(...sumed);
  }
}

let mine = new ArrayList();

console.log(mine);

for (const val of mine) {
  console.log(val);
}
