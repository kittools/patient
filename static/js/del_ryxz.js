function del(self) {

	var _self = self;
	if(isIE() || isIE11()) {　
		_self.parentNode.parentNode.removeChild(_self.parentNode);
	} else {
		_self.parentNode.remove();
	}
}

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