var $input = $('input:text'),
    $register = $('#register');

$register.attr('disabled', true);
$input.keyup(function() {
    var trigger = false;
    $input.each(function() {
        if (!$(this).val()) {
            trigger = true;
        }
        else trigger = false;
    });
    console.log( trigger );
    trigger ? $register.attr('disabled', true) : $register.removeAttr('disabled');
});
