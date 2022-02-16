// const numbers=[ 3,1,8, 6, 2, 5, 4,];
// const sortNumbrs= numbers.sort()
// const reverseNumber=numbers.reverse()
// console.log(reverseNumber)
// const friendsName=['Amin', "Jilani", 'AJit', "Momin", 'AKash', 'Khokon'];
// const sortNames=friendsName.sort();
// const reverseNames=friendsName.reverse()
const bigNumbers=[10, 15, 87, 84, 51, 12, 36, 29,100, 70, 50];
const sortBigNumbers=bigNumbers.sort(function(a, b){
return a-b
});
const reverseBigNumbers= bigNumbers.reverse()
console.log(sortBigNumbers)