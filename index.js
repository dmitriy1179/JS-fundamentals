//1.1
let name = prompt("What your name?");
alert(`Hello, ${name}`);

//1.2
let yearOfBirth = prompt("What /*  */year were you born?");
const currentYear = Number(2025);
Number.isNaN(+yearOfBirth) || Number.isNaN(parseInt(yearOfBirth)) || (yearOfBirth > 2025) ? alert("You entered an incorrect year of birth") : alert(`You are ${currentYear - yearOfBirth} years old`);

//1.3 
let widthSquare = prompt("What is width of square?");
Number.isNaN(+widthSquare) || Number.isNaN(parseInt(widthSquare)) ? alert("You entered an incorrect data") :
alert(`Perimeter is ${widthSquare *= 4}`);