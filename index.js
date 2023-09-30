
const allNums = document.querySelectorAll('button');
const display = document.querySelector('#output');
console.log(allNums);

let array = [];
let concatenated;

allNums.forEach(button => { //for each to add eventlisteners to all buttons, and to link a callback function
    button.addEventListener('click', () => calculate(button));
})

function calculate(button) {
    const value = button.textContent; //takes content of button
    
    if(button.textContent == "AC") { //if clicked AC, clears display
        array = []; //clears array
        display.textContent = ".";
    }
    else if(button.textContent == "=") { //if equals
        concatenated = array.join(''); //join array
        display.textContent = eval(concatenated); //evaluate expression in array
    }
    else if(button.textContent == "DEL") {
        array.pop();
        display.textContent = array.join('');
    }
    else { //else, we keep pushing values until top 2 conditions are met
        array.push(value);
        display.textContent = array.join('');
        console.log(array);
    }
}


