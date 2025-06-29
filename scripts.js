
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav ul li a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (currentPath === link.getAttribute("href")) {
            link.classList.add("active-link");
        }
    });
});


document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => button.style.transform = "scale(1)", 150);
    });
});

document.querySelectorAll('.category').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 105, 
        behavior: 'smooth'
      });
    });
  });
  
  
  const sections = document.querySelectorAll('.menu-section');
  const navLinks = document.querySelectorAll('.category');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130; 
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  

   function toggleMenu() {
    const menu = document.querySelector('ul.menu');
    menu.classList.toggle('show');
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

function showAlert() {
  alert("Your message has been submitted successfully!");
}