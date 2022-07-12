// input: numbers
// output: sum of square of numbers

function sumOfSquares() {
  return [].map.apply(arguments, [e => e ** 2]).reduce((acc, elem) => acc + elem);
}
console.log(sumOfSquares(2, 2, 4));

// function squareSum(numbers) {
//   return numbers
//     .map(function (n) {
//       return n * n;
//     })
//     .reduce(function (sum, n) {
//       return sum + n;
//     });
// }

// console.log(squareSum([2, 2, 2]));
