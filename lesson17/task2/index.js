const callBackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callBackPrompt.showDeferredPrompt(1000);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',34
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };
// // user.getFullName();

// const func = user.getFullName.bind(user);

// func();
