// Para iniciar vamos definir a função comprar()
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    // Verificando se o valor da quantidade é maior que zero para realizar a compra.
    if (isNaN(qtd) || qtd <= 0) {
        alert('Digite um valor válido para a quantidade de ingressos.');
        return;
    }

    // Para ver se temos ingressos diponíveis de cada tipo, vamos usar um if.
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

// Agora faremos uma função para realizar a compra do ingresso pista e depois para cada um dos outros ingressos.
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para a pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;    
        alert('Compra de ingresso na pista realizada com sucesso.');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para as cadeiras superiores.');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;    
        alert('Compra de ingresso na cadeira superior realizada com sucesso.');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para as cadeiras inferiores.');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;    
        alert('Compra de ingresso na cadeira inferior realizada com sucesso.');
    }
}
