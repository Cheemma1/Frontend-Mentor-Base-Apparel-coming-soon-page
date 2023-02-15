

const form = document.querySelector("#form");
const input =document.querySelector("#email");
const icon =document.querySelector(".error-icon");
const errorMsg= document.querySelector('.error');
form.addEventListener("submit", e =>{
e.preventDefault();

if (input.value.length === ""){
errorMsg.style.display="block";
icon.style.display="block";
return;
}
else if (input.value.indexOf("@") === -1){
 errorMsg.style.display="block";
icon.style.display="block";  
}
else{
errorMsg.style.display="none";
icon.style.display="none";
}

});