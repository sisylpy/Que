




(function ($) {

    //定义变量
    var cdsection1 = $(".cd-section1");
    var cdsection2 = $(".cd-section2");
    var cdsection3 = $(".cd-section3");


    //actualBlock is the section we are animation


    var offset = $(window).scrollTop() - cdsection1.offset().top;

    var offsetSection2 = cdsection2.offset().top;

    var offsetSection3 = cdsection3.offset().top;

    var scooltop = $(cdsection1).scrollTop();
    var lll = $(cdsection1)[0].scrollTop;


    windowHeight = $(window).height();


    $(window).scroll(function () {

        console.log('offsetSection2:   '+offsetSection2);
        console.log('offsetSection3:   '+offsetSection3 );
        console.log('lll:       '+ lll);
        console.log('windowHeight:       '+ windowHeight);
        console.log('offset:       '+ offset);



        if($(window).scrollTop() + windowHeight -100 > offsetSection3){
                cdsection3.velocity({ scale: 0.6 }, 1000);

        }


        // if( offset >= -windowHeight && offset <= 0 ) {
        //     // section entering the viewport
        //     // translateY = (-offset)*100/windowHeight;
        //     // scale = 1;
        //     // opacity = 1;
        //
        //     cdsection3.velocity({ scale: 0.6 }, 1000);
        //
        // } else if( offset > 0 && offset <= windowHeight ) {
        //     //section leaving the viewport
        //     // scale = (1 - ( offset * 0.3/windowHeight));
        //     // opacity = ( 1 - ( offset/windowHeight) );
        //     // translateY = 0;
        //     // boxShadowBlur = 40*(offset/windowHeight);
        //
        //     cdsection3.velocity({ scale: 1.2 }, 1000);
        // }

    })






})(jQuery);



