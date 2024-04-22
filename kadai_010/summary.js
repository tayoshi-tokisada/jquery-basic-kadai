$(function(){
  const red = "rgb(0, 0, 255)";
  const blue = "rgb(0, 255, 0)";
  const nishikiGoi = "こーんにーちはー！";
  const carp = "Heeeeeeeeeeellooooooooooo!";

  // change-color
  $("#change-color").on("click", function(){
    if($("#target").css("color") === blue){
      $("#target").css("color", red);
    }
    else{
      $("#target").css("color", blue);
    }
  });

  // change-text
  $("#change-text").on("click", function(){
    if($("#target").text() === carp){
      $("#target").text(nishikiGoi);
    }
    else{
      $("#target").text(carp);
    }
  });

  // fade-out
  $("#fade-out").on("click", function(){
    $("#target").css("transition", "opacity 1s ease");
    $("#target").css("opacity", 0);
  });

  // fade-in
  $("#fade-in").on("click", function(){
    $("#target").css("transition", "opacity 1s ease");
    $("#target").css("opacity", 1);
  });
});