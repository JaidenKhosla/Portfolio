
const display = document.getElementById("screen")
let displayLength = 0
let _fontSize = 12;//vh


function appendToDisplay(char) {
    //const displayVal = display.value;
    if(display.value.length < 9){
        display.value+=char;
        //displayLength++;  
        if(display.value.length >= 6){
            _fontSize-=1.3;
            display.style.fontSize = `${_fontSize.toString()}vh`;
        }  
    }
    
    return;
}

function clearDisplay(){
    display.value = "";
    //displayLength = 0;
    _fontSize = 12;
    display.style.fontSize = "12vh"
}

function calculate(){
    try{
        let calculation;
        calculation = display.value.replace(/%/g, "/100");
        clearDisplay();
        display.value = eval(calculation);
       // displayLength = display.value.length;
        //console.log(displayLength);
        _fontSize = 12;
        display.style.fontSize = "12vh";
    }
    catch{
        display.value = "Error";
    }
}


