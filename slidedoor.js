window.onload=function(){
	

	var oBox=document.getElementById("slidedoor");

	var aImg=oBox.getElementsByTagName("div");

	var imgWidth=aImg[0].offsetWidth;


	var exposeWidth=160;

	oBox.style.width=imgWidth+(aImg.length-1)*exposeWidth+"px";

	function setPos(){
		for (var i = 1; i < aImg.length; i++) {
			aImg[i].style.left=imgWidth+(i-1)*exposeWidth+"px";
		}
	}

	setPos();

	for (var i = 0; i < aImg.length; i++) {
		aImg[i].index=i;
		aImg[i].onmouseover=function(){
			setPos();
			for (var j = this.index; j >= 0; j--) {
				aImg[j].style.left=j*exposeWidth+"px";
			};
		};
	};
};
