let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(nestedArray[0]);
console.log(nestedArray[1][2]); 

console.log(nestedArray.flat()); 
console.log(nestedArray.flat(2)); 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);

console.log(combined); 

let arr3 = [7, 8, 9];
let allCombined = arr1.concat(arr2, arr3);
console.log(allCombined); 

let spreadCombined = [...arr1, ...arr2, ...arr3];
console.log(spreadCombined); 

let mixed = [...arr1, "Hello", ...arr2];
console.log(mixed); 

let copyArr = [...arr1];
console.log(copyArr); 
