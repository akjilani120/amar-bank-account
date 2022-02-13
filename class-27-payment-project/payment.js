// function getTotalElemet(){
//     const inputField=document.getElementById(inputId);
//     const inputMainValue=parseInt(inputField.value);
// }
function getPlusElement(inputId, isAdd, price){
    const inputField=document.getElementById(inputId + "-number");
     let inputMainValue=inputField.value;
    //  let inputMain= parseInt(inputMainValue )
    if(isAdd == true){
        inputMainValue  = parseInt(inputMainValue) + 1;
    }else if(inputMainValue > 0){
        inputMainValue =parseInt(inputMainValue) - 1;
    }
    inputField.value=inputMainValue;
    const priseSet=document.getElementById(inputId + "-total");
    // const pricetotal=parseInt(priseSet.innerText)
   priseSet.innerText= inputMainValue *  price;
    
   getTotalPrice();
}
function getProductNumber(inputId){
    const productNumber=document.getElementById(inputId + "-number")
    const mainProductNumber=parseInt( productNumber.value);
    return mainProductNumber;
}
function getTotalPrice(){
    const phonePrice=getProductNumber("phone") * 1219;
    const casePrice=getProductNumber("case") * 59;
    const subTotal= phonePrice + phonePrice;
    const taxTotal=subTotal /10;
    const total=taxTotal + subTotal;
    
    document.getElementById("subtotal").innerText=subTotal;
    document.getElementById("tax").innerText=taxTotal;
    document.getElementById("total-balance").innerText=total;

}

document.getElementById("case-first-btn").addEventListener('click', function(){
  const inputPlus=  getPlusElement("phone",   true ,1240 );
})
document.getElementById("case-second-btn").addEventListener('click', function(){
    const inputPlus=  getPlusElement("case",  true, 59);
 })
 document.getElementById("minus-first-btn").addEventListener("click", function(){
     const inputMinus= getPlusElement("phone", false, 1240)
     
 })
 document.getElementById("minus-second-btn").addEventListener("click", function(){
     const inputMinus= getPlusElement("case", false, 59)
   
     
 })
