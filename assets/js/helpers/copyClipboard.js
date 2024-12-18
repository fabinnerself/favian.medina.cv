export default function copyClipboard() {
    // Obtener el campo de texto
    var copyText = document.getElementById("myInput");
  
    // Seleccionar el campo de texto
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móviles
  
    // Copiar el texto dentro del campo de texto
    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            // Alertar el texto copiado
            //alert("Texto copiado: " + copyText.value);
            console.log("text copied ok",copyText.value)
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

// Hacer que la función esté disponible globalmente
window.copyClipboard = copyClipboard;