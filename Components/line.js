function initSvgScrollAnimation() {
    const svg = document.querySelector('svg.line');
    if (!svg) return;
    const path = svg.querySelector('path');

    const updatePath = () => {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.opacity = '0.5'; // Reduce opacity
    };

    const scroll = () => {
        requestAnimationFrame(() => {
            const distance = window.scrollY;
            const totalDistance = svg.clientHeight * 1.1 - window.innerHeight;
            const percentage = distance / totalDistance;
            const pathLength = path.getTotalLength();
            path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
        });
    };

    updatePath();
    scroll();
    
    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', () => {
        updatePath();
        scroll();
    });
}

// Call the function directly to ensure it always runs
initSvgScrollAnimation();

function startSignatureAnim() {
    let sign = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
        // For screens wider than 600px (e.g., tablets, desktops)
        ScrollTrigger.create({
            animation: sign,
            trigger: ".sob-aut",
            start: "15% center",  // Start when the top of the trigger hits the center of the viewport
            end: "bottom center", // End when the bottom of the trigger hits the center of the viewport
            scrub: 1,
           
        });
    });

    mm.add("(max-width: 599px)", () => {
        // For screens narrower than 600px (e.g., cellphones)
        ScrollTrigger.create({
            animation: sign,
            trigger: ".sob-aut",
            start: "15% center",  // Start when the top of the trigger hits the center of the viewport
            end: "bottom center", // End when the bottom of the trigger hits the center of the viewport
            scrub: 1,
          
        });
    });

    sign.to(".autograph__path", {
        "stroke-dashoffset": 0,
        ease: "none",
        stagger: 0.4
    });
}   
function startStarsAnim() {
    let stars = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
        // For screens wider than 600px (e.g., tablets, desktops)
        ScrollTrigger.create({
            animation: stars,
            trigger: ".text5",
            start: "top center",  // Start when the top of the trigger hits the center of the viewport
            end: "bottom center", // End when the bottom of the trigger hits the center of the viewport
            scrub: 1,
          
        });
    });

    mm.add("(max-width: 599px)", () => {
        // For screens narrower than 600px (e.g., cellphones)
        ScrollTrigger.create({
            animation: stars,
            trigger: ".text5",
            start: "top center",  // Start when the top of the trigger hits the center of the viewport
            end: "bottom center", // End when the bottom of the trigger hits the center of the viewport
            scrub: 1,
          
        });
    });

    stars.to(".stars-path", {
        "stroke-dashoffset": 0,
        fill: "#f4eee0 ", // Replace with the actual color value
        ease: "none",
        stagger: 0.4
    });
}
// Call the function to initialize the scroll animation
startSignatureAnim();
startStarsAnim();