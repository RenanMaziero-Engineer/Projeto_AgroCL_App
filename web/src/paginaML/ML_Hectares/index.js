function calcular() {
    var mlR = document.getElementById("ML").value;
    
    var hectareR = document.getElementById("H").value;
    
    var quantidadeHectares = document.getElementById("Q").value;
    
    var res = calculo(mlR, hectareR, quantidadeHectares);
    
    var rs = window.document.getElementById("rs").innerText = res;
}
function calculo(ml, h, q) {
    if(ml == 0 || h == 0 || q == 0){
        return "Inválido, tente novamente.";
    }else{
        const rs = (ml / (h * 10.000)) * (q * 10.000);
        return `${rs} ML para ${q} Hecatres`;
    }   
}