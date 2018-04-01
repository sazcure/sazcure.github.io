let introWrapper = $('#intro > .wrapper')

$(window).on('scroll', () => {


    //keeping the heading div in center while the parallax scrolling
    let wScroll = $(this).scrollTop();

    $('#heading > h3').css({ 'transform': `translateY(${wScroll / 3}px)` });
    $('#heading > h1').css({ 'transform': `translateY(${wScroll / 3}px)` });


    //controlling the opacity of intro div with scrolling
    let scrollTop = $(this).scrollTop(),
        offset = introWrapper.offset().top,
        calc = ((scrollTop - offset) / offset + 0.3);
    
        console.log(`CALC : ${calc}\nscrollTop : ${scrollTop}\n OFFSET : ${offset} `)

    if (scrollTop >= offset) {
        calc = calc > 1 ? 1 : calc < 0 ? 0 : calc;
        introWrapper.css({ opacity: calc});
    }
    
});



