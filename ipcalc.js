// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = " ";
}

function calculate(){

    try{
        display.value = "I Love You ♡";
    }
    catch(error){
        display.value = "I Love U  ♡";
    }
}