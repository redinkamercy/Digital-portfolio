document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial call for first load
});