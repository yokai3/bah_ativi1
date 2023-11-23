var lista = [];
var total=0;



function ad() {
    let v = document.getElementById("valor").value;
    let q = document.getElementById("quant").value;
    let n = document.getElementById("nome").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    total = v*q;
    lista.push(n);
    res.innerHTML = "Adicionado ao total";
    document.getElementById("valor").value = "";
    document.getElementById("quant").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("nome").focus();
    
} 


function so() {
    var res = document.getElementById("res");
    res.innerHTML = "";
    
    res.innerHTML = lista + " em suas quantidades custarão " + total;
    total=0;
    lista.splice(0,99)
    document.getElementById("valor").value = "";
    document.getElementById("quant").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("nome").focus();
}