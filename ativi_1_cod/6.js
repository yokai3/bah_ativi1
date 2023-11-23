
var pi;
function imc() {
    let ge = document.getElementById("ge").value;
    let al = document.getElementById("al").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    if(ge==1){
        pi = (62.1*al) - 44.7
        res.innerHTML = "O peso ideal seria" + pi;
    }else if(ge==2){
        pi = (72.7*al) - 58
        res.innerHTML = "O peso ideal seria" + pi;
    }else{
        res.innerHTML = "Digite um número valido";
    };
     
    document.getElementById("ge").value = "";
    document.getElementById("al").value = "";
    document.getElementById("ge").focus();
    
} 