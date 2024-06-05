let justCaculated = false;

window.onload = function(){
    window.display = document.getElementById("screen");
};

let operators = ["+","-","/","*"];
var actualString = "";


function appendToDisplay(char) {
    if (operators.includes(char)){
        actualString = eval(actualString);
        justCaculated=false;
        clearDisplay();   
    }

    else if(justCaculated==true && !(operators.includes(char))){
        justCaculated = false;
        actualString = "";
        clearDisplay()
    }
    actualString+=char;
    window.display.value+=char;
}

function clearDisplay(){
    window.display.value = "";
}

function calculate(){
    try{
        let calculation;
        calculation = actualString.replace(/%/g, "/100");
        window.display.value = eval(calculation);
    }
    catch{
        window.display.value = "Error";
    }

    justCaculated = true;
}