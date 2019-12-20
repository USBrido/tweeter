$(document).ready(function() {

  $("#textbox").on('keyup', function(value) {
    let charactersTyped = $(this).val().length;
    let charactersLeft = 140 - charactersTyped;
    $(this).siblings('.counter').text(charactersLeft);
    if (charactersLeft <= 0) {
      $("#alert2").slideDown(200);
      $(this).siblings('.counter').css({'color': 'red'});
    } else {
      $("#alert2").slideUp(200);
      $(this).siblings('.counter').css({'color': 'black'});
    }
  
  });

});

