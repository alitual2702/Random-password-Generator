const inputText = document.querySelector("#text")
const number = document.querySelector("#numbers");
const lower = document.querySelector("#lowercase");
const upper = document.querySelector("#uppercase");
const symbol = document.querySelector("#symbol");
const range = document.querySelector("#rangeSet");
const btn = document.querySelector("#buttonClick")
// variables
let regU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let regA = "abcdefghijklmnopqrstuvwxyz"
let regN = "123456789";
let regS = "!@#$%^&*()_+~`";

//  random code generate
function randomPass(val){
    return val[Math.floor(Math.random() * val.length)]
}

// password handling
function generate(pass = ""){
    
    if(upper.checked){
        pass += randomPass(regU);
    }
    if(lower.checked){
        pass += randomPass(regA);
    }
    if(number.checked){
        pass += randomPass(regN);
    }
    if(symbol.checked){
        pass += randomPass(regS);
    }
    if(pass.length < range.value){
        return generate(pass)
    }
    inputText.value = truncate(pass , range.value)
}

// truncate passwrd Length

function truncate(str,arg){
    if(str.length > arg){
        let re = str.substring(0, arg);
        return re
    }else{
        return str
    }
}
 
// event listener on Button

btn.addEventListener('click' , () => {
  generate()
})