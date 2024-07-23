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

function getCount(str){
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letters =>{
        return vowels.includes(letters) ? true : false
    }).length;
}

console.log(getCount('helloworld'));