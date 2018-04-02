
let prevScrollPos = 0
$(window).on('scroll', () => {

    let wScroll = $(this).scrollTop();

    //keeping the welcome div in center while the parallax scrolling
    $('#welcome > h3').css({ 'transform': `translateY(${wScroll / 3}px)` });
    $('#welcome > h1').css({ 'transform': `translateY(${wScroll / 3}px)` });

    console.log(`wScroll : ${wScroll}`)

    //sticky super cool nav
    let navBar = $('#nav-bar'),
        navBarOuterHeight = $('#nav-bar').outerHeight(),
        transformed = navBar.css('transform');
    

    prevScrollPos = wScroll;

});



