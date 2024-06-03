// youssef sin kode 

console.log("412kr for 5g hasj")

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



//shoppingcart og de sakene :) (goood kode)(Jonathan)
let handlekruv = localStorage.getItem("handlekurv") ? JSON.parse(localStorage.getItem('handlekurv')) : [];

const produker = [
    { "id": "1", "name": "GeForce 256", "PRICE": 18000, "amount": 0 },
    { "id": "2", "name": "Swotch DS", "PRICE": 3000, "amount": 0 },
    { "id": "3", "name": "CIBERTRONK", "PRICE": 99999999, "amount": 0 },
    { "id": "4", "name": "Angelic9000", "PRICE": 12000, "amount": 0 },
    { "id": "5", "name": "ProLys", "PRICE": 1200, "amount": 0 },
    { "id": "6", "name": "SeeVr", "PRICE": 5348, "amount": 0 },
    { "id": "7", "name": "GaminPc", "PRICE": 25000, "amount": 0 }
];

function addItem(itemId) {
    let produkt = produker.find(p => p.id === itemId);
    let itemInCart = handlekruv.find(item => item.id === itemId);

    if (itemInCart) {
        itemInCart.amount++;
    } else {
        handlekruv.push({...produkt, amount: 1}); // add item to cart with amount 1
    }
    saveData();
}

function removeItem(itemId) {
    handlekruv = handlekruv.filter(item => item.id !== itemId);
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
        document.getElementById("handle").innerHTML += `<div class="product"> ${item.name} ${item.PRICE}kr x ${item.amount}</div>`;
    }
    document.getElementById("handle").innerHTML += ` <div class="product"> Total: ${total}kr`;
}

function saveData() {
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv));
}

function tomKurv() {
    localStorage.removeItem('handlekurv');
    history.go();
}

