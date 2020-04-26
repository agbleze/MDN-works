/* MDN documnetation on Arrays
Date: 25-04-2020; 23:30


*/
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping)
shopping[0] = 'custard'
console.log(shopping)
let random = ['tree', 795, [1,2,3]];
console.log(random[2][2]);
console.log(shopping.length);

let sequence = [1, 1, 2, 3, 5, 8, 13];

 for (i = 0; i < sequence.length; i++){
    console.log(sequence[i])
}

for (i = 0; i< shopping.length; i++) {
    console.log(shopping[i].toUpperCase());
}
let myData = 'Manchester, London, Liverpool, Birmingham, Leeds, Carlisle';
let myArray = myData.split(',');
console.log(myArray)
console.log(myArray[myArray.length-1])
let myNewstring = myArray.join('=')
console.log(myNewstring)
let dogNames = ['Rocket', 'Föash', 'Beggar', 'slugger'];
console.log(dogNames.toString())
console.log(myArray.push('Bradford', 'Norway', 'Barce'))
console.log(myArray)
let newLength = myArray.push('Spain');
console.log(newLength)
let removeLast = myArray.pop()
console.log(removeLast)
console.log(myArray.unshift('Edinburgh'))
let firstOff = myArray.shift()
console.log(firstOff)