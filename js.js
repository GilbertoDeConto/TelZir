function calcular() {
    //Pega elementos da tela
    var valor = document.getElementById("valor").value;
    var parcelas = document.getElementById("parcelas").value;
    var mdr = document.getElementById("mdr").value;

    //Se todos os valores estiverem preenchidos > atualiza os resultados.
    if (valor != "" && parcelas != "" && mdr != "") {
        var a = new Antecipacao(parseFloat(valor), parseInt(parcelas), parseFloat(mdr / 100));
        var b = new Antecipacao(parseFloat(valor), parseInt(parcelas), parseFloat(mdr / 100));
        var c = new Antecipacao(parseFloat(valor), parseInt(parcelas), parseFloat(mdr / 100));
        var d = new Antecipacao(parseFloat(valor), parseInt(parcelas), parseFloat(mdr / 100));
        valDia = a.umDia();
        valQuinze = b.quinzeDias();
        valTrinta = c.trintaDias();
        valNoventa = d.noventaDias();

        document.getElementById("dia").innerHTML = valDia.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
        });
        document.getElementById("quinze").innerHTML = valQuinze.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
        });
        document.getElementById("trinta").innerHTML = valTrinta.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
        });
        document.getElementById("noventa").innerHTML = valNoventa.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
        });
    }
}

//Formata em padrão monetário BR
function k(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}
