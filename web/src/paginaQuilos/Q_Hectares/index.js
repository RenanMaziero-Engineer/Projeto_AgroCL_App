function calcular() {
    var qR = document.getElementById("QL").value;
    
    var hR = document.getElementById("H").value;
    
    var quantidadeHectares = document.getElementById("Q").value;
    
    var res = calculo(qR, hR, quantidadeHectares);
    
    var rs = window.document.getElementById("rs").innerText = res;
}
function calculo(q, h, qt) {
    if(q == 0 || h == 0 || qt == 0){
        return "Inválido, tente novamente.";
    }else{
        let rs = (q / (h * 10.000)) * (qt * 10.000);
        return `${rs} Quilos para ${qt} Hecatres`;
    }
}