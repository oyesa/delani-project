
$(document).ready(function(){
  $("form#delaniForm").submit(function(event){
    event.preventDefault();

    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();

    if($("input#MERGE1").val() && $("input#MERGE0".val()) {
      alert (name + ", Your message has been recieved. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email");
    }
  });
});

// add toggle effect on what-we-do section
$(document).ready(function() {
  $("#design").click(function() {
    $("p").toggle();
  });
});