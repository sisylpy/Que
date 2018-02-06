
(function ($) {

    //定义变量（动画元素，事件变量）
    var container = $(".container");
    var box = $(".box");
    var buddy = $(".buddy");
    var pop = $(".pop");
    var open = $(".btn");
    var close = $(".close");
    var divs = $(".business_today");


    //自定义动画
    $.Velocity.RegisterEffect('lixin.slideUpIn',{
        defaultDuration:500,
        calls:[
            [{opacity: [1, 0], translateY: [0,100]}]
        ]
    });

    $.Velocity.RegisterEffect('lixin.slideDownOut',{
        defaultDuration:300,
        calls: [
            [{opacity: [0,1], translateX: [100, 0]}]
        ]
    });

    $.Velocity.RegisterEffect('lixin.scaleIn',{
        defaultDuration: 300,
        calls: [
            [{opacity:[1,0], scale:[1,0.3]}]
        ]
    });

    $.Velocity.RegisterEffect('lixin.scaleOut',{
        defaultDuration: 300,
        calls: [
            [{opacity:[1, 0], scale:[0.3, 1]}]
        ]
    });


    //动画序列
    var seqInit = [{
        elements: container,
        properties:'lixin.slideUpIn',
        options: {
            delay:300
        }
    },{
        elements: box,
        properties:'lixin.slideUpIn',
        options: {
            sequenceQueue:false
        }
    },{
        elements: buddy,
        properties:'lixin.slideUpIn',
        options: {
            delay:60
        }
    }];

    var seqClick =  [{
        elements: container,
        properties: 'lixin.slideDownOut',
        optaions: {
        }
    },{
        elements: box,
        properties: 'lixin.slideDownOut',
        options: {
            sequenceQueue:false
        }
    },{
        elements: buddy,
        properties: 'lixin.slideDownOut',
        options: {
        }
    },{
        elements: container,
        properties:'lixin.slideUpIn',
        options: {
        }
    },{
        elements: pop,
        properties:'lixin.slideUpIn',
        options: {
            sequenceQueue:false
        }

    },{
        elements: close,
        properties:'lixin.slideUpIn',
        options: {
            sequenceQueue:false
        }

    }, {
        elements: divs,
        properties:'lixin.scaleIn'
    }
    ];





    //
    var seqClose =  [{
        elements: divs,
        properties:'lixin.scaleOut'
    },{
        elements: container,
        properties: 'lixin.slideDownOut',
        optaions: {
        }
    },{
        elements: pop,
        properties: 'lixin.slideDownOut',
        options: {
            sequenceQueue:false
        }
    },{
        elements: container,
        properties:'lixin.slideUpIn',
        options: {
        }
    },{
        elements: box,
        properties:'lixin.slideUpIn',
        options: {
            sequenceQueue:false
        }
    }];



    //事件绑定
    $.Velocity.RunSequence(seqInit);

    open.on('click', function () {
        $.Velocity.RunSequence(seqClick);
    });

    close.on('click',function () {
        $.Velocity.RunSequence(seqClose);
    });

})(jQuery);