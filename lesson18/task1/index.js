// input: guests and messages
// output: invitations for 18 years guests

// ==== step by step algo
// 1.create object with elements, message text
// 2.create method for our object
// 3. filter our elements (by age)
// 4. return filtered method with filtered elements

const event = {
  guests: [
    { name: 'Tom', age: 15, email: 'example@server.com' },
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Flint', age: 24, email: 'flint@gmail.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

// console.log(event.getInvitations());
event.getInvitations();