function startCountdown() {
    // Get the starting number from the input field
    var startNumber = document.getElementById("startInput").value;

    // Convert the starting number to an integer
    startNumber = parseInt(startNumber);

    // Check if the input is a valid number
    if (isNaN(startNumber) || startNumber < 0) {
        alert("Please enter a valid non-negative number as the starting number.");
        return;
    }

    // Display the countdown
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerText = "Countdown: ";

    // Use a loop to count down from startNumber to 0
    for (var i = startNumber; i >= 0; i--) {
        countdownElement.innerText += i + " ";
    }
}
