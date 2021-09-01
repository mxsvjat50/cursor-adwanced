let firstNumber = Math.trunc(prompt(`введіть перше число`));
let secondNumber = Math.trunc(prompt(`введіть друге число`));

while (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert (`Некоректне введення. Спробуйте ще раз`);    
    firstNumber = Math.trunc(prompt(`введіть перше число`));
    secondNumber = Math.trunc(prompt(`введіть друге число`));
};

const skipEvenNumbers = confirm(`Пропускати парні числа?`);

let biggerNumer = firstNumber;
let smallerNumber = secondNumber;

if (firstNumber < secondNumber) {
    biggerNumer = secondNumber;
    smallerNumber = firstNumber;
};

let sum = 0;
for (smallerNumber; smallerNumber <= biggerNumer; smallerNumber++) {
    if (skipEvenNumbers) {
        if (smallerNumber % 2 === 0) continue;
    }
    sum = sum + smallerNumber;
}
alert ('Результат ' + sum);

console.log (sum);



