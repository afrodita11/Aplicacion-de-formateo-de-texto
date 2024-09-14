document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnProcesar').addEventListener('click', function () {
      let texto = document.getElementById('texto').value;
  
      // Aplicar trimStart() y trimEnd() para eliminar espacios al principio y al final
      let textoSinEspacios = texto.trimStart().trimEnd();
  
      // Utilizar el método replaceAll() para reemplazar una cadena de texto ejemplo "hola" por "chao"
      let textoReemplazado = textoSinEspacios.replaceAll('hola', 'chao');
      
      // Mostrar el texto procesado
      document.getElementById('textoProcesado').innerHTML = textoReemplazado;
    });
  });
  







