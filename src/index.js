module.exports = function reverse (n) {
let str1 = n.toString();
let arr1 = str1.split('');
let arr2 = arr1.reverse();
let str2 = arr2.join('');
let newNum =  parseInt(str2);
return newNum;
}
