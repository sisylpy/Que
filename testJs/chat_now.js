
(function ($) {

    // IBMCore.common.util.config.set({
    //     "masthead": {
    //         "type": "alternate"
    //     },
    //     "footer": {
    //         "type": "alternate"
    //     }
    // });


    $(document).ready(function () {
        // change the words style of CM
        // jQuery(function ($) {
        //     var IntervalIndex1= null;
        //     function startClock1(){
        //         var $contactModuleButton = $(document).find(".ibm-contact-widget-btn");
        //         var strText = "联系 IBM";
        //         var ibmIndex = strText.indexOf("IBM");
        //         var strTextArray = new Array();
        //         var strHtml = "";
        //         var verticalFlag = false;
        //         var $contactModuleButtonContent = null;
        //         if (ibmIndex == -1) {
        //             for (var i = 0; i < strText.length; i++) {
        //                 if (strText.charAt(i) != " ") {
        //                     strTextArray.push(strText.charAt(i));
        //                 }
        //             }
        //             strHtml = strTextArray.join("<br>");
        //             strHtml = '<span class="vertical-display-class">' + strHtml + '</span>';
        //         } else {
        //             for (var i = 0; i < strText.length; i++) {
        //                 if(ibmIndex == i || ibmIndex+1 == i){
        //
        //                 }else if(ibmIndex+2 == i){
        //                     strTextArray.push("IBM");
        //                 }else{
        //                     if (strText.charAt(i) != " ") {
        //                         strTextArray.push(strText.charAt(i));
        //                     }
        //                 }
        //             }
        //             strHtml = strTextArray.join("<br>");
        //             strHtml = '<span class="vertical-display-class">' + strHtml + '</span>';
        //         }
        //         if($(window).width()>768){
        //             verticalFlag = true;
        //             $contactModuleButton.html(strHtml);
        //             $contactModuleButtonContent = $(document).find(".ibm-contact-widget-btn .vertical-display-class");
        //             $contactModuleButtonContent.css({display:"block",position:"absolute",top:"-15%",left:"40%"});
        //             $contactModuleButtonContent.css("\\-webkit\\-transform","rotate(90deg)");
        //             $contactModuleButtonContent.css("\\-moz\\-transform","rotate(90deg)");
        //             $contactModuleButtonContent.css("\\-ms\\-transform","rotate(90deg)");
        //             $contactModuleButtonContent.css("\\-o\\-transform","rotate(90deg)");
        //             $contactModuleButtonContent.css("transform","rotate(90deg)");
        //             $contactModuleButton.css("width","80px");
        //             $contactModuleButton.css("background","#ff5003");
        //         }
        //         $(window).resize(function(){
        //             if($(window).width()>768){
        //                 if(verticalFlag == false){
        //                     verticalFlag = true;
        //                     $contactModuleButton.html(strHtml);
        //                     $contactModuleButtonContent = $(document).find(".ibm-contact-widget-btn .vertical-display-class");
        //                     $contactModuleButtonContent.css({display:"block",position:"absolute",top:"-15%",left:"40%"});
        //                     $contactModuleButtonContent.css("\\-webkit\\-transform","rotate(90deg)");
        //                     $contactModuleButtonContent.css("\\-moz\\-transform","rotate(90deg)");
        //                     $contactModuleButtonContent.css("\\-ms\\-transform","rotate(90deg)");
        //                     $contactModuleButtonContent.css("\\-o\\-transform","rotate(90deg)");
        //                     $contactModuleButtonContent.css("transform","rotate(90deg)");
        //                     $contactModuleButton.css("width","80px");
        //                     $contactModuleButton.css("background","#ff5003");
        //                 }
        //             }else{
        //                 if(verticalFlag == true){
        //                     verticalFlag = false;
        //                     $contactModuleButton.html(strText);
        //                     $contactModuleButton.css("width","auto");
        //                 }
        //             }
        //         });
        //     }
        //     IntervalIndex1=setTimeout(startClock1,500);
        // });
        jQuery(function() {
            var custom_chat_now = '<span class="custom-chat-now"><a class="ibm-btn-pri ibm-btn-white" data-lp-event="click">立即交谈</a></span>';
            function chatnow() {
                setTimeout(function() {
                    if (jQuery('.ibm-chat-available').is(":visible")) {
                        if (jQuery('.custom-chat-now').length == 0) {
                            jQuery('.chat-button').prepend(custom_chat_now);
                            jQuery('.custom-chat-now a').on('click', function(event) {
                                event.preventDefault();
                                jQuery('.ibm-chat-available').trigger('click');
                            });
                        }
                    }
                }, 4000);
            }
            setInterval(chatnow, 1000);
        });

    })
})(jQuery);

