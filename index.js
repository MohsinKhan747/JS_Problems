// Reverse a String

let newString = "MohsinKhan";

// const reverseString = newString.split(""); //['M', 'o', 'h', 's','i', 'n', 'K', 'h','a', 'n'];
// const reverseString1 = reverseString.reverse(); //['h', 'a', 'n', '
// const newOne = reverseString1.join('');
// console.log(newOne);

let reverseStr = (str)=>{
    return str.split("").reverse().join('');
}
console.log(reverseStr(newString));
