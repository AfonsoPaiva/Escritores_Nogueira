function initModal(modalId, buttonId, closeClass, fromTop = false) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(buttonId);
    var span = document.getElementsByClassName(closeClass)[0];
    var containerBooks = document.querySelector('.container-Books'); // Select the container-Books element



    // Set initial position based on fromTop flag
    if (fromTop) {
        gsap.set(modal, { 
            display: "none", 
            opacity: 1, 
            y: "-100%" // Off the top of the screen
        });
    } else {
        gsap.set(modal, { 
            display: "none", 
            opacity: 1, 
            x: "-100%" // Off the left of the screen
        });
    }

    // When the user clicks the button, open the modal with animation
    btn.onclick = function() {
        containerBooks.style.pointerEvents = 'none';
        gsap.set(modal, { display: "block" }); // Ensure the modal is visible before animation

        if (fromTop) {
            gsap.to(modal, {
                opacity: 1,
                y: "0%", // Slide down from the top
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            gsap.to(modal, {
                opacity: 1,
                x: "0%", // Slide in from the left
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    // When the user clicks on <span> (x), close the modal with animation
    span.onclick = function() {
        if (fromTop) {
            gsap.to(modal, {
                opacity: 1,
                y: "-100%", // Slide out to the top
                duration: 0.7,
                ease: "power2.in",
                onComplete: function() {
                    modal.style.display = "none";
                    containerBooks.style.pointerEvents = 'auto';
                }
            });
        } else {
            gsap.to(modal, {
                opacity: 1,
                x: "-100%", // Slide out to the left
                duration: 0.7,
                ease: "power2.in",
                onComplete: function() {
                    modal.style.display = "none";
                    containerBooks.style.pointerEvents = 'auto';
                }
            });
        }
    };

    // When the user clicks anywhere outside of the modal, close it with animation
    window.onclick = function(event) {
        if (event.target == modal) {
            if (fromTop) {
                gsap.to(modal, {
                    opacity: 1,
                    y: "-100%", // Slide out to the top
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: function() {
                        modal.style.display = "none";
                        containerBooks.style.pointerEvents = 'auto';
                    }
                });
            } else {
                gsap.to(modal, {
                    opacity: 1,
                    x: "-100%", // Slide out to the left
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: function() {
                        modal.style.display = "none";
                        containerBooks.style.pointerEvents = 'auto';
                    }
                });
            }
        }
    };
}

// Initialize modals with different animations
function initializeModalsAndForm() {
    // Initialize modals with different animations
    initModal("myModal", "openModal", "close", true); // myModal comes from the top
    initModal("myModal2", "openModal2", "close2"); 

    // Form submission handling
    document.getElementById('myGoogleForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const form = event.target;
        const formData = new FormData(form);
        let btn = document.querySelector(".submit-btn");
        
        // Disable the button or add a loading state
        btn.disabled = true;
        btn.classList.add("is_active");

        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfrs3R8YddgHL-dlIc2ap7R8bsuRfhhcYEWCozgp6PJZuEHGw/formResponse', {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Google Forms doesn't return a response, so we use 'no-cors'
            
        }).then(() => {
            form.reset(); // Reset the form

            // Delay for 10 seconds before returning the button to its normal state
            setTimeout(() => {
                btn.classList.remove("is_active");
                btn.disabled = false; // Re-enable the button
            }, 1500); // 10000 ms = 10 seconds

        }).catch((error) => {
            alert('Ups, Parece que houve um erro, por favor tente novamente');
            btn.disabled = false; // Re-enable the button on error
        });
    });
}

initializeModalsAndForm();

//BUttons HO_TO

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    // Scroll to the target section smoothly using Lenis
    if (section) {
        lenis.scrollTo(section, {
            offset: 0,   // No offset, scroll exactly to the top
            duration: 5,  // Animation duration
            immediate: false  // Smooth transition
        });
    }
}

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


