$(function() {

    $('.top-nav-list').click(function() {
        if ($(this).find('.top-nav-a').hasClass('selected')) {
            $(this).find('.top-nav-a').removeClass('selected')
        } else {
            $(this).find('.top-nav-a').addClass('selected')
        }
    });

    $('.header-list').click(function() {
        if ($(this).find('.header-a').hasClass('selected')) {
            $(this).find('.header-a').removeClass('selected')
        } else {
            $(this).find('.header-a').addClass('selected')
        }
    });

    var header = $('#top-img').height() + $('#top-img').offset().top;
    console.log(header);

    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > header) {
            $('.top-nav2').addClass('header');
        } else {
            $('.top-nav2').removeClass('header');
        }
    });

    $('.input-plus1').click(function() {
        $('.input-plus1').addClass('input-plus1-click');
        $('.input-section2').addClass('input-section2-click');
        $('.box-input').addClass('box-input-click');
        $('.top-btn').addClass('top-btn-click');
        $('.btn-section').addClass('btn-section-click');
        $('.top-btn:active').addClass('top-btn-click:active');
        $('.input-plus2').addClass('input-plus2-click');
    });

    $('.input-plus2').click(function() {
        $('.checkbox-section1').addClass('checkbox-section1-click');
        $('.checkbox-section2').addClass('checkbox-section2-click');
        $('.input-plus2').addClass('input-plus2-click2');
        $('.input-section3-tx').addClass('input-section3-tx-click');
    });

});

