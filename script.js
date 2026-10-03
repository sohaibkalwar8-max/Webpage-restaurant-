
/* ==================================
   1. MOBILE NAVIGATION
================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});


/* ==================================
   2. MENU CATEGORY FILTERS
================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;

        // Update the selected filter.
        filterButtons.forEach(filter => {
            const isActive = filter === button;

            filter.classList.toggle("active", isActive);
            filter.setAttribute("aria-pressed", String(isActive));
        });

        // Show matching food cards.
        foodCards.forEach(card => {

            const matches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matches;

        });

    });

});


/* ==================================
   3. CURRENT YEAR
================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ==================================
   4. MISSING IMAGE FALLBACK
================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        // Avoid repeatedly handling the same failed image.
        img.onerror = null;

        img.style.visibility = "hidden";

        if (img.parentElement) {
            img.parentElement.style.background =
                "linear-gradient(135deg, #e3dfd0, #c6c5ad)";
        }

    });

});
