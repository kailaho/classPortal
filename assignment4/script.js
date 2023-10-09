let clicked = false;
let hat = 237;
let shirt = 46;
let mittens = 0;
let shoes = 96;
let pompom = 57;

let button = document.getElementById("clickHere");
button.addEventListener("click", () =>{
clicked = true;

button.value ="Generating...";

console.log(clicked);
var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N","N","N","N","N"]
}

var http = new XMLHttpRequest();

let generatedColorPalette = [];


    http.onreadystatechange = function() {

        if(http.readyState == 4 && http.status == 200) {
            
            console.log(hat, shirt, mittens, shoes, pompom);

            var palette = JSON.parse(http.responseText).result;
            generatedColorPalette.push(palette[0]);
            document.getElementById("swatch1").style.backgroundColor = `rgb(${generatedColorPalette[0][0]},${generatedColorPalette[0][1]}, ${generatedColorPalette[0][2]})`;
            generatedColorPalette.push(palette[1]);
            document.getElementById("swatch2").style.backgroundColor = `rgb(${generatedColorPalette[1][0]},${generatedColorPalette[1][1]}, ${generatedColorPalette[1][2]})`;
            generatedColorPalette.push(palette[2]);
            document.getElementById("swatch3").style.backgroundColor = `rgb(${generatedColorPalette[2][0]},${generatedColorPalette[2][1]}, ${generatedColorPalette[2][2]})`;
            generatedColorPalette.push(palette[3]);
            document.getElementById("swatch4").style.backgroundColor = `rgb(${generatedColorPalette[3][0]},${generatedColorPalette[3][1]}, ${generatedColorPalette[3][2]})`;
            generatedColorPalette.push(palette[4]);
            document.getElementById("swatch5").style.backgroundColor = `rgb(${generatedColorPalette[4][0]},${generatedColorPalette[4][1]}, ${generatedColorPalette[4][2]})`;
    
            
                const gnome = document.getElementById("gnomeImg");
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.width = gnome.width;
                canvas.height = gnome.height;
                context.drawImage(gnome, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0,0,canvas.width, canvas.height);
                const data = imageData.data;
            
                for (let i = 0; i < data.length; i +=4){
                    //hat
                    console.log("in for loop");
                    if(data[i] === hat){
                        console.log("in if statement");
                        data[i] = generatedColorPalette[0][0];
                        data[i + 1] = generatedColorPalette[0][1];
                        data[i + 2] = generatedColorPalette[0][2];
                        
                    } 
                    //shirt
                    else if(data[i] === shirt){
                        data[i] = generatedColorPalette[1][0];
                        data[i + 1] = generatedColorPalette[1][1];
                        data[i + 2] = generatedColorPalette[1][2];
                        
                    }
                    //mittens
                    else if(data[i] === mittens){
                        data[i] = generatedColorPalette[2][0];
                        data[i + 1] = generatedColorPalette[2][1];
                        data[i + 2] = generatedColorPalette[2][2];
                       
                    }
                    //shoes
                    else if (data[i] === shoes){
                        data[i] = generatedColorPalette[3][0];
                        data[i + 1] = generatedColorPalette[3][1];
                        data[i + 2] = generatedColorPalette[3][2];
    
                    } 
                    //pompom
                    else if (data[i] === pompom){
                        data[i] = generatedColorPalette[4][0];
                        data[i + 1] = generatedColorPalette[4][1];
                        data[i + 2] = generatedColorPalette[4][2];
                    }     
                }
                
                console.log ("line 93");
                context.putImageData(imageData, 0, 0);
                gnome.src = canvas.toDataURL();

                

               
                   
            }

            hat = generatedColorPalette[0][0];
                shirt = generatedColorPalette[1][0];
                mittens = generatedColorPalette[2][0];
                shoes = generatedColorPalette[3][0];
                pompom = generatedColorPalette[4][0];
                console.log(hat, shirt, mittens, shoes, pompom);

        };
    
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
    
    button.value = "Generate Color Palette";
    });



