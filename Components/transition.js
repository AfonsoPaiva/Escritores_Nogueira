
const wrapper = document.querySelector('.container-Main');

if (!wrapper) {
    console.error('Wrapper element not found');
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function imageshowbook() {
    let sections = gsap.utils.toArray(".img-booksshow");
    let mm = gsap.matchMedia();

    if (sections.length === 0) {
        console.error("No elements found with the class .img-booksshow");
        return;
    }

    gsap.set(sections, { opacity: 1 });

    mm.add("(min-width: 1600px)", () => {
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".box2",
                pin: true,
                scrub: 5,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".headline-galery").offsetWidth,
                onEnter: () => document.body.style.overflowY = "hidden",
                onLeave: () => document.body.style.overflowY = "auto",
                onEnterBack: () => document.body.style.overflowY = "hidden",
                onLeaveBack: () => document.body.style.overflowY = "auto",
            }
        });
    });

    mm.add("(max-width: 1599px)", () => {
        sections.forEach((section) => {
            gsap.fromTo(section, 
                { xPercent: 120 }, 
                {
                    xPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
        
                        onEnter: () => gsap.set(section, { opacity: 1, willChange: 'transform' })
                    }
                }
            );
        });
        ScrollTrigger.refresh();
    });
}


function pageTransition() {
    var tl = gsap.timeline();

    // Animate loading-screen from left to right
    tl.to('.loading-screen', {
        duration: 3,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });

    // Move loading-screen from right to left after 1-second delay
    tl.to('.loading-screen', {
        duration: 3,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 1
    });

    // Reset loading-screen to the starting position after the animation
    tl.set(".loading-screen", { left: "-100%" });

    // Reload the page immediately after the animation finishes
    
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 0.8,
        y: 38,
        opacity: 0,
        stagger: 0.4,
    });
}

function bokpage1anim() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.firstanime',
            start: '-900% 80%',
            end: 'bottom 30%',
            scrub: true,
        }
    });

    tl.to('.firstanime', {
        x: '100vw',
        duration: 25
    });

    function Bookanimever(triggerSelector, duration) {
        return gsap.timeline({
            scrollTrigger: {
                trigger: triggerSelector,
                start: '-250% center',
                end: '5% center',
                scrub: true,
            }
        }).to(triggerSelector, {
            x: '100vw',
            duration: duration,
            delay: 20,
            opacity: 1,
        });
    }

    function Bookanimehor(triggerSelector) {
        return gsap.timeline({
            scrollTrigger: {
                trigger: triggerSelector,
                start: '-100% center',
                end: '-25% 95%',
                scrub: true,
            }
        }).to(triggerSelector, {
            y: '-10vh',
            opacity: 1,
        });
    }

    if (window.innerWidth <= 1500) {
        Bookanimever('.Book1', 3);
        Bookanimever('.Book2', 4);
        Bookanimever('.Book3', 5);
        Bookanimever('.Book4', 6);
    } else {
        Bookanimehor('figure');
    }
}

function reloadScreenSize() {
    window.dispatchEvent(new Event('resize'));
}

function onPageReady() {
    reloadScreenSize();
    imageshowbook(); // Prioritize this function
    bokpage1anim();
    contentAnimation();
    initSvgScrollAnimation();
    attachEventListeners();
    startSignatureAnim();
    initializeModalsAndForm();  
    titleSinopseShow();
    text1WritingEffect();
    text2WritingEffect();
    text3WritingEffect();
    headlineSobautEffect();
    sobautEffect();
    headlineTestmuEffect();
    text5Effect();
    parteBaixoLivrosEffect();
    startStarsAnim();
}

function attachEventListeners() {
    document.querySelector('.but-gal').addEventListener('click', function() {
        scrollToSection('galeria');
    });
    
    document.querySelector('.but-sin').addEventListener('click', function() {
        scrollToSection('sinopse');
    });
    
    document.querySelector('.but-aut').addEventListener('click', function() {
        scrollToSection('sobre-o-autor');
    });
    
    document.querySelector('.but-tes').addEventListener('click', function() {
        scrollToSection('testemunhos');
    });
}

barba.use(barba.prefetch);


barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                pageTransition(); 
                await delay(4000); 
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                done(); 
            },
            async enter(data) {
                window.scrollTo(0, 0);
                onPageReady();
              
            },
            async once(data) {
                window.scrollTo(0, 0);
                onPageReady();   
            },
        },
    ],
});

window.addEventListener('load', () => {
    
    gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 2 });
});



