

$(document).ready(function(){
  $('#design-btn').on('click', function(){
    $('div#design').toggle(2000);
  });
});

$(document).ready(function(){
  $('#development-btn').on('click', function(){
    $('div#development').toggle(2000);
  });
});

$(document).ready(function(){
  $('#product-btn').on('click', function(){
    $('div#product').toggle(2000);
  });
});

// Form function

  var input = document.getElementById("#MERGE1");
  var input = document.getElementById("#MERGE0");
  var textarea = $("#comment");

$(document).ready(function() {
  $("button#submitBtn").click(function() {
    if($("input#MERGE1").val() && $("input#MERGE0").val()) {
        alert(MERGE1 + `Your message has been recieved. Thank you for reaching out to us.`);
        }
        else {
        alert("Please enter your name and email");
        }
  });
});


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
  