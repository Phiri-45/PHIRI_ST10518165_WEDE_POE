document.addEventListener("DOMContentLoaded", () => {
    
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Capture input values
            const name = document.getElementById("form-name").value.trim();
            const email = document.getElementById("form-email").value.trim();
            const subject = document.getElementById("form-subject").value;
            const message = document.getElementById("form-message").value.trim();

            
            if (name && email && message) {
                alert(`Ngwana wa Petori, thanks for reaching out, ${name}! Your message regarding "${subject}" has been received. Our support team will hit you back at ${email} shortly.`);
                contactForm.reset();
            } else {
                alert("Please fill in all required fields before submitting.");
            }
        });
    }

    
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".navbar nav ul");

    if (menuIcon && navList) {
        menuIcon.addEventListener("click", () => {
            navList.classList.toggle("active-menu");
    
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".navbar nav ul");

    if (menuIcon && navList) {
        menuIcon.addEventListener("click", () => {
            navList.classList.toggle("active-menu");
        });
    }

    
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navList.classList.remove("active-menu");
        }
    });
});