function getcount(inputId, price, isAdd, priceId){
    const inputValue=document.getElementById(inputId)
    const mainInputValue=parseInt(inputValue.value)
    let count=1;
    
    if(isAdd == true){
        count =count + mainInputValue
        
    }else if(inputValue.value > 0){
        count = mainInputValue - count;
    }
    inputValue.value=count;
    const productPrice=document.getElementById(priceId);
    const prouctMain=parseInt(productPrice.innerText);
    const totalProductPrice=inputValue.value * price;
    productPrice.innerHTML=totalProductPrice;
   
    productPriceMain()
}

function totalId(inputId){
  const productPriceTotal=document.getElementById(inputId)
  const productPriceTotalMain=parseInt(productPriceTotal.innerText)
  return productPriceTotalMain;
}
// function totalId1(){
//   const productPriceTotal=document.getElementById("case-number")
//   const productPriceTotalMain=parseInt(productPriceTotal.value)
//   return productPriceTotalMain;
// }
function productPriceMain(){
  const subTotal=document.getElementById("sub-total"); 
  const tax=document.getElementById("tax-price")
 const phoneProduct=totalId("product-price");
const caseProduch=totalId("case-price")
const totalPrice=document.getElementById("total-price")
  const totalsubProduct= phoneProduct +  caseProduch; 
  
  subTotal.innerText=totalsubProduct; 
  const subMainPrice=parseInt(subTotal.innerText)
 tax.innerText=totalsubProduct/10;
 const totalTax=parseInt(tax.innerText)
 totalPrice.innerText=subMainPrice + totalTax

  
}

document.getElementById("plus-btn").addEventListener("click", function(){
  const plusValue=  getcount("type-number", 1219, true, "product-price") 
  

})
document.getElementById("minus-btn").addEventListener("click", function(){
    const plusValue=  getcount("type-number", 1219,  false, "product-price")
   
})
document.getElementById("case-plus").addEventListener("click", function(){
  const plusValue=  getcount("case-number", 59, true, 'case-price' ) 
  

})
document.getElementById("case-minus").addEventListener("click", function(){
    const plusValue= getcount("case-number", 59,  false, 'case-price')
   
})

