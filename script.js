$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");  
            $(".goup").show();
        }
        else{
            $(".navbar").removeClass("sticky");
            $(".goup").hide();
        }
    });
    $(".goup").click(function(){
        scroll(0,0)
    });
    $(".know").click(function(){
        
        $('html, body').animate({
            scrollTop: ($('#about').offset().top)
        },500);
    });
   

    $(".menu-toggler").click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});
