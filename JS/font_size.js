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


//Change Theme function

var flag=false;
function changeColor(bgColor) {


	var otherColor = document.getElementsByClassName("otherColor");
	var spanColor2 = document.getElementById("spanColor2");
	var color_2 = document.getElementById("color_2");

	if (flag == false) {

		flag=true;

		document.body.style.background = bgColor;
		spanColor2.style.background = bgColor;
		color_2.style.background = '#292929';

		for (var i = 0; i < otherColor.length; i++) {

	   		otherColor.item(i).style.color = 'white';
		}

	}
	else{

		document.body.style.backgroundColor = 'white';
		spanColor2.style.background = 'white';
		color_2.style.background = '#0f354e';

		for (var i = 0; i < otherColor.length; i++) {

	   		otherColor.item(i).style.color = '#252525';
		}

		flag=false;
	}

};

