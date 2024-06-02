$(document).ready(function() {
    $('.burger_btn').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('menushow')
    })
    $('.burger_btn').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('shieldshow')
    })
})
 

$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 24,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});