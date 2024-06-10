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

    if (navbar && logo && cartIcon) {
        navbar.classList.add('Transparent');
        logo.src = 'bilder/clKomplitoLogoSvart.svg';
        cartIcon.src = 'bilder/ShoppingBagNoFillSvart.svg';
        cartD.classList.add('rightNavCartT')
        MainShop.src = 'bilder/MainShoppingIconSvart.svg'

        window.addEventListener('scroll', () => {
            if (window.scrollY > 1000) {
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






//shoppingcart og de sakene :) (goood kode)(Jonathan)
let handlekruv = localStorage.getItem("handlekurv") ? JSON.parse(localStorage.getItem('handlekurv')) : [];

const produker = [
    { "id": "1", "name": "Black Komplito", "PRICE": 599, "amount": 0 },
    { "id": "2", "name": "Blue Komplito Sweatpants", "PRICE": 599, "amount": 0 },
    { "id": "3", "name": "Black Komplito T-shirt", "PRICE": 399, "amount": 0 },
    { "id": "4", "name": "Azure Blue Komplito T-shirt", "PRICE": 399, "amount": 0 },
    { "id": "5", "name": "White Komplito T-shirt", "PRICE": 399, "amount": 0 },
    { "id": "6", "name": "Black Komplito Hoddie", "PRICE": 499, "amount": 0 },
    { "id": "7", "name": "Coming Soon", "PRICE": 459, "amount": 0 }
];

function addItem(itemId) {
    let produkt = produker.find(p => p.id === itemId);
    let itemInCart = handlekruv.find(item => item.id === itemId);

    if (itemInCart) {
        itemInCart.amount++;
    } else {
        handlekruv.push({...produkt, amount:     1}); // add item to cart with amount 1
    }
    saveData();
    console.log("du la til no i kurven lessgoo")
}

window.removeItem = function(itemId) {
    let itemInCart = handlekruv.find(item => item.id === itemId);
    if (itemInCart) {
        itemInCart.amount--;
        if (itemInCart.amount === 0) {
            handlekruv = handlekruv.filter(item => item.id !== itemId);
        }
    }
    updateCart();
    saveData();
}



function updateItemAmount(itemId, amount) {
    let itemInCart = handlekruv.find(item => item.id === itemId);
    if (itemInCart) {
        itemInCart.amount = amount;
    }
    saveData();
}

function updateCart() {
    document.getElementById("handle").innerHTML = "";
    let total = 0;
    for (let item of handlekruv) {
        total += item.PRICE * item.amount;
        document.getElementById("handle").innerHTML += `<div class="product"> ${item.name} $THTTTHTHTHTitem.PRICE}kr x ${item.amount} <button onclick="removeItem('${item.id}')">x</button></div>`;
    }
    document.getElementById("handle").innerHTML += ` <div class="product"> Total: ${total}kr </div>`;
}

function saveData() {
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv));
}

function tomKurv() {
    localStorage.removeItem('handlekurv');
    history.go();
}




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



