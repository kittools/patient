function isIE() {
	if(!!window.ActiveXObject || "ActiveXObject" in window) {
		return true;
	} else {
		return false;
	}
}

function isIE11() {
	if((/Trident\/7\./).test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
}
if(isIE() || isIE11()) {　
	var style = document.createElement("link");
	style.href = "../../../css/ie_official_review_card.css";
	style.rel = "stylesheet";
	style.type = "text/css";
	document.getElementsByTagName("HEAD").item(0).appendChild(style);
}