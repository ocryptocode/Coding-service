document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // Use the email variable
    console.log('Email:', email)
    
    const message = document.getElementById('message').value;
    // Use the message variable
    console.log('Message :', message)

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear form
    document.getElementById('contact-form').reset();
});