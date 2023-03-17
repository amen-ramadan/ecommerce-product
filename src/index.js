import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

import '@fortawesome/fontawesome-free/js/all.min';

$(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $('.add-to-cart-btn').click(function() {
        alert('أضيف المُنتج إلى عربة الشراء');
    });

    $('#copyright').text(" جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear());

    // تغيير العنصر active بين العناصر لتنتقل معه تنسيقاته { صفحة المنتج الالوان والاحجام}

    $(".product-option input[type='radio']").change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

});