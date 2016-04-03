document.onreadystatechange = function(){
	var openSansLight = new FontFaceObserver("Open Sans Light"),
		openSansRegular = new FontFaceObserver("Open Sans Regular"),
		openSansBold = new FontFaceObserver("Open Sans Bold");

	Promise.all([openSansLight.check(), openSansRegular.check(), openSansBold.check()]).then(function(){
		document.documentElement.className += " fonts-loaded";
		document.cookie = "fonts-loaded=";
	});
};