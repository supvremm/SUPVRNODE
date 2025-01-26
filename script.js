const button = document.querySelector('.bloody-red');

const updateGradient = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to percentage coordinates
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    button.style.setProperty('--x', `${xPercent}%`);
    button.style.setProperty('--y', `${yPercent}%`);
}

// Use requestAnimationFrame for smoother updates
let isHovering = false;

button.addEventListener('mouseenter', () => {
    isHovering = true;
    button.addEventListener('mousemove', updateGradient);
});

button.addEventListener('mouseleave', () => {
    isHovering = false;
    button.removeEventListener('mousemove', updateGradient);
});

// Smooth animation frame loop
function animate() {
    if (isHovering) {
        requestAnimationFrame(animate);
        // Add smooth interpolation here if needed
    }
}
animate();