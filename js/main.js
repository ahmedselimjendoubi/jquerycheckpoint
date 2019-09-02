function changebold(){
    document.getElementById("textarea").style.fontWeight="bold";
}
function changeitalic(){
    document.getElementById("textarea").style.fontStyle="italic";
}
function underline(){
    document.getElementById("textarea").style.textDecoration="underline";
}
function pixels(){
    document.getElementById("textarea").style.fontSize=document.getElementById("options").value;
}
function family(){
    document.getElementById("textarea").style.fontFamily=document.getElementById("options2").value;
}
$('#b1').hide();
$('#b2').hide();
$('#b3').hide();
$('#b4').hide();
$('#b5').hide();
$('#b6').hide();
$('#b7').hide();
$('#b8').hide();
$('#b9').hide();
$(".view1").mouseenter(function(){
  $("#b1").show()
  $(this).css("opacity",0.5);
})
$(".view1").mouseleave(function(){
  $("#b1").hide()
  $(this).css("opacity",1);
})
$(".view2").mouseenter(function(){
    $("#b2").show()
    $(this).css("opacity",0.5);
  })
  $(".view2").mouseleave(function(){
    $("#b2").hide()
    $(this).css("opacity",1);
  })
  



  $(".view3").mouseenter(function(){
    $("#b3").show()
    $(this).css("opacity",0.5);
  })
  $(".view3").mouseleave(function(){
    $("#b3").hide()
    $(this).css("opacity",1);
  })




  $(".view4").mouseenter(function(){
    $("#b4").show()
    $(this).css("opacity",0.5);
  })
  $(".view4").mouseleave(function(){
    $("#b4").hide()
    $(this).css("opacity",1);
  })






  $(".view5").mouseenter(function(){
    $("#b5").show()
    $(this).css("opacity",0.5);
  })
  $(".view5").mouseleave(function(){
    $("#b5").hide()
    $(this).css("opacity",1);
  })





  $(".view6").mouseenter(function(){
    $("#b6").show()
    $(this).css("opacity",0.5);
  })
  $(".view6").mouseleave(function(){
    $("#b6").hide()
    $(this).css("opacity",1);
  })




  $(".view7").mouseenter(function(){
    $("#b7").show()
    $(this).css("opacity",0.5);
  })
  $(".view7").mouseleave(function(){
    $("#b7").hide()
    $(this).css("opacity",1);
  })



  $(".view8").mouseenter(function(){
    $("#b8").show()
    $(this).css("opacity",0.5);
  })
  $(".view8").mouseleave(function(){
    $("#b8").hide()
    $(this).css("opacity",1);
  })



  $(".view9").mouseenter(function(){
    $("#b9").show()
    $(this).css("opacity",0.5);
  })
  $(".view9").mouseleave(function(){
    $("#b").hide()
    $(this).css("opacity",1);
  })