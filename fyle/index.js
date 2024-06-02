const mainImage = document.getElementById('mainImage');

const buttons = document.querySelectorAll('.content-button1, .content-button2, .content-button3'); // Select all buttons with matching classes

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Update main image source based on button class
    if (button.classList.contains('content-button1')) {
      mainImage.src = "p2.png";
    } else if (button.classList.contains('content-button2')) {
      mainImage.src = "p3.png";
    } else if (button.classList.contains('content-button3')) {
      mainImage.src = "p4.png";
    }

    // Reset all button styles
    buttons.forEach((otherButton) => {
      otherButton.style.backgroundColor = '#e6ece6b5';
      otherButton.style.color = 'black';
    });

    // Apply active styles to clicked button
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
  });
});
