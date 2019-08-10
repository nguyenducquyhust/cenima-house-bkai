$(document).ready(function () {
  $('#dismiss').on('click', function () {
    // hide sidebar
    $('#sidebar').hide();

  });
  $('#sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').show();

  });
}); 