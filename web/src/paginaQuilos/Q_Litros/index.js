function calcular() {
    var qlR = document.getElementById("QL").value;
    
    var litrosR = document.getElementById("L").value;
    
    var quantidadeLitros = document.getElementById("Q").value;
    
    var res = calculo(qlR, litrosR, quantidadeLitros);
    var rs = window.document.getElementById("rs").innerText = res;
}
function calculo(qlr, lr, q) {
    if(qlr == 0 || lr == 0 || q == 0){
        return "Inválido, tente novamente.";
    }else{
        let rs = (qlr / lr) * q;
        return `${rs} Quilos para ${q} Litros`;
    }
}