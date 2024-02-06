document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the display element and all buttons
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Call handleButtonClick function when a button is clicked
            handleButtonClick(button.textContent);
        });
    });

    // Function to handle button clicks
    function handleButtonClick(value) {
        // If the clicked button is "=", calculate the result
        if (value === "=") {
            try {
                // Evaluate the expression in the display and update the display with the result
                display.value = eval(display.value);
            } catch (error) {
                // If there's an error in the expression, display "Error"
                display.value = "Error";
            }
        } 
        // If the clicked button is "C", clear the display
        else if (value === "C") {
            clearDisplay();
        } 
        // If the clicked button is "DEL", delete the last character from the display
        else if (value === "DEL") {
            deleteLast();
        } 
        // For other buttons, append their value to the display
        else {
            display.value += value;
        }
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = "";
    }

    // Function to delete the last character from the display
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }
});
