//Ahsan Tariq
document.addEventListener("DOMContentLoaded", () => {
    const movingImage = document.getElementById('movingImage');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    let movementIntervalId = null; // To store the interval ID
    
    // Function to move the image randomly within the page
    function moveImageRandomly() {
        const x = Math.random() * (window.innerWidth - movingImage.clientWidth);
        const y = Math.random() * (window.innerHeight - movingImage.clientHeight);
        movingImage.style.transform = `translate(${x}px, ${y}px)`;
    }
    
    // Start movement when Start button is clicked
    startButton.addEventListener('click', () => {
        if (!movementIntervalId) { // Start only if not already running
            moveImageRandomly(); // Move the image initially
            movementIntervalId = setInterval(moveImageRandomly, 100); // Start moving every 0.1 seconds
        }
    });
    
    // Stop movement when Stop button is clicked
    stopButton.addEventListener('click', () => {
        if (movementIntervalId) { // Stop only if currently running
            clearInterval(movementIntervalId); // Stop moving
            movementIntervalId = null; // Reset interval ID
        }
    });
});
