




$("#Slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#Slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#Slideshow');
}, 4000);



//This code will create close the contact form when the user clicks off of it
//The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function (event) {
    //Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)

