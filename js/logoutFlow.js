(function ($) {


    $('.Step').height($(window).height);

    $(window).resize(function(e) {

     // $('.Step').height($(window).height);
     //    $('.Step').height($(window).height());
        // $('.Picture image').width($(window).width()/2);



        console.log('window:'+$(window).height());
        console.log('step:'+$('.Step').height());



    });


    // StepHeight = function () {
    //
    //
    //
    //     // $(".btn1").click(function(){
    //     //     $("p").height(50);
    //     // });
    //
    // }

    // StepHeight();

})(jQuery);