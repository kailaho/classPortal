let button = document.getElementById("button");
let hover = document.getElementById("hover");

let Acell = document.getElementsByClassName("Acell");
let Bcell = document.getElementsByClassName("BCell");

let colorChanged = false;
let textChanged = false;

button.addEventListener("click", ()=>{
    if(textChanged){
        console.log("if");
        textChanged = false;
    } else{
        console.log("else");
        button.innerText = "Welcome to my Assignment 1 Webpage!";
        textChanged = true;
    }
});

hover.addEventListener("mouseover", ()=>{
    for(const cell of Acell){
        cell.style.backgroundColor= "black";
    }

});
