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

//services
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".feature-box");

    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.85;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show");
            } else {
                box.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Run once on load to check visibility
});




document.addEventListener("DOMContentLoaded", function () {
    // Gallery Modal
    window.openGalleryModal = function(imgElement) {
        const modal = document.getElementById("gallery-modal");
        const modalImg = document.getElementById("gallery-modal-img");
        modalImg.src = imgElement.src;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    window.closeGalleryModal = function() {
        const modal = document.getElementById("gallery-modal");
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    document.getElementById("gallery-modal").addEventListener("click", function (event) {
        if (event.target === this) {
            closeGalleryModal();
        }
    });

    // Photo Animation
    function animatePhotos() {
        const photos = document.querySelectorAll('.photo');
        const triggerHeight = window.innerHeight * 0.85;

        photos.forEach(photo => {
            const rect = photo.getBoundingClientRect();
            if (rect.top < triggerHeight) {
                photo.style.transform = 'translateX(0)';
                photo.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', animatePhotos);
    animatePhotos();

    // Footer Scroll Animation
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
