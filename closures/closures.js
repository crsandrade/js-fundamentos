function criarContaBancaria(saldoInicial) {
    let saldoAtual = saldoInicial;


    function depositar(valor) { return saldoAtual += valor; }

    function sacar(valor) { 
        if (saldoAtual < valor) {
            console.log('Saldo insuficiente');
            return;
        }
        return saldoAtual -= valor; }

    function verSaldo() { return saldoAtual; }

    return {
        depositar,
        sacar,
        verSaldo
    }
}

const conta = criarContaBancaria(100)

conta.depositar(50);
conta.sacar(30);
conta.verSaldo();