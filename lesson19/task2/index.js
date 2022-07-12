// input: object
// output: array

// 1. create object
// 2. create function "getOwnProps"
// 2.1. create empty arr
// 2.2. use "for in" for object values
// 3. return array with key values of object

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};

Object.setPrototypeOf(ship, vehicle);

const getOwnProps = obj => {
  const resultArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      resultArr.push(prop);
    }
  }
  return resultArr;
};
console.log(getOwnProps(vehicle, ship));
