// input: number
// output: array

const createArrayOfFunction = number => {
  arr = [];
  if (!number) return arr;
  else if (isNaN(number)) {
    return null;
  }
  for (let i = 0; i < number; i++) {
    arr[i] = () => i;
  }
  return arr;
};
const result = createArrayOfFunction(8)[4]();
console.log(result);
