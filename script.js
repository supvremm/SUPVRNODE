document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.bloody-red');
  
  button.addEventListener('mousemove', (e) => {
    // Get mouse position relative to button
    const x = e.offsetX;
    const y = e.offsetY;
    
    // Calculate button center
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;
    
    // Calculate angle between mouse position and center
    const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI;
    
    // Update gradient angle
    button.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,1) 0%, rgba(0,0,255,1) 100%)`;
  });

  // Reset gradient on mouse leave
  button.addEventListener('mouseleave', () => {
    button.style.background = '#00ff';
  });
});