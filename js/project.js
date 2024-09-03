document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-project');
  
    function handleScroll() {
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (cardTop < windowHeight - 50) {
          card.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on load in case some elements are in view
  });
  