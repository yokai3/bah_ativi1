var lista = [];
var bao = -9999999999;
var dao = 9999999999;


document.getElementById("valor").focus();

function amz() {
    var res = document.getElementById("res");
    res.innerHTML = "";
    let valor = document.getElementById("valor").value;
    lista.push(valor);
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    res.innerHTML = valor + " adicionado";

    if (bao<valor){bao = valor;}
    if (dao>valor){dao = valor;}
}

function mt() {
    var res = document.getElementById("res");
    res.innerHTML = "";
    for (let i = 0; i < lista.length; i++){
        res.innerHTML += lista[i] + "_";
    }
    document.getElementById("valor").focus();
} 
    

function mma() {
    var res = document.getElementById("res");
    res.innerHTML = "";
    res.innerHTML = " O maior número na lista é " + bao;
     
        
    
    document.getElementById("valor").focus();
}
function mme() {
    var res = document.getElementById("res");
    res.innerHTML = "";
    res.innerHTML = " O menor número na lista é " + dao;
        
        
    
    document.getElementById("valor").focus();
}