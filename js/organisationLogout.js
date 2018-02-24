
(function ($) {

    //回到顶部按钮的显示
    window.onscroll = function () {
        if ($(window).scrollTop() > 600) {
            //事件绑定
            $(".tool-toTop").animate({"right":"80px"},500);
        }else  {
            // $(".tool-toTop").animate({"right":"0"},1000);
        }
    };
    //回到顶部按钮
    $(".tool-toTop").click(function () {
        $("html,body").animate({scrollTop:0},200);
        // $(".tool-toTop").animate({"right":"0"},1000);
    })


    //pc页面，点击"联系我们"事件
    $('.esjy-contact-btn-pc').click(function () {
        $('.esjy-contact-widget').animate({"right":"0"},500);
    })


    //pc页面，点击"关闭"事件
    $('.pc-close').click(function () {
        $('.esjy-contact-widget').animate({"right":"-380px"},500);
    })


    //mob页面，点击"联系我们"事件
    $('.esjy-contact-btn-mob').click(function () {
        $('.esjy-contact-widget').animate({"bottom":"0"},500);
    })


    //mob页面，点击"关闭"事件
    $('.mob-close').click(function () {
        $('.esjy-contact-widget').animate({"bottom":"-380px"},500);
    })



})(jQuery);
