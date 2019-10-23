class Antecipacao {

    constructor(valor, parcela, mdr) {

        this.valor = valor;
        this.parcela = parcela;
        this.mdr = mdr;

        this.valorTotalAntecipado = 0;
        this.valorParcela = 0;
    }
    //Incide juro sobre o valor
    juroTotalCalcular(mdr) {
        var parcelaJuro = this.valor / this.parcela
        return ((parcelaJuro - (mdr * parcelaJuro)) * this.parcela);
    }
    parcelaCalcular(mdr, numero) {
        var total = this.juroTotalCalcular(mdr);
        var valorMesJuro = total / this.parcela;
        return (valorMesJuro - ((numero * mdr) * valorMesJuro));

    }
    //calcula o valor total se a antecipação fosse amanhã
    umDia() {
        for (var i = 0; i < this.parcela; i++) {
            if (i == 0) {

                var temp = parseInt((this.mdr / 30 * 29) * 10000)
                this.valorParcela += this.parcelaCalcular((parseFloat(temp) / 10000), i + 1);
            } else if (i != 0) {
                this.valorParcela += this.parcelaCalcular(this.mdr, i + 1);
            }
        }

        return this.valorParcela;

    }
    //calcula o valor total se a antecipação fosse daqui 15 dias
    quinzeDias() {
        for (var i = 0; i < this.parcela; i++) {
            if (i == 0) {
                this.valorParcela += this.parcelaCalcular(this.mdr, 0.5);
            } else if (i != 0) {
                this.valorParcela += this.parcelaCalcular(this.mdr, i + 0.5);
            }
        }
        return this.valorParcela;
    }
    //calcula o valor total se a antecipação fosse daqui 30 dias
    trintaDias() {
        for (var i = 0; i < this.parcela; i++) {
            if (i == 0) {
                this.valorParcela += (this.juroTotalCalcular(this.mdr) / this.parcela);
            } else {
                this.valorParcela += this.parcelaCalcular(this.mdr, i);
            }
        }
        return this.valorParcela;
    }
    //calcula o valor total se a antecipação fosse daqui 90 dias
    noventaDias() {
        for (var i = 0; i < this.parcela; i++) {
            if (i > 3) {
                this.valorParcela += this.parcelaCalcular(this.mdr, i);
            } else {
                this.valorParcela += (this.juroTotalCalcular(this.mdr) / this.parcela);
            }
        }
        return this.valorParcela;
    }
}
