//Business Logic

function pingpong(startPoint) {
  if ((startPoint % 3 === 0 && startPoint % 5 === 0)) {
      return ('ping-pong');
    } else if (startPoint %  5 === 0 ) {
      return ('ping');
    } else if (startPoint % 3 === 0) {
      return ('pong');
    } else {
      return startPoint;
    }
}





//User Interface

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});
$(document).ready(function() {
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });
});
$(document).ready(function() {
    $('#submit').click(function(event) {
    var userNumber = parseInt($('input#number').val());
    event.preventDefault();
        $('ul.numbers').empty();
        for (var startPoint = 1; startPoint <= userNumber; startPoint += 1) {
            $('ul.numbers').append('<ul>' + pingpong(startPoint) + '</ul>');
            }
    });
});
