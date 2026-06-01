function calcular() {
    var lR = document.getElementById("LT").value;
    
    var litrosR = document.getElementById("L").value;
    
    var quantidadeLitros = document.getElementById("Q").value;
    
    var res = calculo(lR, litrosR, quantidadeLitros);
    var rs = window.document.getElementById("rs").innerText = res;
}
function calculo(l, lr, q) {
   if(l == 0 || lr == 0 || q == 0){
        return "Inválido, tente novamente.";
    }else{
        let rs = l * (q / lr);
        return `${rs} Litros para ${q} Litros`;
    }     
}
