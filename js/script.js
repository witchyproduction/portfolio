//レスポンス対応ハンバーガーメニュー開閉

$('.hamburger-btn').on('click',function(){
    $('.header, .header__nav, .header__titles, .header__humburger-icon-wrapper, .hamburger-btn, .header__icon,.hamburger-btn span').toggleClass('active')
});


//ハンバーガーメニュー開いている時、ナビゲーションを選択すると自動的にハンバーガーメニューが閉まる

$('.header__maintitle').on('click',function(){
    $('.header, .header__nav, .header__titles, .header__humburger-icon-wrapper, .hamburger-btn, .header__icon,.hamburger-btn span').removeClass('active')
});


//ページ読み込み時、windowサイズによって一部のセレクタ名を変更、スライドを読み込み時でも有効化

$(document).ready( function(){
    //windowの幅をxに代入
let x = $(window).width();
    //windowの分岐幅をyに代入
let y = 1023;
if (x <= y) {
    $('.slide-container').addClass('swiper-container').removeClass('skill__container');
    $('.slide-wrapper').addClass('swiper-wrapper').removeClass('skill__wrapper');
    $('.slide-img').addClass('swiper-slide').removeClass('skill__img');
}
});

//スライドをレスポンシブ時、そうではない時でセレクタ名を変更

$(window).resize(function(){
    //windowの幅をxに代入
    let x = $(window).width();
    //windowの分岐幅をyに代入
    let y = 1023;
    if (x <= y) {
        $('.slide-container').addClass('swiper-container').removeClass('skill__container');
        $('.slide-wrapper').addClass('swiper-wrapper').removeClass('skill__wrapper');
        $('.slide-img').addClass('swiper-slide').removeClass('skill__img');
    }else{
        $('.slide-container').addClass('skill__container').removeClass('swiper-container');
        $('.slide-wrapper').addClass('skill__wrapper').removeClass('swiper-wrapper');
        $('.slide-img').addClass('skill__img').removeClass('swiper-slide');
    }
});

//レスポンシブ時のみswiper.jsを起動

$(function() {
    //swiper 1023以下で起動
    let swiper; 
    $(window).on('load resize', function(){
        let w = $(window).width();
        if (w <= 1023) {
            if (swiper) {
                return;
            } else {
                swiper = new Swiper('.swiper-container', {
                    loop: true,
                    slidesPerView: 2,//画面の大きさによってスライド数を変更
                    breakpoints: {
                        800: {
                            slidesPerView: 3,
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: { 
                        nextEl: '.swiper-button-next', //「次へボタン」要素の指定
                        prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
                    },
                });
            }
        } else {
            if (swiper) {
                swiper.destroy();
                swiper = undefined;
            } 
        } 
    });
});

//スムーススクロールの実装

$(function(){
    $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
});
