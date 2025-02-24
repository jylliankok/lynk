document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible"); // Add the class when in view
            } else {
                entry.target.classList.remove("section-visible"); // Remove the class when out of view
            }
        });
    }, { threshold: 0.2 }); // Triggers when 20% of the section is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});
