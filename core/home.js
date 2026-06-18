// Get the get started button
const getStartedButton = document.querySelector('#hero button');

// Add an event listener to the button click
getStartedButton.addEventListener('click', () => {
  // Redirect to the login page
  window.location.href = 'login.html';
});