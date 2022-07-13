// === solution plan ===
// 1. create user class with fields from condition
// 2. create another class 'userrepository'
// 3. create methods for this class
// 4. use methods (map, filter) to get users

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = users;
    Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserName() {
    return this.users.map(user => user._name);
  }

  getUserId() {
    return this.users.map(user => user._id);
  }

  getUserNameById(userId) {
    const filteredName = this.users.filter(user => user.id === userId);
    return filteredName[0].name;
  }
}

// ==== test data ====

const user = new UserRepository([
  { id: '1', name: 'Tom' },
  { id: '2', name: 'Mark' },
  { id: '3', name: 'Naomi' },
  { id: '4', name: 'Karl' },
]);

console.log(user);
console.log(user.getUserNameById('3'));
console.log(user.getUserNameById('1'));

// const user1 = new User('1', 'Tom', 'session-id');
// const user2 = new User('2', 'Mark', 'session-id');
// const user3 = new User('3', 'Naomi', 'session-id');
// const user4 = new User('4', 'Karl', 'session-id');

// console.log(user2.id);
// console.log(user3.name);

// console.log(user4.id);
