// input: array
// output: min/max value

const wallet = {
  transactions: [23, 32, 2, 56, 98],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
