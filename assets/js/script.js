// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    if (target === '#') return;
    
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Mobile navigation collapse
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });
}

// Close navbar when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    navbarCollapse.classList.remove('show');
  });
});

// Active nav link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// Form validation for contact form
function validateForm(formElement) {
  let isValid = true;
  const inputs = formElement.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    const formGroup = input.closest('.form-group');
    const errorEl = formGroup.querySelector('.form-error');
    
    // Clear previous states
    formGroup.classList.remove('error', 'success');
    
    // Validate based on input type
    if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        formGroup.classList.add('error');
        if (errorEl) errorEl.textContent = 'Please enter a valid email address';
        isValid = false;
      } else {
        formGroup.classList.add('success');
      }
    } else if (input.value.trim() === '') {
      formGroup.classList.add('error');
      if (errorEl) errorEl.textContent = `${input.placeholder || 'This field'} is required`;
      isValid = false;
    } else if (input.name === 'name' && input.value.trim().length < 3) {
      formGroup.classList.add('error');
      if (errorEl) errorEl.textContent = 'Name must be at least 3 characters';
      isValid = false;
    } else if (input.name === 'message' && input.value.trim().length < 10) {
      formGroup.classList.add('error');
      if (errorEl) errorEl.textContent = 'Message must be at least 10 characters';
      isValid = false;
    } else {
      formGroup.classList.add('success');
    }
  });
  
  return isValid;
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm(this)) {
      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#10B981';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    }
  });

  // Real-time validation
  contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', function() {
      const formGroup = this.closest('.form-group');
      const errorEl = formGroup.querySelector('.form-error');
      
      formGroup.classList.remove('error', 'success');
      
      if (this.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value.trim() && !emailRegex.test(this.value.trim())) {
          formGroup.classList.add('error');
          if (errorEl) errorEl.textContent = 'Please enter a valid email address';
        } else if (this.value.trim()) {
          formGroup.classList.add('success');
        }
      } else if (this.value.trim() === '') {
        formGroup.classList.add('error');
        if (errorEl) errorEl.textContent = `${this.placeholder || 'This field'} is required`;
      } else if (this.name === 'name' && this.value.trim().length < 3) {
        formGroup.classList.add('error');
        if (errorEl) errorEl.textContent = 'Name must be at least 3 characters';
      } else if (this.name === 'message' && this.value.trim().length < 10) {
        formGroup.classList.add('error');
        if (errorEl) errorEl.textContent = 'Message must be at least 10 characters';
      } else if (this.value.trim()) {
        formGroup.classList.add('success');
      }
    });
  });
}

// Animate elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.animate-on-scroll');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Check on page load

// Certificate modal
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {
  btn.addEventListener('click', function() {
    const modalImage = this.parentElement.querySelector('img');
    const modalImg = document.querySelector('.modal-body img');
    if (modalImg && modalImage) {
      modalImg.src = modalImage.src;
    }
  });
});

// Progress bar animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

window.addEventListener('load', animateProgressBars);

// Add animation class to elements on page load
window.addEventListener('load', function() {
  document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
});

// Set active page in navbar
function setActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === '#home' && currentPage === '' || currentPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActivePage);
