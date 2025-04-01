document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        if (mobileMenu.classList.contains("max-h-0")) {
            mobileMenu.classList.remove("max-h-0");
            mobileMenu.classList.add("max-h-[300px]");
        } else {
            mobileMenu.classList.remove("max-h-[300px]");
            mobileMenu.classList.add("max-h-0");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("max-h-[300px]");
            mobileMenu.classList.add("max-h-0");
        }
    });
});
