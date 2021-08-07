let usersFirstNumber = prompt(`введіть перше число`);
let usersSecondNumber = prompt(`введіть друге число`);

let firstNumber = (Math.trunc(usersFirstNumber));
let secondNumber = (Math.trunc(usersSecondNumber));

while (isNaN(usersFirstNumber) || isNaN(usersSecondNumber)) {
    alert (`Некоректне введення. Спробуйте ще раз`);    
    let usersFirstNumber = prompt(`введіть перше число`);
    let usersSecondNumber = prompt(`введіть друге число`);
    
    let firstNumber = (Math.trunc(usersFirstNumber));
    let secondNumber = (Math.trunc(usersSecondNumber));
};

let skipEvenNumbers = confirm(`Пропускати парні числа?`);

let biggerNumer;
let smallerNumber;

if (firstNumber > secondNumber) {
    biggerNumer = firstNumber;
    smallerNumber = secondNumber;
} else {
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



