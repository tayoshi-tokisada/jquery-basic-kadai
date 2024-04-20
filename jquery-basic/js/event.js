$(function(){
  // ボタンがクリックされた場合
  $("button").on("click", function(){
    console.log("ボタンがクリックされました");
  });

  $("div").on({
    "click": ()=>{
      $(".square").css("background-color", "red");
      $(".square").text("click");
    },
    "dblclick": ()=>{
      $(".square").css("background-color", "green");
      $(".square").text("dblclick");
    },
    "mouseenter": ()=>{
      $(".square").css("background-color", "blue");
      $(".square").text("mouseenter");
    },
    "mouseout": ()=>{
      $(".square").css("background-color", "gray");
      $(".square").text("mouseout");
    },
  });

  $(document).on("click keydown", (e)=>{
    if(e.type === "click"){
      $(".isClickOrKeydown").text("クリックされました！");
    }
    if(e.type === "keydown"){
      $(".isClickOrKeydown").text("キーが押されました！");
    }
  });
});