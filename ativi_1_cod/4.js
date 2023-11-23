var total;

function gas() {
    let km = document.getElementById("km").value;
    let gas = document.getElementById("pre").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    total = (km/8)*gas;

    res.innerHTML = "Foram gastos R$"+total+" ao percorrer " +km+"Km" ;
    document.getElementById("km").value = "";
    document.getElementById("pre").value = "";
    total = 0;
    document.getElementById("km").focus();
    
} 