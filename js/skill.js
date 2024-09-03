document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once the element has appeared
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1  // Adjust as needed
    });

    skillCards.forEach(card => {
        observer.observe(card);
    });
});
