function megaFriends(friends){
//    if(Array.isArray(friends)){
//        console.log("Yes")
//    }else{
//        console.log("No")
//    }
    let mega=friends[0]
   
    for(const friend of friends){
    //    if(friend.length> mega.length){
    //        mega=friend
    //    }
    // if(friend.includes("jilan")){
    //     mega=friend
    // }
    if(friend.indexOf("Jisan") != -1){
        console.log("Is ok")
    }
   }
   return mega;
}
const bestFriends=["Amin", 'Khokon', 'Jisan', 'Momin', "sobus"]
const friendsList=megaFriends( bestFriends)
console.log(friendsList)
const number=[1, 3, 5];
const number2=[2, 4, 6];
const totalNumber=number.concat(number2);
console.log(totalNumber)