// Almacenamos los elementos de los contenedores de los doctores en un arreglo
var doctorContainers = [
    document.querySelector('.doctor-container1'),
    document.querySelector('.doctor-container2'),
    document.querySelector('.doctor-container3'),
    document.querySelector('.doctor-container4')
  ];
  
  // Función para mostrar el doctor seleccionado
  function showDoctor(doctorIndex) {
    // Ocultamos todos los contenedores de los doctores
    doctorContainers.forEach(function(container) {
      container.style.display = 'none';
    });
  
    // Mostramos el contenedor del doctor seleccionado
    doctorContainers[doctorIndex - 1].style.display = 'block';
  }
  
  // Mostramos el primer doctor por defecto
  showDoctor(1);
  
//Preguntas
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('active');
    });
});

//Preguntas 2
function toggleAnswer(question) {
  question.parentNode.classList.toggle("active");
}



  