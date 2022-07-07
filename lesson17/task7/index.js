const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(names) {
    const fullNameArr = names.split(' ');
    this.firstName = fullNameArr[0];
    this.lastName = fullNameArr[1];
  },
};
