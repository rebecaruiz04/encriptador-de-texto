let txtArea = document.getElementById('texto_ingresado');
let txtEncriptado = document.getElementById('texto_encriptado');
let sectionMensaje = document.querySelector('.section__mensaje');
let imagen = document.querySelector('.section__mensaje__img');
let tituloMensaje = document.querySelector('.section__mensaje__titulo');
let btnCopiar = document.querySelector('.boton-copiar');

txtArea.addEventListener("input", e => {
    console.log(txtArea.scrollHeight);
    txtArea.style.height = '400px';
    txtArea.style.height = txtArea.scrollHeight + 'px';

    console.log(txtArea.scrollHeight);
});

let arrayTextoInicial = [];
let textoEncriptado = [];
let textoDesencriptado = [];

function encriptar() {
    let textoInicial = txtArea.value;
    txtEncriptado.value = ''
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

    if (imagen && tituloMensaje) {
        imagen.remove();
        tituloMensaje.remove();
        txtEncriptado.style.cssText = 'margin-top: 0; margin-bottom: 3.2rem; font-size: 2.4rem; text-align: left';
        sectionMensaje.style.cssText = 'justify-content: space-between;';
        btnCopiar.removeAttribute('hidden');
    }
    
    textoEncriptado = arrayTextoInicial.join('');
    txtEncriptado.innerHTML = textoEncriptado;
    limpiar();
}

function limpiar() {
    txtArea.value = '';
}

function desencriptar() {
    if (txtArea.value != '') {
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
    txtEncriptado.innerHTML = textoDesencriptado;
    limpiar();
}

function copiarTexto() {
    let range = document.createRange();
    range.selectNodeContents(txtEncriptado);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    navigator.clipboard.writeText(txtEncriptado.innerHTML).then(function() {
        console.log('Texto copiado: ' + txtEncriptado.innerHTML);
    }).catch(function(error) {
        alert('Hubo un error al copiar el texto: ' + txtEncriptado.innerHTML);
    });
}