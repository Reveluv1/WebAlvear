<<<<<<< HEAD
// Función para verificar si estamos en un dispositivo móvil
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  // Función para redirigir según el tipo de dispositivo
  function redirectToWhatsApp() {
    var whatsappUrl = isMobileDevice() ? "whatsapp://send?phone=NUMERO_TELEFONO" : "https://web.whatsapp.com/send?phone=NUMERO_TELEFONO";
    var whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = whatsappUrl.replace("NUMERO_TELEFONO", "+5493412840799"); // Reemplaza con el número deseado
  }

  // Llama a la función al cargar la página
  window.onload = function() {
    redirectToWhatsApp();
  };


// Selección del botón hamburguesa y del menú
const toggleMenu = document.getElementById('menu-toggle');
const menu = document.querySelector('.ul_links');

// Agregar evento al botón hamburguesa para abrir y cerrar el menú
toggleMenu.addEventListener('change', function() {
  if (toggleMenu.checked) {
    // Si el menú se abre, añade la clase 'menu-abierto' al cuerpo
    document.body.classList.add('menu-abierto');
  } else {
    // Si el menú se cierra, remueve la clase 'menu-abierto' del cuerpo
    document.body.classList.remove('menu-abierto');
  }
});



// Seleccionar todos los enlaces del menú de navegación
const links = document.querySelectorAll('.ul_links a');

// Agregar evento de clic a cada enlace
links.forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    const href = this.getAttribute('href'); // Obtener el valor del atributo href del enlace
    const target = document.querySelector(href); // Seleccionar el elemento destino basado en el href

    if (target) {
      // Calcular la posición de desplazamiento
      const offsetTop = target.offsetTop - 75;
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



const logo = document.querySelector('.logo-link');

// Agregar evento de clic al logo
logo.addEventListener('click', function(e) {
    document.body.classList.remove('menu-abierto');
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    toggleMenu.checked = false;
     // Realizar el desplazamiento suave hacia la parte superior de la página
    window.scrollTo({
    top: 0,
    behavior: 'smooth' // Opciones de desplazamiento suave
  });
});


const toggleMenuButton = document.getElementById('toggleMenu');
const menu1 = document.getElementById('menu');

toggleMenuButton.addEventListener('click', function() {
  menu1.style.display = menu1.style.display === 'none' ? 'block' : 'none';
});
=======
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
    const links = document.querySelectorAll('.navegacion');

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
>>>>>>> 2cdfd39da847b0ab99903d7c49f0e154ce9be0ae
