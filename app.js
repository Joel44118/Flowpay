// Get the payment form
const paymentForm = document.getElementById('payment-form');

// Add an event listener to the payment form
paymentForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the form data
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const securityCode = document.getElementById('security-code').value;

    // Validate the form data
    if (amount === '' || cardNumber === '' || expirationDate === '' || securityCode === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Process the payment
    console.log('Payment processing...');
    console.log(`Amount: $${amount}`);
    console.log(`Card Number: ${cardNumber}`);
    console.log(`Expiration Date: ${expirationDate}`);
    console.log(`Security Code: ${securityCode}`);

    // Simulate a payment processing delay
    setTimeout(() => {
        console.log('Payment processed successfully.');
        alert('Payment processed successfully.');
    }, 2000);
}