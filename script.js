// Basic JavaScript for Meri Bhumi website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Meri Bhumi website loaded successfully!');
    
    // Add a welcome message to the console
    console.log('Welcome to Meri Bhumi - Your land, your heritage!');
    
    // Simple interaction - add click event to header
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', function() {
            console.log('Header clicked! Thanks for visiting Meri Bhumi.');
            this.style.color = this.style.color === 'gold' ? '' : 'gold';
        });
    }
    
    // Log current date and time
    const currentTime = new Date().toLocaleString();
    console.log('Page loaded at: ' + currentTime);
});
