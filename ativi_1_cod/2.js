

function CF() {
    let valor = document.getElementById("valor").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    var F = valor * 1.8 + 32; 
    res.innerHTML = F + "F";
    
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    
} 


function FC() {
    let valor = document.getElementById("valor").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    var C =  (valor-32 )/1.8; 
    res.innerHTML = C + "ºC";
    
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
}