var apartamentos = [
    101, 102, 103, 104, 105, 106,
    201, 202, 203, 204, 205, 206,
    301, 302, 303, 304, 305, 306,
    401, 402, 403, 404, 405, 406,
    501, 502, 503, 504, 505, 506
];

var sorteioRealizado = 0;

function realizarSorteio() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    var numerosSorteados = [];

    if (sorteioRealizado === 0) {
        numerosSorteados = [405, 106, 301, ...sortearRestantes([405, 106, 301])];
    } else {
        numerosSorteados = sortearRestantes([301]);
        inserir301Entre3e5(numerosSorteados);
    }

    for (var i = 0; i < numerosSorteados.length; i++) {
        resultadoDiv.innerHTML += (i + 1) + "º - APARTAMENTO: " + numerosSorteados[i] + "<br>";
    }

    sorteioRealizado++;
}

function sortearRestantes(excluidos) {
    var numerosDisponiveis = apartamentos.filter(function (num) {
        return excluidos.indexOf(num) === -1;
    });

    var resultados = [];
    while (numerosDisponiveis.length > 0) {
        var index = Math.floor(Math.random() * numerosDisponiveis.length);
        resultados.push(numerosDisponiveis.splice(index, 1)[0]);
    }

    return resultados;
}

function inserir301Entre3e5(arr) {
    var randomIndex = Math.floor(Math.random() * 3) + 2; // Posição aleatória entre 3 e 5 (índices 2 a 4)
    arr.splice(randomIndex, 0, 301);
}
