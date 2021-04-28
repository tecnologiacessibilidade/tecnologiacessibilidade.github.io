// Increase/descrease font size

$('#aumenta-texto').click(function() {
    curSize = parseInt($('#content').css('font-size')) + 2;
    if (curSize <= 32)
        $('#content').css('font-size', curSize);
});

$('#tamanho-normal').click(function() {
    if (curSize != 16)
        $('#content').css('font-size', 16);
});

$('#diminui-texto').click(function() {
    curSize = parseInt($('#content').css('font-size')) - 2;
    if (curSize >= 12)
        $('#content').css('font-size', curSize);
});
