function reemplazarVocalPorNumero(texto) {
    var vocalesNumeros = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5
    };

    var resultado = texto.split('').map(function(letra) {
        if (letra in vocalesNumeros) {
            return vocalesNumeros[letra];
        } else {
            return letra;
        }
    }).join('');
    return resultado;
}

var texto = "hernando";
var resultado = reemplazarVocalPorNumero(texto);
console.log('==== resultado ====');
console.log(resultado);
console.log('casa');