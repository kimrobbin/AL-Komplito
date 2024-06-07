function filterItems(category) {
    const items = document.querySelectorAll('.itemBox');
    const ukensTilbud = document.getElementById('ukensTilbud');
    if (category === 'all') {
        ukensTilbud.style.display = 'flex';
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else if (category === 'hoodies') {
        ukensTilbud.style.display = 'none';
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        ukensTilbud.style.display = 'none';
        items.forEach(item => {
            if (item.getAttribute('data-category') === category || item.getAttribute('data-category') === 'hoodies') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}


if (window.location.pathname.includes('index.html')) {
    const navbar = document.querySelector('.Header');
    const logo = document.getElementById('LogoKom');
    const cartIcon = document.getElementById('cart');
    const cartD = document.getElementById('cartD')
    const MainShop = document.getElementById('MainShopID')
    const SearchBar = document.getElementById('')

    if (navbar && logo && cartIcon) {
        navbar.classList.add('Transparent');
        logo.src = 'bilder/clKomplitoLogoSvart.svg';
        cartIcon.src = 'bilder/ShoppingBagNoFillSvart.svg';
        cartD.classList.add('rightNavCartT')
        MainShop.src = 'bilder/MainShoppingIconSvart.svg'

        window.addEventListener('scroll', () => {
            if (window.scrollY > 75) {
                navbar.classList.remove('Transparent');
                logo.src = 'bilder/clKomplitoLogo.svg';
                cartIcon.src = 'bilder/ShoppingBagNoFill.svg';
                MainShop.src = 'bilder/MainShoppingIcon.svg'
                cartD.classList.remove('rightNavCartT')
            } else {
                navbar.classList.add('Transparent');
                logo.src = 'bilder/clKomplitoLogoSvart.svg';
                cartIcon.src = 'bilder/ShoppingBagNoFillSvart.svg';
                MainShop.src = 'bilder/MainShoppingIconSvart.svg'
                cartD.classList.add('rightNavCartT')
            }
        });
    } else {
        console.error('One or more elements not found');
    }
}




