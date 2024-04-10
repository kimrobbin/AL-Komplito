let handlekruv = [];

if (localStorage.getItem("handlekurv")) {
    handlekruv = JSON.parse(localStorage.getItem('handlekurv'))
}

const produker = [
    { "id": "1", "name": "GamingPc", "PRICE": 18000 },
    { "id": "2", "name": "GamingKeyboard", "PRICE": 1000 },
    { "id": "3", "name": "GamingMouse", "PRICE": 300 },
    { "id": "4", "name": "GamingLaptop", "PRICE": 12000 }
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
