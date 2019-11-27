class Plano {

    constructor(origem, destino, tempo) {

        this.origem = origem;
        this.destino = destino;
        this.tempo = tempo;

        this.taxa = 0.00;
        this.valor = 0;
    }
    calcularPlano(numero){
        this.valor = this.tempo - numero
        if(this.valor > 0){
            var resto = this.valor;
            var resto = this.valor + (this.valor * 10 / 100);
            this.valor = resto * this.calcularTaxa();
        }else{
            this.valor = 0.00;
        }
        return this.valor;
    }
    calcularTaxa() {
        if(this.origem == 11 && this.destino == 16){
            this.taxa = 1.90;
        }else if(this.origem == 16 && this.destino == 11){
            this.taxa = 2.90;
        }else if(this.origem == 11 && this.destino == 17){
            this.taxa = 1.70;
        }else if(this.origem == 17 && this.destino == 11){
            this.taxa = 2.70; 
        }else if(this.origem == 11 && this.destino == 18){
            this.taxa = 0.90;
        }else if(this.origem == 18 && this.destino == 11){
            this.taxa = 1.90;
        }else{
            this.taxa = parseInt("-");
        }
        return this.taxa;
    }   
}