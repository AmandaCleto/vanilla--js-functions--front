//soma
function somar() {
    var num1 = document.querySelector(".soma1").value;
    var num2 = document.querySelector(".soma2").value;

    var resultado = parseInt(num1) + parseInt(num2);
    document.querySelector(".r1").innerHTML = resultado;
}

//maior de 3 numeros
function maiorN() {
    var num1 = document.querySelector(".maior1").value;
    var num2 = document.querySelector(".maior2").value;
    var num3 = document.querySelector(".maior3").value;

    var resultado = Math.max(num1, num2, num3);
    document.querySelector(".r2").innerHTML = resultado;
}

//menor de 3 numeros
function menorN() {
    var num1 = document.querySelector(".menor1").value;
    var num2 = document.querySelector(".menor2").value;
    var num3 = document.querySelector(".menor3").value;

    var resultado = Math.min(num1, num2, num3);
    document.querySelector(".r3").innerHTML = resultado;
}

//par ou impar 
function pORi() {
    var num1 = document.querySelector(".pORi").value;
    var resp = num1 % 2;

    if (resp == 0) {
        document.querySelector(".r4").innerHTML = "PAR";
    } else {
        document.querySelector(".r4").innerHTML = "IMPAR";
    }
}

//contagem de caracter
function contar() {
    var num_caracteres;
    num_caracteres = document.getElementsByClassName("contar").txtTexto.value.replace(/\s/g, '').length;

    document.querySelector(".r5").innerHTML = num_caracteres;
    setTimeout("contar()", 100);
}

//limpar input
function limpar() {
    var clean = document.querySelector(".contar").value = '';
}

//ordenação
var flag = 0;
var palavra = new Array();

function OrdenarInvertido() {
    var conv = document.querySelector(".item");

    conv.value = '';
    palavra = palavra.sort();
    palavra = palavra.reverse();
    document.querySelector(".colocados").innerHTML = "";

    for (var i = 0; i < palavra.length; i++) {
        document.querySelector(".colocados").innerHTML += '<li><span id="nome">' + palavra[i] + '</span> <span onClick="Remover(this);" style="color: red;">[x]</span></li>';
    }

}

function Ordenar() {
    var conv = document.querySelector(".item");

    conv.value = '';
    palavra = palavra.sort();
    document.querySelector(".colocados").innerHTML = "";

    for (var i = 0; i < palavra.length; i++) {
        document.querySelector(".colocados").innerHTML += '<li><span id="nome">' + palavra[i] + '</span> <span onClick="Remover(this);" style="color: red;">[x]</span></li>';
    }

}

function Insere() {
    if (flag < 6) {
        var conv = document.querySelector(".item");
        if (conv.value !== '') {
            palavra.push(conv.value);
            conv.value = '';
            AtualizaLista();
            flag++;
        }
    } else {
        document.querySelector(".h4bx6").innerHTML = '<p style="color:red;">Capacidade de 6 itens!</p>';
    }

}


function AtualizaLista() {
    if (palavra.length > 0) {
        document.querySelector(".colocados").innerHTML = "";
        palavra = palavra.sort();
        for (i = 0; i < palavra.length; i++) {
            document.querySelector(".colocados").innerHTML += '<li><span id="nome">' + palavra[i] + '</span> <span onClick="Remover(this);" style="color: red;">[x]</span></li>';
        }
    } else {
        document.querySelector(".colocados").innerHTML = "Nenhum item.";
    }
}

function Remover(el) {
    var nome = el.parentNode.firstChild.innerHTML;
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] === nome) {
            palavra.splice(i, 1);
            AtualizaLista();
            flag--;
            document.querySelector(".h4bx6").innerHTML = '<p style="color:black;">Lista: </p>';
        }
    }
}