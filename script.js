// Function to show the birthday message
function showMessage() {
    const message = document.querySelector('.message');
    message.classList.toggle('show');
}

// Function to create balloons and add them to the page
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Randomize balloon position, color, size, and animation duration
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.width = `${30 + Math.random() * 20}px`;
    balloon.style.height = `${40 + Math.random() * 30}px`;
    balloon.style.animationDuration = `${5 + Math.random() * 3}s`;

    // Append the balloon to the container and remove it after the animation
    document.getElementById('balloon-container').appendChild(balloon);
    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

// Function to generate random pastel colors
function getRandomColor() {
    const colors = ['#ff6699', '#ffccff', '#ff99cc', '#ff9966', '#ffb3e6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start the celebration (balloon release)
function celebrate() {
    showMessage();
    for (let i = 0; i < 30; i++) {
        setTimeout(createBalloon, i * 200);
    }
}
