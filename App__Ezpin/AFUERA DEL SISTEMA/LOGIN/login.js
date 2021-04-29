$(document).ready(function(){
  const pass_field = document.querySelector('.pass-key');
  const showBtn = document.querySelector('.show');

  showBtn.addEventListener('click', function(){
    if(pass_field.type === "password"){
      pass_field.type = "text";
      showBtn.textContent = "OCULTAR";
      showBtn.style.color = "#3498db";
    }else{
      pass_field.type = "password";
      showBtn.textContent = "MOSTRAR";
      showBtn.style.color = "#222";
    }
  });
});