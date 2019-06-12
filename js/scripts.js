$(document).ready(function() {
  $("#greeting").click(function() {
    $("#formLetter").show();
  });
  $("#formLetter").submit (function(event){
    var nameInput = $("input#name").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("select#state").val();
    var zipInput = $("input#zip").val();
    var messageInput = $("textarea#message").val();

    $(".name").text(nameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".message").text(messageInput);

    $("#greeting").toggle();
    $("#loveLetter").toggle();

    event.preventDefault();
  });

});
