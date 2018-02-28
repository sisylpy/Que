
(function ($) {


    var navHeight = $('.Header').height();
    var bannerHeight = $('.article-page-banner').height();
    var topHeight = navHeight + bannerHeight - 55;

    window.onscroll = function () {

        //顶部固定菜单栏
        if ($(window).scrollTop() > topHeight) {
            $('.mune-col').addClass('fixed');
            $('.article-detail').css("marginTop",55);
        }else  {
            $('.mune-col').removeClass('fixed');
            $('.article-detail').css("marginTop",0);
        }
    };


    //来自别的页面href的 hash传值，跳转
    function articleLinkScrool () {

        // console.log(window.location.href)//此处会打印出当前页面的href值，为http://localhost:63342/HTML_ExamplePractice/%E5%8D%9A%E5%AE%A2%E5%9B%AD%E6%8F%90%E5%89%8D%E7%BB%83%E4%B9%A0/index2.html#id1，井号后面的为传递的参数，需要进行处理一下
        // console.log(url);//打印出来是一个数组[‘http://localhost:63342/HTML_ExamplePractice/%E5%8D%9A%E5%AE%A2%E5%9B%AD%E6%8F%90%E5%89%8D%E7%BB%83%E4%B9%A0/index2.html’,'id1']  数组的第二个就是我们传递的数据

        // 首先要获取当前的href值
        var url = window.location.href.split('#');
        var item_id = url[1];


        $('.article').each(function () {

            if ($(this).attr("id") === item_id) {

                // 获取id对应的顶部的距离
               var id_offSetTop =  $(this).offset().top;

               //获取id的高度
               var id_Height = $(this).height();
            //   计算应该滚动出去的scrollTop
                var id_scroolTop = id_offSetTop - id_Height ;
            //    设置滚动
                $("html,body").animate({scrollTop: id_offSetTop - 80}, 200);

            }

        })

    }


    //本页面点击菜单栏文章的滚动
    // function articleScrool() {
        $('.item').on("click","a",function () {

            //设置菜单的active状态
            $(this).addClass("active");
            $(this).parent().siblings().children().removeClass("active");

        //    获取data_linkid
            var data_linkid = $(this).attr("data-linkid");

            $('.article-col').each(function () {

                if ($(this).attr("id") === data_linkid) {

                    // 获取id对应的顶部的距离
                    var id_offSetTop =  $(this).offset().top;

                    //获取id的高度
                    var id_Height = $(this).height();
                    //   计算应该滚动出去的scrollTop
                    var id_scroolTop = id_offSetTop - id_Height ;
                    //    设置滚动
                    $("html,body").animate({scrollTop: id_offSetTop - 80}, 200);

                }

            })


        })


    // }
    //




    articleLinkScrool();
    // articleScrool();


})(jQuery);
