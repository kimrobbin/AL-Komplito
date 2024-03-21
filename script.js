const handlekruv = [];

const produker = [
    { "id": "1", "name": "GamingPc", "PRICE": 18000 },
    { "id": "2", "name": "GamingKeyboard", "PRICE": 1000 },
    { "id": "3", "name": "GamingMouse", "PRICE": 300 },
    { "id": "4", "name": "GamingLaptop", "PRICE": 12000 }
];

function addItem(itemId) {

    for (let produkt = 0; produkt < produker.length; produkt++) {

        if (itemId == produker[produkt].id) {
            document.getElementById("handle").innerHTML = "" //clear handekruv
            handlekruv.push(produker[produkt]) // adder item to cart

            for (let i = 0; i < handlekruv.length; i++) { // Går gjennom cart length og lager en ny line får hver av verdi
                document.getElementById("handle").innerHTML += handlekruv[i].name + " " + handlekruv[i].PRICE + "<br>" // Cart line
            }
        }
    }
}
console.log("400kr for 5g hasj")

