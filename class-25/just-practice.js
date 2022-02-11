const h2=document.querySelectorAll("h2");

for(const work of h2){
    work.style.color="lightblue"
}
document.getElementById("first-sec").style.backgroundColor='yellow';
function clickHere(){
    console.log("Yes you click me!!!")
}
const buyBottun= document.getElementById('buy-btn')
buyBottun.addEventListener('click', function(){
    buyBottun.style.display="none";
})
document.getElementById("input-text").addEventListener('keyup', function(event){
  const removeButton=  document.getElementById("remove-btn")
    if(event.target.value== "Remove now"){
        removeButton.removeAttribute('disabled');
    }else{
        removeButton.setAttribute("disabled", true)
    }
   
})
document.body.addEventListener("dblclick", function(){
    document.body.style.backgroundColor="red";
    // console.log("i am double clicked")
})

// function setnewimage() {
//     document.getElementById("img2").src = "img/1.jpg";
//     }
//     function setnewimage1() {
//     document.getElementById("img2").src = " img/2.jpg";
//     }
//     function setnewimage2() {
//     document.getElementById("img2").src = "img/3.jpg";
//     }
//     function setnewimage3() {
//     document.getElementById("img2").src = "img/4.jpg";
//     }
//     function setoldimage() {
//     document.getElementById("img2").src = "img/5.jpg";
//     }
function changeImage(){
   
    document.getElementById('show-image').src="img/4.jpg";
   
   
}
function mouseOut(){
    document.getElementById('show-image').src="img/2  .jpg";
}