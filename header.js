var show = true;
$(document).ready(function(){
    $('.open-nav').click(function(){
        $('.menu').toggleClass('active');
        $('.open-nav').toggleClass('open');
        document.body.style.overflow = show ? "hidden" : "initial"
        menuSection.classList.toggle("on", show)
    show = !show;
    });
});