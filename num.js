let numbers = [12, 36, 8, 57, 49, 23, 45];

let largest = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is: " + largest);


//
/*let numbers = [12, 36, 8, 57, 49, 23,];
let largest = Math.max(...numbers);
console.log("Largest number is: " + largest);*/