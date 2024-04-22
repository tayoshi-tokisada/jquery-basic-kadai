$(function(){
  // fadeOut
  $("#fadeOut").on("click", function(){
    $(".box").fadeOut(1000, function(){
      $(this).after("<p class='temp'>fadeOut完了</p>");
      setTimeout(() => {
        $(".temp").remove();
      }, 1000);
    });
  });

  // fadeIn
  $("#fadeIn").on("click", function(){
    $(".box").fadeIn(3000, function(){
      $(this).after("<p class='temp'>fadeIn完了</p>");
      setTimeout(() => {
        $(".temp").remove();
      }, 1000);
    });
  });

  // fadeToggle
  $("#fadeToggle").on("click", function(){
    $(".box").fadeToggle();
  });

  // slideUp
  $("#slideUp").on("click", function(){
    $(".box").slideUp();
  });

  // slideDown
  $("#slideDown").on("click", function(){
    $(".box").slideDown();
  });

  // slideToggle
  $("#slideToggle").on("click", function(){
    $(".box").slideToggle();
  });
});

  // fadeOut2
  $("#fadeOut2").on("click", function(){
    $(".box").css("opacity", 0);
  });

  // fadeIn2
  $("#fadeIn2").on("click", function(){
    $(".box").css("opacity", 1);
  });

  // slideUp2
  $("#slideUp2").on("click", function(){
    $(".box").css("height", 0);
  });

  // slideDown2
  $("#slideDown2").on("click", function(){
    $(".box").css("height", 200);
  });