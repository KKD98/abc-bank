// To know the value of input field create a function
function getValueOfInputField(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    inputField.value = '';
    if(isNaN(inputFieldValueString)){
        alert('Input a number');
    }
    else{
        const inputFieldValue = parseFloat(inputFieldValueString);
    // console.log(inputFieldValue);
    return inputFieldValue;
    }
    
}

// To know the previous value
function currentValue(currentId){
const currentValue = document.getElementById(currentId);
const currentValueString = currentValue.innerText;
const currentValueNumber = parseFloat(currentValueString);
return currentValueNumber;
// console.log(currentValueNumber);
}

function add(num1 , num2){
    const sum = num1 + num2;
    return sum;
}

function sub(num1 , num2){
    const subtract = num1 - num2;
    return subtract;
}