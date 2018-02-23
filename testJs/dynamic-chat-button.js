

(function ($) {




    $data = {};
    jQuery().ready(function($) {

        // hide all chat buttons
        $('.ocean-chat-cta').css('display', 'none');

        setInterval(function() {
            if ($(".ibm-chat-btn.ibm-chat-available").length !== 0) {
                $('.ocean-chat-cta').css('display', 'inline-block');
            } else {
                $('.ocean-chat-cta').css('display', 'none');
            }
            // end chat logic
        }, 5000);

        $('.ocean-chat-cta').bind('click', function(e){
            $('.ibm-chat-link').click();
        });

    });



})(jQuery);

