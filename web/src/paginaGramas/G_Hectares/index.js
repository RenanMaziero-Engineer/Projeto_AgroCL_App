function calcular() {
    var gR = document.getElementById("G").value;

    var hR = document.getElementById("H").value;
    
    var quantidadeHectares = document.getElementById("Q").value;
    
    var res = calculo(gR, hR, quantidadeHectares);
    
    var rs = window.document.getElementById("rs").innerText = res; 
}

function calculo(g, h, qt) {
    if(g == 0 || h == 0 || qt == 0){
        return "Inválido, tente novamente.";
    }else{
        const rs = (g / (h * 10.000)) * (qt * 10.000);
        return `${rs} Gramas para ${qt} Hecatres`;
    }
}