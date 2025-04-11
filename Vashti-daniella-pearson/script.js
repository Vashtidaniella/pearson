// Food Recipe Buttons
document.querySelectorAll('.recipe-btn').forEach(button => {
    button.addEventListener('click', () => {
        const recipeId = button.dataset.recipe;
        const recipeDetails = document.getElementById(recipeId);
        if (recipeDetails.style.display === 'block') {
            recipeDetails.style.display = 'none';
        } else {
            recipeDetails.style.display = 'block';
        }
    });
});
//Contact Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending data (replace with actual backend integration)
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    document.getElementById('formMessage').innerText = 'Message sent successfully!';
    document.getElementById('contactForm').reset();
});