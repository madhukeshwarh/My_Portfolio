function showSections() {
    var targetSection = document.getElementById('about'); // Change the target section ID here
    targetSection.scrollIntoView({ behavior: 'smooth' });
  
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.classList.add('active');
    });
    var knowMoreButton = document.querySelector('.know-more-button');
    knowMoreButton.style.display = 'none';
  }
  