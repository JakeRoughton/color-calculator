const prompt = require('prompt-sync')({sigint: true});

let user1 = prompt("Welcome User. Are you here to combine or deconstruct: ");

if (user1 = "combine")
    color1 = prompt("Please input first color: ").toLowerCase();
    color2 = prompt("Please input second color: ").toLowerCase();
    if(color1 === "red" && color2 === "blue"){
        console.log("Purple")
    }   else if(color1 === "blue" && color2 === "red"){
        console.log("Purple")
    }  else if(color1 === "red" && color2 === "yellow"){
        console.log("Orange")
    }  else if(color1 === "yellow" && color2 === "red"){
        console.log("Orange")
    }  else if(color1 === "blue" && color2 === "yellow"){
        console.log("Green")
    }  else if(color1 === "yellow" && color2 === "blue"){
        console.log("Green")
    }  else 
        console.log("ERROR!! DOES NOT COMPUTE")




if (user1 = "deconstruct")
        color3 = prompt("Please choose the color you'd like to deconstruct: Purple, Orange, Green: ").toLowerCase();
       if (color3 === "purple"){
        console.log("Red and Blue")
   }    else if(color3 === "orange"){
        console.log("Red and Yellow")
   }    else if(color3 === "green"){
        console.log("Blue and Yellow")
   }
   