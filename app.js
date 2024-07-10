let input = document.getElementById('texto_ingresado');
let parrafo = document.getElementById('texto_encriptado');
let contenidoResultado = document.querySelector('.contenido__resultado');
let imgMuneco = document.querySelector('.img__muneco');
let tituloSecundario  = document.querySelector('.titulo__secundario');
let botonCopiar = document.querySelector('.copiar');

let arrayTextoInicial = [];
let textoEncriptado = [];
let textoDesencriptado = [];

function encriptar() {
    let textoInicial = input.value;
    parrafo.value = ''
    arrayTextoInicial = [...textoInicial];

    for (var i = 0; i < arrayTextoInicial.length; i++) {
        if (arrayTextoInicial[i] == 'a') {
            arrayTextoInicial[i] = 'ai'
        } else if (arrayTextoInicial[i] == 'e') {
            arrayTextoInicial[i] = 'enter'
        } else if (arrayTextoInicial[i] == 'i') {
            arrayTextoInicial[i] = 'imes'
        } else if (arrayTextoInicial[i] == 'o') {
            arrayTextoInicial[i] = 'ober'
        } else if (arrayTextoInicial[i] == 'u') {
            arrayTextoInicial[i] = 'ufat'
        }
    }

    if (imgMuneco && tituloSecundario) {
        imgMuneco.remove();
        tituloSecundario.remove();
        parrafo.classList.add('parrafo__modificado');
        contenidoResultado.classList.add('contenido__resultado__modificado');
        botonCopiar.removeAttribute('hidden');
    }
    
    textoEncriptado = arrayTextoInicial.join('');
    parrafo.innerHTML = textoEncriptado;
    limpiar();
}

function limpiar() {
    input.value = '';
}

function desencriptar() {
    if (input.value != '') {
        for (var i = 0; i < arrayTextoInicial.length; i++) {
            if (arrayTextoInicial[i] == 'ai') {
                arrayTextoInicial[i] = 'a'
            } else if (arrayTextoInicial[i] == 'enter') {
                arrayTextoInicial[i] = 'e'
            } else if (arrayTextoInicial[i] == 'imes') {
                arrayTextoInicial[i] = 'i'
            } else if (arrayTextoInicial[i] == 'ober') {
                arrayTextoInicial[i] = 'o'
            } else if (arrayTextoInicial[i] == 'ufat') {
                arrayTextoInicial[i] = 'u'
            }
        }
    }
    textoDesencriptado = arrayTextoInicial.join('');
    parrafo.innerHTML = textoDesencriptado;
    limpiar();
}

function copiarTexto() {
    let range = document.createRange();
    range.selectNodeContents(parrafo);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    navigator.clipboard.writeText(parrafo.innerHTML).then(function() {
        console.log('Texto copiado: ' + parrafo.innerHTML);
    }).catch(function(error) {
        alert('Hubo un error al copiar el texto: ' + parrafo.innerHTML);
    });
}