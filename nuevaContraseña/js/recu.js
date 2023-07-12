function goBack() {
    window.history.back();
  }

  /*Ver contraseña*/
  function togglePasswordVisibility1(inputId) {
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
function togglePasswordVisibility2(inputId) {
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
/*Regresar al html anterior*/
function goBack() {
    window.history.back();
}
  
  