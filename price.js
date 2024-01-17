// script.js
document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll('.panel');
  
    panels.forEach(panel => {
      panel.addEventListener('click', function() {
        panels.forEach(p => p.classList.remove('selected'));
        this.classList.add('selected');
        this.style.transform = 'scale(1.1)'; // Increase the size when selected
      });
    });
  });
  