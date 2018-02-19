

//Animation
(function ($) {

    //定义变量
    // var fadeInDown = $(".fadeInDown");
    // var fadeInLeftBig = $(".fadeInLeftBig");

    var left1 = $(".fadeInLeftBig:eq(0)");
    var left2 = $(".fadeInLeftBig:eq(1)");
    var left3 = $(".fadeInLeftBig:eq(2)");
    var left4 = $(".fadeInLeftBig:eq(3)");
    var left5 = $(".fadeInLeftBig:eq(4)");
    var left6 = $(".fadeInLeftBig:eq(5)");
    var left7 = $(".fadeInLeftBig:eq(6)");
    var left8 = $(".fadeInLeftBig:eq(7)");

    // var fadeInRightBig = $(".fadeInRightBig");

    var right1 = $(".fadeInRightBig:eq(0)");
    var right2 = $(".fadeInRightBig:eq(1)");
    var right3 = $(".fadeInRightBig:eq(2)");
    var right4 = $(".fadeInRightBig:eq(3)");
    var right5 = $(".fadeInRightBig:eq(4)");
    var right6 = $(".fadeInRightBig:eq(5)");
    var right7 = $(".fadeInRightBig:eq(6)");
    var right8 = $(".fadeInRightBig:eq(7)");

    var logoutBusiness = $(".esjy-logoutBusiness");


    //自定义动画
    $.Velocity.RegisterUI('esjy.fadeInDown', {
        defaultDuration: 500,
        calls: [
            [{opacity: [1], translateY: [-40]}]
        ]
    });

    $.Velocity.RegisterUI('esjy.fadeInLeftBig', {
        defaultDuration: 600,
        calls: [
            [{opacity: [1], translateX: [1000]}]
        ]
    });


    $.Velocity.RegisterUI('esjy.fadeInRightBig', {
        defaultDuration: 600,
        calls: [
            [{opacity: [1], translateX: [-1000]}]
        ]
    });
    //动画序列
    var seqFadeInDown = [{
        elements: logoutBusiness,
        properties: 'esjy.fadeInDown',
        options: {
            delay: 200
        }
    }]
    var seqFadeInleft1 = [{
        elements: left1,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 900
        }
    }]
    var seqFadeInleft2 = [{
        elements: left2,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 800
        }
    }]
    var seqFadeInleft3 = [{
        elements: left3,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 700
        }
    }]
    var seqFadeInleft4 = [{
        elements: left4,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 600
        }
    }]
    var seqFadeInleft5 = [{
        elements: left5,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 500
        }
    }]
    var seqFadeInleft6 = [{
        elements: left6,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 400
        }
    }]
    var seqFadeInleft7 = [{
        elements: left7,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 300
        }
    }]
    var seqFadeInleft8 = [{
        elements: left8,
        properties: 'esjy.fadeInLeftBig',
        options: {
            delay: 200
        }
    }]

    // var seqFadeInRightBig = [{
    //     elements: fadeInRightBig,
    //     properties: 'esjy.fadeInRightBig',
    //     options: {
    //         delay:200
    //     }
    // }]

    var seqFadeInright1 = [{
        elements: right1,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 100
        }
    }]
    var seqFadeInright2 = [{
        elements: right2,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 200
        }
    }]
    var seqFadeInright3 = [{
        elements: right3,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 300
        }
    }]
    var seqFadeInright4 = [{
        elements: right4,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 400
        }
    }]
    var seqFadeInright5 = [{
        elements: right5,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 500
        }
    }]
    var seqFadeInright6 = [{
        elements: right6,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 600
        }
    }]
    var seqFadeInright7 = [{
        elements: right7,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 700
        }
    }]
    var seqFadeInright8 = [{
        elements: right8,
        properties: 'esjy.fadeInRightBig',
        options: {
            delay: 800
        }
    }]


    //定义页面滚动距离
    var businessTop = $(".leftin").offset().top;
    windowHeight = $(window).height();
    // var logoutTop = $(".esjy-logoutBusiness").offset().top;


    //台式机页面滚动监听动画
    window.onscroll = function () {
        if ($(window).scrollTop() + windowHeight > businessTop) {
            //事件绑定
            businessAnimation();
        }
        // if ($(window).scrollTop() + windowHeight > logoutTop) {
        //     $.Velocity.RunSequence(seqFadeInDown);
        // }
    };







    //封装动画效果
    businessAnimation = function () {
        $.Velocity.RunSequence(seqFadeInleft1);
        $.Velocity.RunSequence(seqFadeInleft2);
        $.Velocity.RunSequence(seqFadeInleft3);
        $.Velocity.RunSequence(seqFadeInleft4);
        $.Velocity.RunSequence(seqFadeInleft5);
        $.Velocity.RunSequence(seqFadeInleft6);
        $.Velocity.RunSequence(seqFadeInleft7);
        $.Velocity.RunSequence(seqFadeInleft8);

        $.Velocity.RunSequence(seqFadeInright1);
        $.Velocity.RunSequence(seqFadeInright2);
        $.Velocity.RunSequence(seqFadeInright3);
        $.Velocity.RunSequence(seqFadeInright4);
        $.Velocity.RunSequence(seqFadeInright5);
        $.Velocity.RunSequence(seqFadeInright6);
        $.Velocity.RunSequence(seqFadeInright7);
        $.Velocity.RunSequence(seqFadeInright8);


    }

    //pad终端动画自动显示
    if (windowHeight >= businessTop) {
        businessAnimation();
    }
    // if (windowHeight >= logoutTop) {
    //     $.Velocity.RunSequence(seqFadeInDown);
    //
    // }


})(jQuery);
