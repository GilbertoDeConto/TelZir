var trinta = 0;
var sessenta = 0;
var centoVinte = 0;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option');
    var instances = M.FormSelect.init(elems, options);
});

function atualizarCampo(){
    origem = document.getElementById("origem").value;
    destino = document.getElementById("destino").value;
    tempo = document.getElementById("tempo").value;

    var normal = new Plano(origem, destino,tempo)
    var valorNormal = normal.calcularTaxa() * tempo;

    if(tempo > 0){
        valoresPlano(origem, destino, tempo)
        
        if (isNaN(this.trinta)){
            document.getElementById("trintaPlano").innerHTML = "-"
        }else{
            document.getElementById("trintaPlano").innerHTML = this.trinta.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            });
        }

        if (isNaN(this.sessenta)){
            document.getElementById("sessentaPlano").innerHTML = "-"
        }else{
            document.getElementById("sessentaPlano").innerHTML = this.sessenta.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            });
        }

        if (isNaN(this.centoVinte)){
            document.getElementById("centoVintePlano").innerHTML = "-"
        }else{
            document.getElementById("centoVintePlano").innerHTML = this.centoVinte.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            });
        }
        
        if (isNaN(valorNormal)){
            document.getElementById("trintaNormal").innerHTML = "-"
        }else{
            document.getElementById("trintaNormal").innerHTML = valorNormal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            });
        }

        if (isNaN(valorNormal)){
            document.getElementById("sessentaNormal").innerHTML = "-"
        }else{
            document.getElementById("sessentaNormal").innerHTML = valorNormal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            });
        }

        if (isNaN(valorNormal)){
            document.getElementById("centoVinteNormal").innerHTML = "-"
        }else{
            document.getElementById("centoVinteNormal").innerHTML = valorNormal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            });
        }
    }
}
function valoresPlano(origem, destino, tempo){
    var plano = new Plano(origem, destino,tempo);

    this.trinta = plano.calcularPlano(30);
    this.sessenta = plano.calcularPlano(60);
    this.centoVinte = plano.calcularPlano(120);

    return this.trinta, this.sessenta, this.centoVinte;
}
function verificarNumero(){
    if (isNaN(this.trinta)){
        document.getElementById("trintaPlano").innerHTML = "-"
    }
    if (isNaN(this.sessenta)){
        document.getElementById("sessentaPlano").innerHTML = "-"
    }
    if (isNaN(this.centoVinte)){
        document.getElementById("centoVintePlano").innerHTML = "-"
    }
}