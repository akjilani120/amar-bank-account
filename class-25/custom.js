function checkRed(){
    document.body.style.backgroundColor="red";
}
const blueButton=document.getElementById('blue-btn')
blueButton.onclick=clickBLue;
function clickBLue(){
    document.body.style.backgroundColor="blue"
}
const greenButton=document.getElementById('green-btn');
console.log(greenButton)
greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor="green"
})
const updateButton=document.getElementById('update-btn').addEventListener('click', function(){
    const inputText=document.getElementById("input-text");
    const  textOutput=document.getElementById("text-output");
     textOutput.innerText=inputText.value;
     inputText.value="";
 })

 const pst=document.getElementById("post").addEventListener('click', function(){
    const textarea=document.getElementById('text-post');
    const addedHead=document.getElementById('text-container')
    
    const addedText=document.createElement('p');
    addedHead.appendChild(addedText);
    addedText.innerText=textarea.value;
    textarea.value="";
})