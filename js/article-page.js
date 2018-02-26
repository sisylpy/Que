
(function ($) {


    var navHeight = $('.Header').height();
    var bannerHeight = $('.article-page-banner').height();
    var topHeight = navHeight + bannerHeight - (bannerHeight * 0.2) ;

    window.onscroll = function () {
        if ($(window).scrollTop() > topHeight) {
            $('.mune-col').addClass('fixed');
            $('.article-detail').css("marginTop",86.5);
        }else  {
            $('.mune-col').removeClass('fixed');
            $('.article-detail').css("marginTop",0);

        }
    };



})(jQuery);
