//this is a function to handle with number buttons
function addValueToInput(value) {
    const inputField = document.getElementById('usertext');
    inputField.value += value; // Append the clicked value to the input field
}


// Assign event listeners to all buttons
document.getElementById('b1').addEventListener("click", () => addValueToInput('1'));
document.getElementById('b2').addEventListener("click", () => addValueToInput('2'));
document.getElementById('b3').addEventListener("click", () => addValueToInput('3'));
document.getElementById('b4').addEventListener("click", () => addValueToInput('4'));
document.getElementById('b5').addEventListener("click", () => addValueToInput('5'));
document.getElementById('b6').addEventListener("click", () => addValueToInput('6'));
document.getElementById('b7').addEventListener("click", () => addValueToInput('7'));
document.getElementById('b8').addEventListener("click", () => addValueToInput('8'));
document.getElementById('b9').addEventListener("click", () => addValueToInput('9'));
document.getElementById('b0').addEventListener("click", () => addValueToInput('0'));
document.getElementById('b+').addEventListener("click", () => addValueToInput('+'));
document.getElementById('b-').addEventListener("click", () => addValueToInput('-'));
document.getElementById('b*').addEventListener("click", () => addValueToInput('*'));
document.getElementById('b.').addEventListener("click", () => addValueToInput('.'));

// Function to handle the "equals" button click
document.getElementById('b=').addEventListener("click", () => {
    const inputField = document.getElementById('usertext');
    let expression = inputField.value;
    try {
        inputField.value = eval(expression); // Evaluate the expression
    } catch (error) {
        alert("Please enter a valid expression");
    }
});

// Function to handle the "AC" (all clear) button click
document.getElementById('bac').addEventListener("click", () => {
    document.getElementById('usertext').value = ""; // Clear the input field
});