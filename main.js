// Animate Smooth Scroll 
$('#view-work').on('click', function () {
    const images = $('#images').positions().top;

    $('html, body').animate({
        scrollTop: images
    }, 800)
})