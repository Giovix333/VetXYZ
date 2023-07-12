function validateInput() {
    // Expresión regular para validar caracteres alfabéticos, espacios y acentos
    var regex = /^[a-zA-Z\u00C0-\u017F\s]*$/;
    
    // Obtener el valor del campo de entrada
    var inputValue = document.getElementById("name-input").value;
    
    // Validar el valor ingresado con la expresión regular
    if (!regex.test(inputValue)) {
      // Eliminar los caracteres no alfabéticos, no espacios y no acentos del valor ingresado
      document.getElementById("name-input").value = inputValue.replace(/[^a-zA-Z\u00C0-\u017F\s]/g, '');
    }
  }

function validateEmail() {
    // Expresión regular para validar la estructura de un correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Obtener el valor del campo de entrada
    var emailValue = document.getElementById("email").value;
    
    // Validar el valor ingresado con la expresión regular
    if (!regex.test(emailValue)) {
      // Si el correo electrónico no es válido, se puede mostrar un mensaje de error o tomar alguna otra acción
        console.log("El correo electrónico no es válido");
    }
}

function comparePasswords() {
    // Obtener los valores de las contraseñas
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
  
    // Comparar las contraseñas
    if (password1 === password2) {
        console.log("Las contraseñas coinciden");
      // Realizar alguna acción cuando las contraseñas coinciden
    } else {
        console.log("Las contraseñas no coinciden");
      // Realizar alguna acción cuando las contraseñas no coinciden
    }
  }  

function validateForm() {
    // Obtener los valores de los campos
    var nameValue = document.getElementById("name-input").value;
    var emailValue = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
  
    // Validar el nombre (solo caracteres alfabéticos y espacios)
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(nameValue)) {
        console.log("El nombre no es válido");
        return;
    }
  
    // Validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        console.log("El correo electrónico no es válido");
        return;
    }
  
    // Comparar las contraseñas
    if (password1 !== password2) {
        console.log("Las contraseñas no coinciden");
      return;
    }
  
    // Si se llega a este punto, todos los campos son válidos y las contraseñas coinciden
    console.log("Formulario válido y contraseñas coinciden");
    // Realizar alguna acción adicional (enviar formulario, mostrar mensaje de éxito, etc.)
  }
  
  /Ver contraseña/
  function togglePasswordVisibility11(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = event.target;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Mostrar";
    }
}
function togglePasswordVisibility22(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = event.target;

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Ocultar";
  } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Mostrar";
  }
}

function togglePasswordVisibility33(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = event.target;

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Ocultar";
  } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Mostrar";
  }
}
/*Regresar*/
function goBack() {
  window.history.back();
} 