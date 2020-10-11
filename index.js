
$(".minimize").click(function(){
    const text = $(this).html();
    if(text==="-"){
        $(this).html("+");
    }
    else if(text==="+"){
        $(this).html("-");
    }
    var numb = ($(this).attr("class")).substring(9,10);
   $("form."+numb).slideToggle(300,function(){
   });
});
$(document).ready(function() {
    $('#trigger').click(function() {
      $('#overlay').fadeIn(300);  
    });
    $('#close').click(function() {
      $('#overlay').fadeOut(300);
    });
  });