// Reverse a String

let newString = "MohsinKhan";

// const reverseString = newString.split(""); //['M', 'o', 'h', 's','i', 'n', 'K', 'h','a', 'n'];
// const reverseString1 = reverseString.reverse(); //['h', 'a', 'n', '
// const newOne = reverseString1.join('');
// console.log(newOne);

// let reverseStr = (str)=>{
//     return str.split("").reverse().join('');
// }
// console.log(reverseStr(newString));


// return the count of vowels in a current string.
// a,e,i,o,u

// let getCount = (str)=>{
//     let vowelsCount = 0;

//     const arr = str.split("");
//     for(let i = 0; i < arr.length; i++){
//         switch(arr[i]){
//             case 'a': vowelsCount++;
//             break;
//             case 'e': vowelsCount++;
//             break;
//             case 'i': vowelsCount++;
//             break;
//             case 'o': vowelsCount++;
//             break;
//             case 'u': vowelsCount++;
//             break;
//         }
//     }
//     return vowelsCount;
// }

// console.log(getCount('helloworld'));

// function getCount(str){
//     let vowels = ['a','e','i','o','u'];
//     return str.split('').filter(letters =>{
//         return vowels.includes(letters) ? true : false
//     }).length;
// }

// console.log(getCount('helloworld'));


//     function findSmallestInt(arrayofNumbers){

//         let smallestNumber;

//         for(let i = 0; i < arrayofNumbers.length; i++){
//             const arrNumber = arrayofNumbers[i];

//             if(i === 0){
//                 smallestNumber = arrNumber;
//             }
//             if(arrNumber < smallestNumber){
//                 smallestNumber = arrNumber;
//             }
//         }
//         return smallestNumber;
//     }

// console.log(findSmallestInt([-1,1,2,3,-9,5,6,8]));


// let intersection = [[1,2,3,11],[2,3,4,11]]; // get same elements without using forloop.

let newfuntion = (arr1,arr2)=> arr1.filter(value => arr2.includes(value));

function intersection(arr1,arr2){
    return arr1.filter((value)=>{
       return arr2.includes(value);
    })
}

let result = intersection([1,2,3],[2,3,4])
console.log(result);

// console.log(newfuntion([1,2,3,11],[2,3,4,11]));
