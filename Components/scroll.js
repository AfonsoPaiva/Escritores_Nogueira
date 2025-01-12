
// Initialize Lenis with custom options
const lenis = new Lenis({
    duration: 4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothTouch: true,
    touchMultiplier: 1.5,
    infinite: false,
});

// Animation frame callback
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf); // Keep the loop running
}

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