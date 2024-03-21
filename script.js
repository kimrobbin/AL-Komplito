const handlekruv = [];



function tisstest(gogogaga) {
    document.getElementById("handle").innerHTML = ""
    handlekruv.push(gogogaga)
    for (let i = 0; i < handlekruv.length; i++) {
        document.getElementById("handle").innerHTML += handlekruv[i] + "<br>"
    }    
}
