

$(document).ready(function() {
  $("#design").click(function() {
    $("p").toggle();
  });
});

$(document).ready(function() {
  $("#development").click(function() {
    $("p").toggle();
  });
});

$(document).ready(function() {
  $("#product").click(function() {
    $("p").toggle();
  });
});

// Form function

  var username = $("input#MERGE1").val();
  var email = $("input#MERGE0").val();
  var message = $("textarea#comment").val();

$(document).ready(function() {
  $("button#submitBtn").click(function() {
    if($("input#MERGE1").val() && $("input#MERGE0").val()) {
        alert(username + "Your message has been recieved. Thank you for reaching out to us.");
        }
        else {
        alert("Please enter your name and email");
        }
  });
});

// Create hover effect in portfolio


// $(document).ready(function(){
//   $("form#delaniForm").submit(function(e){
//   e.preventDefault();
  
//   var name = $("input#MERGE1").val();
//   var email = $("input#MERGE0").val();
//   var message = $("textarea#comment").val();
  
//   if($("input#MERGE1").val() && $("input#MERGE0").val()) {
//   alert(name + "Your message has been recieved. Thank you for reaching out to us.");
//   }
//   else {
//   alert("Please enter your name and email");
//   }
  