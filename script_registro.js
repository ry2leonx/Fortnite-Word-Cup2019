/* 
  ====================================================================
  CONTROL DE REGISTRO - PORTAL DE CLIENTES
  ==================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {
    const formularioRegistro = document.getElementById('form-registro');
    
    if (formularioRegistro) {
        formularioRegistro.addEventListener('submit', (e) => {
            // Evita que la página recargue o busque una ruta inexistente
            e.preventDefault();
            
            const nombreUsuario = document.getElementById('nombre').value;
            
            // Muestra la alerta interactiva simulando el registro exitoso
            alert(`¡Registro exitoso, ${nombreUsuario}!\nHemos enviado un correo de confirmación a su bandeja.`);
            
            // Limpia los campos del formulario
            formularioRegistro.reset();
        });
    }
});