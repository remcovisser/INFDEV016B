$(function() {
  // Loadbar width
  var urlParts = document.URL.split('/');
  var width = ((parseInt(urlParts[urlParts.length-1]) * 10) -10) + "%";
  $(".progress_bar").find("span").css("width", width);
  $(".progress_bar span").text(width);

  // Is the check button is pressed
  var point = 0;
  $( "#check" ).click(function() {
    if($("#correctAnswer").html() == $("#answer").val()) {
      $("#correctAnswer").css("color", "green");
      point = 1;
    } else {
      $("#correctAnswer").css("color", "red");
    }
    $("#correctAswerContainer").removeClass("hidden");
    $("#next").removeClass("hidden");
    // Else they can abuse the check and just fix their answer before going to the next assignment.
    $(this).attr("disabled", true);

    var answer = $("#answer").val();
    if(answer == "") {
      answer = "empty";
    }
    // Format: localhost:3000/results/LEVEL/SUBJECT/QUESTION_ID/POINTS/ANSWER
    // Example: http://localhost:3000/results/C2/Quantifiers/2/1/many
    var saveUrl = window.location.href.replace("levels", "results") + "/" + point + "/" + answer;
    console.log(saveUrl);
    $.get(saveUrl, function(result) {
          console.log(result);
      });
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
      var url = "/results";
    }
    window.location.replace(url);
  });
});
