
$('.videosld1').slick({
    'slidesToShow' : 3,
    'slidesToScroll' : 1,
    'nextArrow' : '.nxt',
    'prevArrow' : '.prv'
})

$('.picsld1').slick({
    'slidesToShow' : 3,
    'slidesToScroll' : 1,
    'nextArrow' : '.nxt2',
    'prevArrow' : '.prv2'
});

$('.gnb li').on('click',function(){

    let i = $(this).index();
    $('html,body').stop().animate({
        'scrollTop' : (i+1) * 1000
    })
});


$('.vid').on('mouseover',function(){
    $(this).find('video').get(0).play();
}).on('mouseout',function(){
    $(this).find('video').get(0).pause();
})


//꼭 복습!!!!!!!! 노드찾기!!!!!!!!!!








// $('.con2cover').children().on('mouseover',function(){
//     let i = $(this).index();

//     $('.con2').children('.box').eq(i).addClass('on');

// }).on('mouseout',function(){
//     $('.con2').children().removeClass('on');

// })