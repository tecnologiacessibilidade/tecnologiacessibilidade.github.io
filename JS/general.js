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

	var textClassElements = document.getElementsByClassName("textClass");
	var headingsClassElements = document.getElementsByClassName("headingsClass");


	if (flag == false) {

		flag=true;

        document.getElementById("tema").innerHTML = "MODO CLARO";

		document.body.style.background = bgColor;
        // document.querySelector('#foo').classList.add('myClass');
        document.getElementById('content').setAttribute("class", "styleDark")
		for (var i = 0; i < textClassElements.length; i++) {

	   		textClassElements.item(i).style.color = '#c6c6c6';
		}

        for (var i = 0; i < headingsClassElements.length; i++) {

	   		headingsClassElements.item(i).style.color = 'white';
		}
	}
	else{

        document.getElementById("tema").innerHTML = "MODO ESCURO";

		document.body.style.backgroundColor = '#f1f1f1';

        document.getElementById('content').setAttribute("class", "styleLight")
		for (var i = 0; i < textClassElements.length; i++) {

	   		// textClassElements.item(i).style.color = '#7e7e7e';
	   		textClassElements.item(i).style.color = '#000000';
		}

		for (var i = 0; i < headingsClassElements.length; i++) {

	   		// textClassElements.item(i).style.color = '#7e7e7e';
	   		headingsClassElements.item(i).style.color = '#000000';
		}

		flag=false;
	}

};

