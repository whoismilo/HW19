
  $("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
  });
  
  $('.dlresumebutton').on("click", function() {
    alert("Resume downloaded");
});

$('.myworkimg').hover(function(){
    $(this).width(1.03*$(this).width());
    $(this).height(1.03*$(this).height());
}, function(){
    $(this).width(0.97*$(this).width());
    $(this).height(.97*$(this).height());

    console.log("mouse leave");
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/