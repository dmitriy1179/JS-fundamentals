//1.1
let name = prompt("What your name?");
alert(`Hello, ${name}`);

//1.2
let yearOfBirth;
const currentYear = Number(2025);
while(Number.isNaN(+yearOfBirth) || Number.isNaN(parseInt(yearOfBirth)) || (yearOfBirth > 2025)) {
yearOfBirth = prompt("What year were you born?");
}
alert(`You are ${currentYear - yearOfBirth} years old`);

//1.3 
let widthSquare = prompt("What is width of square?");
Number.isNaN(+widthSquare) || Number.isNaN(parseInt(widthSquare)) ? alert("You entered an incorrect data") :
alert(`Perimeter is ${widthSquare *= 4}`);

//2.1
let a = (0.1 + 0.2).toFixed(1);
console.log("a", a);

//2.2
let str = "1";
let nbr = 2;
console.log("result:", +str + nbr);

//2.3
let memory;
do {
  const response = prompt("Specify the memory capacity in GB");
  memory = +response && parseInt(response);
} while(!memory);
let files = Math.floor(memory * 1024 / 820);
alert(`The flash drive can hold ${files} files`)


//2.4
let amount;
do {
  const response = prompt("enter the deposit amount");
  amount = +response && parseInt(response);
} while(!amount);
const percent = 5;
const month = 2;
const result = (amount * (percent / 12 * month / 100)).toFixed(2);
const [grn, kop] = result.split(".");
alert(`${grn} grn ${kop} kop`);