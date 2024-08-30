$(document).ready(function () {
  // Ocultar las secciones de detalles al cargar la página
  $(".detalles").hide();

  // Función para mostrar u ocultar detalles al hacer clic en "Ver más"
  $("#Baires").click(function () {
      $("#detallesBaires").toggle();
  });

  $("#MachuPicchu").click(function () {
      $("#detallesMachuPicchu").toggle();
  });

  $("#Rio").click(function () {
      $("#detallesRio").toggle();
  });

  // Función para ocultar detalles al hacer clic en el botón de cierre (X)
  $(".btn-close").click(function () {
      $(this).closest(".detalles").hide();
  });
});
