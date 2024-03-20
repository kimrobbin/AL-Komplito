document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');
  
    menuBtn.addEventListener('click', () => {
      menuItems.classList.toggle('show');
      menuBtn.classList.toggle('active');
    });
  });
  