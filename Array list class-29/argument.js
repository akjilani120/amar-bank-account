// function addeNumber(num1, num2){
//    let sum=0;
//    for(const num of arguments){
//        sum=sum + num;
//    }
//    return sum
// }
// // const numbers=25, 36;
// const totalNumber=addeNumber(25, 36, 100, 150, 200, 10, 102541, 8541);
// console.log(totalNumber)
function nameFunct(firstName, lastName){
    let sum= "";
    for(const name of arguments){
        sum=sum+ name + " ";
    }
return sum;
}
const fullName=nameFunct("Abdul", "kader", "Jilani", "Amin", 'Khokhon');
console.log(fullName)