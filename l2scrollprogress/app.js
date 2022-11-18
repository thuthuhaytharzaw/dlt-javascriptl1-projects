var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
}

function scrollpoint(){
	// console.log('i am working');

    // scrolltop
    // project height
	// client height

	// ph-ch

	// st * 100 / (ph-ch)

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(scrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(scrollheight)
	var getclientheight = document.documentElement.clientHeight;
	// console.log(clientheight);

	var clientheight = getscrollheight - getclientheight;

	// var getfinal = Math.round((getscrolltop * 100) / clientheight);
	// console.log(getfinal)

	var getfinal = Math.round((getscrolltop / clientheight) * 100);
	console.log(getfinal)

	getprogressbar.style.width = `${getfinal}%`

}


function printme(){
	window.print();
}