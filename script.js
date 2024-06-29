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