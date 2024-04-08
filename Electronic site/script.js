console.log("400kr for 5g hasj")
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');

    menuBtn.addEventListener('click', () => {
        menuItems.classList.toggle('show');
        menuBtn.classList.toggle('active');

        if (menuItems.classList.contains('show')) {
            const menuWidth = menuItems.offsetWidth;
            menuBtn.style.transform = `translateX(-${menuWidth}px)`;
        } else {
            menuBtn.style.transform = 'translateX(0)';
        }
    });
});
