document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
});

let positionMenu = $('#position-menu');
let name = $('#name');
let phone = $('#phone');
let loader = $('.loader');
$('#submit').click(function () {
    let hasError = false;
    $('.error-input').hide();
    positionMenu.css('border-color', 'rgb(130, 19, 40)');
    name.css('border-color', 'rgb(130, 19, 40)');
    phone.css('border-color', 'rgb(130, 19, 40)');
    if (!positionMenu.val()) {
        positionMenu.css('border-color', 'red');
        positionMenu.next().show();
        hasError = true;
    }
    if (!name.val()) {
        name.css('border-color', 'red');
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
    }
    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: {product: positionMenu.val(), name: name.val(), phone: phone.val()}
        })
            .done(function( msg ) {
                loader.hide();
                if (msg.success) {
                    let formInputs = $('#form__inputs').hide();
                    let successfulOrder = $('#successful-order').css('display', 'flex')
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
            });
    }

});