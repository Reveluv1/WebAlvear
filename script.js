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