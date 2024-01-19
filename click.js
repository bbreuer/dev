document.addEventListener("DOMContentLoaded", function() {
    // Get the button and dropdown content elements
    var dropbtn = document.getElementById("dropbtn1");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    // Toggle the display of the dropdown content on button click
    dropbtn.addEventListener("click", function() {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  
    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function(event) {
      if (!event.target.matches("#dropbtn1")) {
        dropdownContent.style.display = "none";
      }
    });
  });
  