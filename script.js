// JavaScript code
// Get the counter element
var counterElement = document.getElementById('counter');

// Get the increment button element
var incrementBtn = document.getElementById('incrementBtn');

// Initial counter value
var counterValue = 0;

// Function to handle the increment button click
function incrementCounter() {
    // Display an alert with the un-incremented value
    alert("Un-incremented Value: " + counterValue);

    // Increment the counter value
    counterValue++;

    // Update the counter text
    counterElement.textContent = counterValue;
}

// Attach the incrementCounter function to the button click event
incrementBtn.addEventListener('click', incrementCounter);

