$(document).ready(function() {
    $('.burger_btn').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('menushow')
    })
})