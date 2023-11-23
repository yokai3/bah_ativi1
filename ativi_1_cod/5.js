var total;

function pre() {
    let co = document.getElementById("co").value;
    let la = document.getElementById("la").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    total = co*la*36.00;
    m2= co*la;
    res.innerHTML = "Foram gastos R$"+total+" para cobrir " +m2+"m2 de piso" ;
    document.getElementById("co").value = "";
    document.getElementById("la").value = "";
    document.getElementById("co").focus();
    
} 