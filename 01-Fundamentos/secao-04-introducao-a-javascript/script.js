let numbers = [6, 10, 34, 18, 70, 8, 100, 2, 34, 28];
let oddNumber = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumber += 1;
    }
}
if (oddNumber < 1) {
    console.log('Nenhum valor ímpar encontrado')
}
else {
    console.log(oddNumber);
};