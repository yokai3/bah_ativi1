var z=0;



function pares() {
    let valor = document.getElementById("valor").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    for(let i=2; i <= valor ; i = i+2){
        res.innerHTML += i + "_"
    }
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    
} 


function soma() {
    let valor = document.getElementById("valor").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    for(let i=2; i <= valor ; i = i+2){
        z=z+i;
    }
    res.innerHTML = "A soma é " + z;
    z=0;
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
}