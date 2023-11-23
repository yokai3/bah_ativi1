var lista = [];

function inserir() {
    let valor = document.getElementById("valor").value;
    lista.push(valor);
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
}

function exibir() {
    var res = document.getElementById("res");
    res.innerHTML = "";
    for (let i = 0; i < lista.length; i++){
        res.innerHTML += lista[i] + "-";
    }
    document.getElementById("valor").focus();
} 


