document.addEventListener('DOMContentLoaded', function () {
    const nombreUsuarioInput = document.getElementById('nombreUsuario');
    const contrasenaInput = document.getElementById('contrasena');
    const confirmarContrasenaInput = document.getElementById('confirmarContrasena');
    const cancelarButton = document.getElementById('cancelar');
    const agregarButton = document.getElementById('agregar');
    const mensajeP = document.getElementById('mensaje');
  
    cancelarButton.addEventListener('click', function () {
      mensajeP.textContent = 'La acción se ha cancelado.';
    });
  
    agregarButton.addEventListener('click', function () {
      const nombreUsuario = nombreUsuarioInput.value;
      const contrasena = contrasenaInput.value;
      const confirmarContrasena = confirmarContrasenaInput.value;
  
      if (contrasena === confirmarContrasena) {
        mensajeP.textContent = `Usuario "${nombreUsuario}" creado correctamente.`;
        // Aquí puedes agregar la lógica para crear el usuario en tu sistema.
      } else {
        mensajeP.textContent = 'Las contraseñas no coinciden. Intenta de nuevo.';
      }
    });
  });
  