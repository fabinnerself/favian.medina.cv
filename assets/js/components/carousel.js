// Carousel functionality
export default function initCarousel() {
  // Check if we're on the projects section
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;

  // Function to initialize carousel when tab is shown
  function initializeCarousel() {
    const carousel = document.getElementById('project-carousel');
    if (!carousel) return;

    // Get carousel elements
    const carouselContainer = carousel.querySelector('.carousel-container');
    const navBtnLeft = carousel.querySelector('.nav-btn-left');
    const navBtnRight = carousel.querySelector('.nav-btn-right');
    const cards = carousel.querySelectorAll('.card');
    
    // Flag to prevent multiple clicks during animation
    let isAnimating = false;
    
    // Function to scroll carousel
    function scrollCarousel(direction) {
      if (isAnimating) return;
      
      isAnimating = true;
      
      // Calculate the actual width of a card including margins
      const firstCard = cards[0];
      const cardWidth = firstCard ? firstCard.offsetWidth : 300;
      const cardStyle = firstCard ? window.getComputedStyle(firstCard) : null;
      const cardMargin = cardStyle ? parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight) : 20;
      const scrollAmount = cardWidth + cardMargin;
      
      const scrollPosition = carouselContainer.scrollLeft;
      
      if (direction === 'left') {
        carouselContainer.scrollTo({
          left: Math.max(0, scrollPosition - scrollAmount),
          behavior: 'smooth'
        });
      } else {
        carouselContainer.scrollTo({
          left: scrollPosition + scrollAmount,
          behavior: 'smooth'
        });
      }
      
      // Reset animation flag after a short delay
      setTimeout(() => {
        isAnimating = false;
      }, 300);
    }
    
    // Add event listeners to navigation buttons
    if (navBtnLeft) {
      navBtnLeft.addEventListener('click', () => scrollCarousel('left'));
    }
    
    if (navBtnRight) {
      navBtnRight.addEventListener('click', () => scrollCarousel('right'));
    }
    
    // Handle flip on mobile/touch devices
    const isTouchDevice = matchMedia('(any-hover: none)').matches;
    
    cards.forEach(card => {
      if (isTouchDevice) {
        card.addEventListener('click', function() {
          if (isAnimating) return;
          
          isAnimating = true;
          this.classList.toggle('flipped');
          
          // Reset animation flag after flip animation completes
          setTimeout(() => {
            isAnimating = false;
          }, 600); // Match CSS transition duration
        });
      } else {
        // For desktop, use hover effect
        card.addEventListener('mouseenter', function() {
          if (!this.classList.contains('flipped')) {
            this.classList.add('flipped');
          }
        });
        
        card.addEventListener('mouseleave', function() {
          if (this.classList.contains('flipped')) {
            this.classList.remove('flipped');
          }
        });
      }
    });
  }
  
  // Initialize carousel when the carrusel tab is shown
  function checkAndInitCarousel() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const carousel = document.getElementById('project-carousel');
      if (carousel) {
        initializeCarousel();
      }
    }, 100);
  }
  
  // Listen for tab changes
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    tab.addEventListener('click', checkAndInitCarousel);
  });
  
  // Also check on initial load
  checkAndInitCarousel();
}