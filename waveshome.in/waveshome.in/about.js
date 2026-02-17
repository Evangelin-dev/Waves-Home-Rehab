document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
    const galleryToggles = document.querySelectorAll(".gallery-toggle");

    // Function to toggle mobile menu
    const toggleMenu = (isOpen) => {
        mobileMenu.style.right = isOpen ? "0" : "-100%";
    };

    // Open and close menu
    menuIcon.addEventListener("click", () => toggleMenu(true));
    closeMenu.addEventListener("click", () => toggleMenu(false));

    // Close menu when clicking a link
    document.querySelectorAll(".mobile-menu ul li a").forEach(link => {
        link.addEventListener("click", () => {
            if (!link.classList.contains("gallery-toggle")) {
                toggleMenu(false);
            }
        });
    });

    // Toggle gallery dropdown in both desktop and mobile menus
    galleryToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            dropdown.classList.toggle("active");

            // Close other open dropdowns
            document.querySelectorAll(".dropdown-content").forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove("active");
                }
            });
        });
    });
});




//about us scrolling animation
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".animate, .animate-title, .animate-subtitle, .animate-text, .animate-image").forEach(element => {
        observer.observe(element);
    });
});


//rehabilities
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scale(1.1)";
                setTimeout(() => {
                    entry.target.style.transform = "scale(1)";
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    cards.forEach(card => observer.observe(card));
});


//Our team scroll
document.addEventListener("DOMContentLoaded", function () {
    const observers = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".animate").forEach(element => {
        observers.observe(element);
    });
});

/* footer Scroll Animation */
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

