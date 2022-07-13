// ==== solving plan
// 1. create a class with parameters in constructor
// 2. create random id
// 3. make functional for methods

class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }
  id = (Math.random() * 100).toFixed();
  dateCreated = new Date();
  dateConfirmed = new Date();
  isConfirmed = false;

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Sell' || this.type === 'Buy') {
      return true;
    }

    return false;
  }
}

// ==== test data

const order1 = new Order('1200', 'Lviv', 'Buy');
const order2 = new Order('1000', 'Odessa', 'sell');
const order3 = new Order('2222', 'Ujgorod', 'sell');

console.log(order1.checkPrice());
console.log(order1.isValidType());

console.log(order2.checkPrice());
console.log(order2.isValidType());

console.log(order3.checkPrice());
console.log(order3.isValidType());

console.log(order1);
console.log(order2);
console.log(order3);
