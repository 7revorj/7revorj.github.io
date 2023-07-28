




$("#Slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#Slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#Slideshow');
}, 4000);