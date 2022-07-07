function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHI() {
    console.log(`hi, I am ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHI.bind(user), 1000);
deferredHi();