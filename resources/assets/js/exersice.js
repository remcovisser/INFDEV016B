$(function() {
  // Loadbar width
  var urlParts = document.URL.split('/');
  var width = ((parseInt(urlParts[urlParts.length-1]) * 10) -10) + "%";
  $(".progress_bar").find("span").css("width", width);
  $(".progress_bar span").text(width);

  // Is the check button is pressed
  $( "#check" ).click(function() {
    if($("#correctAnswer").html() == $("#answer").val()) {
      $("#correctAnswer").css("color", "green");
    } else {
      $("#correctAnswer").css("color", "red");
    }
    $("#correctAswerContainer").removeClass("hidden");
    $("#next").removeClass("hidden");
    // Else they can abuse the check and just fix their answer before going to the next assignment.
    $(this).attr("disabled", true);
  });

  // Is the next button is pressed
  $( "#next" ).click(function() {
    var url = document.URL;
    var firstUrlPart = url.substr(0, url.lastIndexOf("/"));
    var urlParts = document.URL.split('/');
    var secondUrlPart = parseInt(urlParts[urlParts.length-1]) + 1;
    if(secondUrlPart < 11) {
      var url = firstUrlPart + "/" + secondUrlPart;
    } else {
      var url = firstUrlPart + "/result";
    }
    window.location.replace(url);
  });

  console.log("exercise.js loaded.");
});
