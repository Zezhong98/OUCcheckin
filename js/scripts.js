var loadTime = function() {
	n =  new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	h = n.getHours();
	if (h<10) {
		h = '0' + h;
	}
	M = n.getMinutes();
	if (M<10) {
		M = '0' + M;
	}
	document.getElementById("time").innerHTML = y + "-" + m + "-" + d + " " + h + ":" + M;
}

window.onload = loadTime;