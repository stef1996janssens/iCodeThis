$(function(){
    appendNavbar();
    setActiveStyleToNavlink();
})


function appendNavbar(){
    const $nav = `
    <nav>
        <img class="site-logo" src="../common/logo_iCodeMas.png">
        <ul>
            <li><a class="nav-link" href="../iCodeMas_01_Countdown/">Countdown</a></li>
            <li><a class="nav-link" href="../iCodeMas_02_Ecommerce_featured_products/">Featured products</a></li>
            <li><a class="nav-link" href="../iCodeMas_03_Ecommerce_promotion/">Promotion</a></li>
            <li><a class="nav-link" href="../iCodeMas_04_Ecommerce_sale_hero/">Sale hero</a></li>
            <li><a class="nav-link" href="../iCodeMas_12_Ecommerce_info_cards/">Info cards</a></li>
        </ul>
    </nav>`

    var $navContainer = $('body').prepend($nav);
}

function setActiveStyleToNavlink(){
    $navLinks = $('.nav-link');
    $navLinks.each(function() {
        var windowHref = window.location.href.substring(window.location.href.slice(0, -1).lastIndexOf('/') + 1);
        var linkHref = $(this).attr('href').slice(3);
        if (linkHref === windowHref) {
            $(this).addClass("active");
            $(this).attr("aria-current", "page");
        }
    })
}