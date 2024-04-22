$(function(){
  // id属性がaddの要素がクリックされたら
  $("#add").on("click", function(){
    // id属性がtargetの要素にclass属性”sample”を追加
    $("#target").addClass("sample");
  });
  // id属性がremoveの要素がクリックされたら
  $("#remove").on("click", function(){
    // id属性がtargetの要素からclass属性”sample”を削除
    $("#target").removeClass("sample");
  });
  // id属性がtoggleの要素がクリックされたら
  $("#toggle").on("click", function(){
    // id属性がtargetの要素にclass属性”sample”を追加または削除
    $("#target").toggleClass("sample");
  });
  // id属性がhasの要素がクリックされたら
  $("#has").on("click", function(){
    // id属性がtargetの要素にclass属性”sample”があるかどうか判定
    let result = $("#target").hasClass("sample");
    if(result){
      console.log("sampleクラスがあります");
    }
    else{
      console.log("sampleクラスがありません");
    }
  });
});