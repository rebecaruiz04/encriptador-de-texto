let txtArea = document.getElementById('texto_ingresado');
let mensaje = document.getElementById('mensaje');
let sectionMensaje = document.querySelector('.section__mensaje');
let imagen = document.querySelector('.section__mensaje__img');
let tituloMensaje = document.querySelector('.section__mensaje__titulo');
let btnCopiar = document.querySelector('.boton-copiar');

// Ajuste de tamaño del text-area
txtArea.addEventListener("input", e => {
    txtArea.style.height = '400px';
    txtArea.style.height = txtArea.scrollHeight + 'px';
});

// Evento que restablece a sus valores iniciales el contenido y los estilos del párrafo, cuando el textarea recibe el 'focus'.
txtArea.addEventListener("focus", () => {
    mensaje.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';
    mensaje.style.cssText = '';
    sectionMensaje.style.cssText = '';
    btnCopiar.setAttribute('hidden', true);
});

// Evento de botón encriptar
function btnEncriptar() {
    if (validarTextoIngresado(txtArea.value)){
        let textoEncriptado = remplazarTexto(txtArea.value, 0, 1);
        mensaje.innerHTML = textoEncriptado;
        cambiarEstilos();
    }; 
}

// Evento de botón desencriptar
function btnDesencriptar() {
    if (validarTextoIngresado(txtArea.value)) {
        let textoDesencriptado = remplazarTexto(txtArea.value, 1, 0);
        mensaje.innerHTML = textoDesencriptado;
        cambiarEstilos();
    };
}

// Función para copiar el texto del mensaje
function copiarTexto() {
    let range = document.createRange();
    range.selectNodeContents(mensaje);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    navigator.clipboard.writeText(mensaje.innerHTML).then(function() {
        console.log('Texto copiado: ' + mensaje.innerHTML);
    }).catch(function(error) {
        alert('Hubo un error al copiar el texto: ' + mensaje.innerHTML);
    });
}

// Función que valida el texto ingresado, no aceptará el campo vacío mayúsculas, tilde, ni caracteres especiales.
function validarTextoIngresado(texto) {
    if (texto === "" || !/^[a-z\s]*$/.test(texto)) {
        alert(texto === "" ? 'No ha ingresado ningún texto. Por lo menos, debe ingresar un caracter.' : 'El texto no debe contener mayúsculas, tildes ni caracteres especiales. Por favor, ingrese el texto nuevamente.');
        txtArea.value = "";
        return false;
    }
    return true;
}

// Función para reeemplazar textos
function remplazarTexto(stringEncriptada, posicionInicial, posicionFinal) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][posicionInicial])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][posicionInicial], matrizCodigo[i][posicionFinal]);
        }
    }
    return stringEncriptada;
}

// Función para cambiar estilos
function cambiarEstilos() {
    txtArea.value = "";
    imagen.remove();
    tituloMensaje.remove();
    mensaje.style.cssText = 'margin-top: 0; margin-bottom: 3.2rem; font-size: 2.4rem; text-align: left; word-break: break-word;';
    sectionMensaje.style.cssText = 'justify-content: space-between;';
    txtArea.style.cssText = 'min-height: 400px';
    btnCopiar.removeAttribute('hidden');
}