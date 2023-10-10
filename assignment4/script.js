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
const dataImg = imageData.data;

function changeColor(swatchId, item){
    let random = Math.random() * (360) + 0;
    fetch(`https://onesimpleapi.com/api/color?token=FfBa6nZASAaMErZUaw2L8rHFWMtUhx2xFMMdNq61&output=json&hue=${random}&&text=Jane`)
    .then (response => {return response.json()})
    .then((data) => {
    
    console.log(data);
    console.log(data.rgb);

    document.getElementById(`${swatchId}`).style.backgroundColor = `rgb(${data.rgb})`;
    
    for(let i = 0; i < dataImg.length; i += 4){
        if(dataImg[i] === item){
            dataImg[i] = data.rgb[0];
            dataImg[i + 1] = data.rgb[1];
            dataImg[i + 2] = data.rgb[2];
        }
    }

    
    context.putImageData(imageData, 0, 0);
    gnome.src = canvas.toDataURL();
    console.log(data.rgb[0]);
    updateItem = data.rgb[0];
    });
    
}



let hatButton = document.getElementById("hatButton");
hatButton.addEventListener("click", () =>{
clicked = true;

hatButton.value ="Generating...";

console.log(clicked);
console.log(updateItem);
changeColor("swatch1", hat);
console.log(updateItem);

//moL051sQMnHOeOfyJM4JpZBqoL9FMiscnsKitRQR
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


