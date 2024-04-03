function copiarCorreo() {
    var correo = document.getElementById("correo");
    var seleccion = document.createRange();
    seleccion.selectNode(correo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Correo copiado al portapapeles: " + correo.textContent);
  }
  