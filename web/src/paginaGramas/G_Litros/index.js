function calcular() {
    var gR = document.getElementById("G").value;
    
    var litrosR = document.getElementById("L").value;
    
    var quantidadeLitros = document.getElementById("Q").value;
    
    var res = calculo(gR, litrosR, quantidadeLitros);
    var rs = window.document.getElementById("rs").innerText = res;
}
function calculo(g, l, q) {
    if(g == 0 || l == 0 || q == 0){
        return "Inválido, tente novamente.";
    }else{
        const rs = (g / l) * q;
        return `${rs} Gramas para ${q} Litros`;
    } 
}