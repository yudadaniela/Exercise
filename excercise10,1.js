//Your task is to make a function that can take any non-negative integer as an argument and
//return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.
let num = 9349025;
if(num>0){
    let numString = num.toString().split('').sort().reverse().join('');
console.log(numString);
}else{
    console.log("no es posible hacer la operacion ");
}








