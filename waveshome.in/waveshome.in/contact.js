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


// call back request
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".callback-left, .callback-right");

    function handleScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case sections are already in view
});

//Address and map

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-left, .fade-in-right");
    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
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

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let formData = new FormData(this);

    fetch("callback-request-form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            alert("Your request has been sent successfully!");
            document.querySelector("form").reset(); // Reset form
        } else {
            alert("Error sending request. Please try again.");
        }
    })
    .catch(error => console.error("Error:", error));
});