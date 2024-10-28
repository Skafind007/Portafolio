// Intersection Observer to activate sections and images when they scroll into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('#pdf-section, #bibliography-section, #image-grid-section').forEach(section => {
    observer.observe(section);
});
