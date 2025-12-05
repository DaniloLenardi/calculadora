let numeroAtual = ""
let n1 = null
let operacao = null



function atualizarTela(valor) {
    document.getElementById("tela").innerText = valor
}

function digitar(num) {
    numeroAtual += num
    atualizarTela(numeroAtual)
}

function setOp(op) {
    if (numeroAtual === " ") return
    n1 = Number(numeroAtual)
    document.getElementById("tela2").innerText = n1
    operacao = op
    numeroAtual = " "
}


function calcular() {
    if (n1 === null || operacao === null || numeroAtual === "") return;

    let n2 = Number(numeroAtual);
    let resultado = 0;
    let tela2 = document.getElementById("tela2")
    let media = null
    
    if (operacao === "+"){
        tela2.innerText = `${n1} + ${n2} =`
        resultado = n1 + n2;
    } 
    if (operacao === "-"){
        tela2.innerText = `${n1} - ${n2} =`
        resultado = n1 - n2;
    } 
    if (operacao === "x"){
        tela2.innerText = `${n1} X ${n2} =`
        resultado = n1 * n2;
    } 
    if (operacao === "/"){
        tela2.innerText = `${n1} / ${n2} =`
        resultado = n1 / n2;
    } 
    if (operacao === "R") {
        n2 = null
        tela2.innerText = `Raiz(${n1}) =`
        resultado = Math.sqrt(n1)
    }

    atualizarTela(resultado);

    // Resetando para próximo cálculo
    numeroAtual = String(resultado);
    n1 = null;
    operacao = null;
}

function limpar() {
    numeroAtual = "";
    n1 = null;
    operacao = null;
    media = null
    document.getElementById("tela2").innerText = " - "
    atualizarTela("0");
}

function apagarUltimo() {
    // remove o último caractere
    numeroAtual = numeroAtual.slice(0, -1);

    // se ficar vazio, mostra 0
    if (numeroAtual === "") {
        atualizarTela("0");
    } else {
        atualizarTela(numeroAtual);
    }
}  
