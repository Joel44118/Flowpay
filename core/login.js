// Get the login form
const loginForm = document.getElementById('login-form-submit');

// Add an event listener to the form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TO DO: Add authentication logic here
  // For now, just log the email and password to the console
  console.log(`Email: ${email}, Password: ${password}`);

  // Redirect to the dashboard page if login is successful
  // window.location.href = 'dashboard.html';
});