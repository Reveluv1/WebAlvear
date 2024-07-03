document.querySelector('.logo-link').addEventListener('click', function() {
    location.reload(); // Recarga la página actual
});


const toggleMenu = document.getElementById('menu-celular')
const links = document.querySelectorAll('.links-celular a');

// Agregar evento de clic a cada enlace
links.forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const href = this.getAttribute('href'); // Obtener el valor del atributo href del enlace
    const target = document.querySelector(href); // Seleccionar el elemento destino basado en el href
    if (target) {
      // Calcular la posición de desplazamiento
      const offsetTop = target.offsetTop - 70;
      toggleMenu.checked = false;
      document.body.classList.remove('menu-abierto');
      // Realizar el desplazamiento suave usando window.scrollTo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Opciones de desplazamiento suave
      });
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de navegación
    const links = document.querySelectorAll('.focus');

    // Función para añadir la clase activa al enlace correspondiente
    function actualizarEstado() {
        // Obtener la posición actual de desplazamiento
        const scrollPosition = window.scrollY;

        // Iterar sobre cada enlace de navegación
        links.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1); // Obtener el ID de la sección
            const section = document.getElementById(sectionId); // Obtener la sección correspondiente

            if (
                section.offsetTop <= scrollPosition + 100 && // Ajustar el valor según la posición de scroll deseada
                section.offsetTop + section.offsetHeight > scrollPosition + 100
            ) {
                // Si la sección está visible en la pantalla, añadir la clase activa
                link.classList.add('active');
            } else {
                // Si no, remover la clase activa
                link.classList.remove('active');
            }
        });
    }

    // Escuchar el evento scroll y actualizar el estado de los enlaces
    window.addEventListener('scroll', actualizarEstado);

    // Llamar a la función para establecer el estado inicial
    actualizarEstado();
});
