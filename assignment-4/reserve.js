let clicked = false;
let hat = 237;
let shirt = 46;
let mittens = 0;
let shoes = 96;
let pompom = 57;
let updateItem = 0;

const gnome = document.getElementById("gnomeImg");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.width = gnome.width;
canvas.height = gnome.height;
context.drawImage(gnome, 0, 0, canvas.width, canvas.height);
const imageData = context.getImageData(0,0,canvas.width, canvas.height);
let dataImg = imageData.data;



let reset = document.getElementById("resetButton");
reset.addEventListener("click", ()=> {
    console.log("refreshed");
    location.reload();
    
});

function changeColor(swatchId, item){
    fetch("https://x-colors.yurace.pro/api/random")
    .then (response => {return response.json()})
    .then((data) => {
    
        console.log(data);

    document.getElementById(`${swatchId}`).style.backgroundColor = data.hex;

    let rgbVals = [];
    let match = (data.rgb).match(/\((\d+), (\d+), (\d+)\)/);
    if(match){
        console.log("matched");
        rgbVals = [,r,g,b] = match.map(Number);
    }

    console.log(rgbVals);
    
    for(let i = 0; i < dataImg.length; i += 4){
        //console.log("item in for loop: " + item);
        if(dataImg[i] == item){
            dataImg[i] = rgbVals[1];
            dataImg[i+1] = rgbVals[2];
            dataImg[i+2] = rgbVals[3];
        }
    }

    
    context.putImageData(imageData, 0, 0);
    gnome.src = canvas.toDataURL();
    item = rgbVals[1];
    console.log(item);
    });
    
}



let hatButton = document.getElementById("hatButton");
hatButton.addEventListener("click", () =>{
clicked = true;

hatButton.value ="Generating...";

changeColor("swatch1", hat);

});

let shirtButton = document.getElementById("shirtButton");
shirtButton.addEventListener("click", () =>{
shirtButton.value = "Generating...";
changeColor("swatch2", shirt);
});


let mittenButton = document.getElementById("mittenButton");
mittenButton.addEventListener("click", () =>{
mittenButton.value = "Generating...";
changeColor("swatch3", mittens);
});

let shoeButton = document.getElementById("shoeButton");
shoeButton.addEventListener("click", () =>{
shoeButton.value = "Generating...";
changeColor("swatch4", shoes);
});

let pompomButton = document.getElementById("pompomButton");
pompomButton.addEventListener("click", () =>{
pompomButton.value = "Generating...";
changeColor("swatch5", pompom);
});

