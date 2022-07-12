function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newValueForAge) {
  if (newValueForAge >= 25) {
    this.age = newValueForAge;
    this.requestNewPhoto();
  } else if (newValueForAge < 0) {
    return false;
  } else {
    this.age = newValueForAge;
  }
  return this.age;
};

//   ====  test data


const user1 = new User('Tom');
const user2 = new User('Ann');
const user3 = new User('Alex');

console.log(user1.setAge(-12));
console.log(user2.setAge(33));
console.log(user3.setAge(26));


user1.sayHi();
user1.requestNewPhoto();
user1.setAge();