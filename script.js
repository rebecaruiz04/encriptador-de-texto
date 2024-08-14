let txtArea = document.getElementById('texto_ingresado');
let mensaje = document.getElementById('mensaje');
let sectionMensaje = document.querySelector('.section__mensaje');
let imagen = document.querySelector('.section__mensaje__img');
let tituloMensaje = document.querySelector('.section__mensaje__titulo');
let btnCopiar = document.querySelector('.boton-copiar');

// Ajuste de tamaño del text-area
txtArea.addEventListener("input", e => {
    console.log(txtArea.scrollHeight);
    txtArea.style.height = '400px';
    txtArea.style.height = txtArea.scrollHeight + 'px';
});

// Evento de botón encriptar
function btnEncriptar() {
    validarTextoIngresado(txtArea.value);
    let textoEncriptado = remplazarTexto(txtArea.value, 0, 1);
    mensaje.innerHTML = textoEncriptado;
    cambiarEstilos();
}

// Evento de botón desencriptar
function btnDesencriptar() {
    validarTextoIngresado(txtArea.value);
    let textoDesencriptado = remplazarTexto(txtArea.value, 1, 0);
    mensaje.innerHTML = textoDesencriptado;
    cambiarEstilos();
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

// Función que valida el texto ingresado, que no sean mayúsculas ni con tilde
function validarTextoIngresado(texto) {
    if (!/^[a-z\s]*$/.test(texto)) {
        alert('El texto no debe contener letras mayúsculas ni tildes.');
        return;
    }
}

// Función para reeemplazar textos
function remplazarTexto(stringEncriptada, posicionInicial, posicionFinal) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

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
    mensaje.style.cssText = 'margin-top: 0; margin-bottom: 3.2rem; font-size: 2.4rem; text-align: left; width: 100%';
    sectionMensaje.style.cssText = 'justify-content: space-between;';
    btnCopiar.removeAttribute('hidden');
}