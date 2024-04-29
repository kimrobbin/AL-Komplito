// youssef sin kode (shit)

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



//shoppingcart og de sakene :) (goood kode)(Jonathan)
let handlekruv = [];

if (localStorage.getItem("handlekurv")) {
    handlekruv = JSON.parse(localStorage.getItem('handlekurv'))
}

const produker = [
    { "id": "1", "name": "GeForce 256", "PRICE": 18000 },
    { "id": "2", "name": "Swotch DS", "PRICE": 3000 },
    { "id": "3", "name": "CIBERTRONK", "PRICE": 99999999 },
    { "id": "4", "name": "Angelic9000", "PRICE": 12000 },
    { "id": "5", "name": "ProLys", "PRICE": 1200 },
    { "id": "6", "name": "SeeVr", "PRICE": 5348 },
    { "id": "7", "name": "GaminPc", "PRICE": 25000 }
];

function addItem(itemId) {
    for (let produkt = 0; produkt < produker.length; produkt++) {

        if (itemId == produker[produkt].id) {
            handlekruv.push(produker[produkt]) // adder item to cart
        }
    }
    SaveData()
}

function UpdateCart() {
    document.getElementById("handle").innerHTML = ""
    for (let i = 0; i < handlekruv.length; i++) { // Går gjennom cart length og lager en ny line får hver av verdi
        document.getElementById("handle").innerHTML += handlekruv[i].name + " " + handlekruv[i].PRICE + "kr" + "<br>"
    }
}

function SaveData() {
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv))
}
// how to local storage an array with objects

function TomKurv(){
    localStorage.clear()
    history.go()
}
