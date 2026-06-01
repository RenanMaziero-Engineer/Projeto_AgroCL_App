function calcular() {
    var mlR = document.getElementById("ML").value;
    
    var litrosR = document.getElementById("L").value;
    
    var quantidadeLitros = document.getElementById("Q").value;
    
    var res = calculo(mlR, litrosR, quantidadeLitros);
    var rs = window.document.getElementById("rs").innerText = res;
}
function calculo(ml, l, q) {
    if(ml == 0 || l == 0 || q == 0){
        return "Inválido, tente novamente.";
    }else{
        const rs = (ml / l) * q;
        return `${rs} ML para ${q} Litros`;
    } 
}
    
