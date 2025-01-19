gsap.registerPlugin(ScrollTrigger);

function titleSinopseShow() {
    let mm = gsap.matchMedia();

    mm.add("all", () => {
        if (document.querySelector(".headline-sinopse")) {
            gsap.fromTo(".headline-sinopse", 
                {
                    x: "100vw", // Start position off the screen to the right
                    opacity: 0, // Start with opacity 0
                }, 
                {
                    x: "0vw", // End position on the screen
                    duration: 1.5, // Duration of the animation
                    ease: "power2.out", // Easing function
                    opacity: 1, // End with opacity 1
                    scrollTrigger: {
                        trigger: ".headline-sinopse",
                        onEnter: () => gsap.to(".headline-sinopse", { x: "0vw", opacity: 1, duration: 1.5, ease: "power2.out" }),
                        onLeaveBack: () => gsap.to(".headline-sinopse", { x: "100vw", opacity: 0, duration: 1.5, ease: "power2.in" }),
                    }
                }
            );
        } else {
            console.error("Element with class .headline-sinopse not found");
        }
    });
}

function text1WritingEffect() {
    let text1 = document.querySelector(".text1 span");
    if (text1) {
        // Split the text into words and wrap each word in a span
        let words = text1.textContent.split(" ");
        text1.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

        // Select the .text1 element
        let text1Element = document.querySelector(".text1");

        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".text1",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            }
        });

        // Animate the .text1 element coming from the left
        tl.from(text1Element, {
            opacity: 0,
            x: -100, // Move from the left
            duration: 1,
            ease: "power2.out",
        });

        // Animate the text letter by letter after the element has come from the left
        let wordSpans = text1.querySelectorAll("span");
        tl.from(wordSpans, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
        }, "-=0.5"); // Overlap the animations slightly
    } else {
        console.error("Element with class .text1 span not found");
    }
}

function text2WritingEffect() {
    let text2 = document.querySelector(".text2 span");
    if (text2) {
        // Split the text into words and wrap each word in a span
        let words = text2.textContent.split(" ");
        text2.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

        // Select the .text2 element
        let text2Element = document.querySelector(".text2");

        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".text2",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            }
        });

        // Animate the .text2 element coming from the right
        tl.from(text2Element, {
            opacity: 0,
            x: 100, // Move from the right
            duration: 1,
            ease: "power2.out",
        });

        // Animate the text letter by letter after the element has come from the right
        let wordSpans = text2.querySelectorAll("span");
        tl.from(wordSpans, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
        }, "-=0.5"); // Overlap the animations slightly
    } else {
        console.error("Element with class .text2 span not found");
    }
}

function text3WritingEffect() {
    let text3 = document.querySelector(".text3 span");
    if (text3) {
        // Split the text into words and wrap each word in a span
        let words = text3.textContent.split(" ");
        text3.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

        // Select the .text3 element
        let text3Element = document.querySelector(".text3");

        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".text3",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
   
            }
        });

        // Animate the .text3 element coming from the left
        tl.from(text3Element, {
            opacity: 0,
            x: -100, // Move from the left
            duration: 1,
            ease: "power2.out",
        });

        // Animate the text letter by letter after the element has come from the left
        let wordSpans = text3.querySelectorAll("span");
        tl.from(wordSpans, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
        }, "-=0.5"); // Overlap the animations slightly
    } else {
        console.error("Element with class .text3 span not found");
    }
}

function headlineSobautEffect() {
    let headlineSobaut = document.querySelector(".headline-sobaut");
    if (headlineSobaut) {
        // Set initial opacity to 0
        gsap.set(headlineSobaut, { opacity: 0 });

        // Determine start value based on screen width
        let startValue = window.innerWidth <= 768 ? "-500% 20%" : "-700% 20%";

        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".headline-sobaut",
                start: startValue,
                end: "top 50%",
                scrub: true,
                
            }
        });

        // Animate the .headline-sobaut element coming from the bottom with 0 opacity
        tl.fromTo(headlineSobaut, 
            { opacity: 0, y: 100 }, // Initial state
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Final state
        );
    } else {
        console.error("Element with class .headline-sobaut not found");
    }
}

function sobautEffect() {
    let sobaut = document.querySelector(".sob-aut");
    if (sobaut) {
        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sob-aut",
                start: "-100% 20%",
                end: "-10% 20%",
                scrub: true,
               
            }
        });

        // Animate the .sob-aut element coming from the left
        tl.from(sobaut, {
            x: -3000, // Move from the left
            duration: 3,
            ease: "power2.out",
        });
    } else {
        console.error("Element with class .sob-aut not found");
    }
}

function headlineTestmuEffect() {
    let headlineTestmu = document.querySelector(".headline-testmu");
    if (headlineTestmu) {
        // Set initial opacity to 0
        gsap.set(headlineTestmu, { opacity: 0 });

        // Determine start value based on screen width
        let startValue = window.innerWidth <= 768 ? "-500% 20%" : "-700% 20%";

        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".headline-testmu",
                start: startValue,
                end: "top 50%",
                scrub: true,
                
            }
        });

        // Animate the .headline-testmu element coming from the bottom with 0 opacity
        tl.fromTo(headlineTestmu, 
            { opacity: 0, y: 100 }, // Initial state
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Final state
        );
    } else {
        console.error("Element with class .headline-testmu not found");
    }
}


function text5Effect() {
    let text5 = document.querySelector(".text5");
    if (text5) {
        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".text5",
                start: "-100% 20%",
                end: "-10% 20%",
                scrub: true,
                
            }
        });

        // Animate the .text5 element coming from the left
        tl.from(text5, {
            x: -1000, // Move from the left
            duration: 1.5,
            ease: "power2.out",
        });
    } else {
        console.error("Element with class .text5 not found");
    }
}

function parteBaixoLivrosEffect() {
    let parteBaixoLivrosElements = document.querySelectorAll(".parte-baixo-livros > *");
    if (parteBaixoLivrosElements.length > 0) {
        // Create a timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".parte-baixo-livros",
                start: "top 80%",
                end: "10% 20%",
                scrub: true,
               
            }
        });

        // Animate each element within .parte-baixo-livros coming from the right with a stagger effect
        tl.from(parteBaixoLivrosElements, {
            opacity: 0,
            x: 100, // Move from the right
            duration: 3,
            ease: "power2.out",
            stagger: 2, // Stagger effect
        });
    } else {
        console.error("No elements found in .parte-baixo-livros");
    }
}


titleSinopseShow();
text1WritingEffect();
text2WritingEffect();
text3WritingEffect();
headlineSobautEffect();
sobautEffect();
headlineTestmuEffect();
text5Effect();
parteBaixoLivrosEffect();
