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

function openVideo(videoId) {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('videoFrame');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    popup.style.display = 'flex';
}

function closeVideo() {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('videoFrame');
    iframe.src = '';
    popup.style.display = 'none';
}

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

