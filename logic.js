let userInput = document.getElementById("userInput");
let button = document.getElementById("button");

let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphaLower = "abcdefghijklmnopqrstuvwxyz";
let digit = "1234567890";
let special = "!@#$%^&*()_+?><.,][{}/\|";

let alli = alphaLower+alphaUpper+digit+special;

let password = "";
let b=true;
function generate(){
    let len=parseInt(userInput.value);
    if(b && (len>0)){
    password+=alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
    password+=alphaLower[Math.floor(Math.random()*alphaLower.length)];
    password+=digit[Math.floor(Math.random()*digit.length)];
    password+=special[Math.floor(Math.random()*special.length)];
    
    while(len>password.length){
        password+=alli[Math.floor(Math.random()*alli.length)];
    }
    userInput.value="password: "+password;
    b=false;
    button.textContent="Reset";
    }
    else{
        userInput.value="";
        b=true;
        button.textContent="Generate";
    }
    password="";
}
