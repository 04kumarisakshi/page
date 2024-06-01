function showLoginModal() {
  const loginModal = document.getElementById('mymodel');
  if (loginModal) {
    loginModal.style.display = 'flex';
    loginModal.style.opacity = 1; // Add opacity transition for fading effect
  }
}

function closeLoginModal() {
  const loginModal = document.getElementById('mymodel');
  if (loginModal) {
    loginModal.style.opacity = 0; // Add opacity transition for fading effect
    loginModal.addEventListener('transitionend', () => {
      loginModal.style.display = 'none';
    });
  }
}

// Call the functions when the DOM is loaded (similar to $(document).ready())
document.addEventListener('DOMContentLoaded', () => {
  const loginShowButton = document.getElementById('show');
  if (loginShowButton) {
    loginShowButton.addEventListener('click', showLoginModal);
  }

  const closeButtons = document.querySelectorAll('.close-modal');
  closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', closeLoginModal);
  });
});
