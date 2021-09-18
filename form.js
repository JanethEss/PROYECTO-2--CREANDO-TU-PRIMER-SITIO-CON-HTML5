var inputs = document.getElementsByClassName('formulario_input');
for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('keyup', function() {
    if (this.value.length>=1) {
      this.previousElementSibling.classList.add('cambiar');
    } else {
      this.previousElementSibling.classList.remove('cambiar');
    }
  });
}
