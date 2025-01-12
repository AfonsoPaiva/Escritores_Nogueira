

// Initialize Lenis with custom options
const lenis = new Lenis({

});


// Animation frame callback
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf); // Keep the loop running
}

// Start the animation frame loop
requestAnimationFrame(raf);



document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        const topDiv = document.querySelector('.top');
        
        if (topDiv) {
            const scrollPosition = window.scrollY;
            const opacity = Math.max(1 - scrollPosition / 900, 0);
            topDiv.style.opacity = opacity;
        }
    });
});