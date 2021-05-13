$(document).ready(function() {
    $(".filter").not('.bali').hide();
    $('.filter').filter('.bali').show();

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');
        console.log(value);

        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
    });

    $('.nav-rekomendasi button').click(function() {
        $(this).addClass('active-primary').siblings().removeClass('active-primary');
    });
});