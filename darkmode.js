// darkmode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggleImage = document.getElementById('darkModeToggleImage');
    const body = document.body;

    // Check for user's preference in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggleImage.src = 'dark-bulb.png'; // Change to the dark mode image source
    }

    // Toggle dark mode on image click
    darkModeToggleImage.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Toggle image source based on dark mode state
        if (body.classList.contains('dark-mode')) {
            darkModeToggleImage.src = 'bulb_on.png'; // Change to the dark mode image source
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggleImage.src = 'bulb_off.png'; // Change to the light mode image source
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
