function calcular(){
    let lR = document.getElementById("LT").value;

    let hR = document.getElementById("H").value;

    let quantidadeHectares = document.getElementById("Q").value;

    let res = calculo(lR, hR, quantidadeHectares);

    let rs = window.document.getElementById("rs").innerText = res; 
}
function calculo(l, h, q){
    if(l == 0 || h == 0 || q == 0){
        return "Inválido, tente novamente.";
    }else{
        let rs = (l / (h * 10.000) * (q * 10.000));
        return `${rs} Litros para ${q} Hectares`
    }
}