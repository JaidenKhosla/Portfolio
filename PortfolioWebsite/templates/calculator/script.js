
window.onload = function(){
    window.display = document.getElementById("screen");
};



function appendToDisplay(char) {
    window.display.value+=char;
}

function clearDisplay(){
    window.display.value = "";
}

function calculate(){
    try{
        let calculation;
        calculation = window.display.value.replace(/%/g, "/100");
        window.display.value = eval(calculation);
    }
    catch{
        window.display.value = "Error";
    }
}
