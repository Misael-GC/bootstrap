// la función se va a ejcutar cuando termine de cargar el sitio y los demas scripts
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})

//   vamos agarrar todos los elementos que tengan el atributo data-toggle y vamos a llamar a la función tooltip sobre ellos, esto es un plugin de jquery que add boostrap, sirve si tenemos los scripts de jquery y boostrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})