let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumber = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumber += 1;
    }
}
console.log(oddNumber);