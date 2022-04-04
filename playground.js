function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 26,
};

const pessoa2 = {
    nome: 'Serafina',
    idade: 50,
};

const animal = {
    nome: 'Nuno',
    idade: 5,
    raca: 'vira-lata',
};

console.log(calculaIdade.apply(pessoa2,[20]));
