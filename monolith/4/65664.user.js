// ==UserScript==
// @name           PW ExHard Speedbot 0.3
// @namespace      BvS-Razithel
// @description    Adjusts your speed for you
// @include        http://animecubed.com/billy/bvs/pizzawitch.html
// @include        http://www.animecubed.com/billy/bvs/pizzawitch.html
// @include        http://animecubed.com/billy/bvs/pizzawitchgarage.html
// @include        http://www.animecubed.com/billy/bvs/pizzawitchgarage.html
// ==/UserScript==

function getLocation() {
	var locationElement = document.evaluate("//tr/td[@colspan='3' and @align='center']/b/i", document, null,
		XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	var location = null;
	if (locationElement) {
		var locationRaw = locationElement.innerHTML;
		var locationResult = locationRaw.match(/Distance to Destination: (\d+)/);
		if (locationResult != null) {
			location = locationResult[1];
		} else {
			alert ("Can't detect location!");
		}
	}
	return location;
}

function getCurSpeed() {
	var curSpeedElement = document.evaluate("//font[@style='font-size: 24px; color: rgb(51, 170, 51);']/b", document, null,
		XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	var curSpeedRaw = null;
	if (curSpeedElement) {
		curSpeedRaw = curSpeedElement.innerHTML;
		curSpeedElement.innerHTML = curSpeedElement.innerHTML + "\nRaz's Speed Script Ver. 0.3";
	}
	return curSpeedRaw;
}

function getHurdleLocation() {
	var hurdleLocationElement = document.evaluate("//font[@color='#ffffaa']/b", document, null,
		XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	var hurdleLocationRaw;
	var hurdleLocation;
	if (hurdleLocationElement != null) {
		hurdleLocationRaw = hurdleLocationElement.innerHTML;
		var hurdleLocationResult = hurdleLocationRaw.match(/Location (\d+)/);		
		if (hurdleLocationResult != null) {
			hurdleLocation = hurdleLocationResult[1];
		} else {
			alert ("Can't detect hurdle location!");
		}
	} else {
		hurdleLocation = null;
	}
	return hurdleLocation;
}

function getHurdleSpeed(type) {
	var xpathquery;
	if (type == 1) {
		xpathquery = "//font[@color='#aaffaa']/b/i";
	} else if (type == 2) {
		xpathquery = "//table[@width='90%']/tbody/tr/td/b";
	}
	var hurdleSpeedElement = document.evaluate(xpathquery, document, null,
		XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	var hurdleSpeedRaw;
	var hurdleSpeed;
	if (hurdleSpeedElement != null) {
		hurdleSpeedRaw = hurdleSpeedElement.innerHTML;
		var hurdleSpeedResult = hurdleSpeedRaw.match(/Speed [\w \:]*(\d+)/);		
		if (hurdleSpeedResult != null) {
			hurdleSpeed = hurdleSpeedResult[1];
		} else {
			alert ("Can't detect hurdle Speed!");
		}
	} else {
		hurdleSpeed = null;
	}
	
	return hurdleSpeed;
}

function getHurdleSpeedComparison(type) {
	if (type == 1) {
		xpathquery = "//font[@color='#aaffaa']/b/i";
	} else if (type == 2) {
		xpathquery = "//table[@width='90%']/tbody/tr/td/b";
	}
	var hurdleSpeedComparisonElement = document.evaluate(xpathquery, document, null,
		XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	var hurdleSpeedComparisonRaw;
	var hurdleSpeedComparison;
	if (hurdleSpeedComparisonElement != null) {
		hurdleSpeedComparisonRaw = hurdleSpeedComparisonElement.innerHTML;
		var hurdleSpeedComparisonResult = hurdleSpeedComparisonRaw.match(/Speed [\w \:]*\d+  ?or (\w+)/);		
		if (hurdleSpeedComparisonResult != null) {
			hurdleSpeedComparison = hurdleSpeedComparisonResult[1];
		} else {
			alert ("Can't detect hurdle SpeedComparison!");
		}
	} else {
		hurdleSpeedComparison = null;
	}
	return hurdleSpeedComparison;
}

function getDeliciousness() {
	var DeliciousnessElement = document.evaluate("/html/body/center/table/tbody/tr/td/form/table[1]/tbody/tr[1]/td[last()]/b", document, null,
		XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	var DeliciousnessRaw;
	var Deliciousness;
	if (DeliciousnessElement != null) {
		DeliciousnessRaw = DeliciousnessElement.innerHTML;
		var DeliciousnessResult = DeliciousnessRaw.match(/Deliciousness: (\d+)/);		
		if (DeliciousnessResult != null) {
			Deliciousness = DeliciousnessResult[1];
		} else {
			alert ("Can't detect Deliciousness!");
		}
	} else {
		Deliciousness = null;
	}
	return Deliciousness;
}

function setSpeed(target, current) {
	var diff = target - current;
	var shiftInput = "";
	if (diff > 2) {
		diff = 2;
	} else if (diff < -2) {
		diff = -2;
	}
	if (diff > 0) {
		shiftInput = "+" + diff;
	} else if (diff < 0) { 
		shiftInput = diff;
	}
	var speedInput = document.evaluate("//input[@name='shift' and @value='" + shiftInput+ "']", document, null,
    XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	if (speedInput) {
		speedInput.wrappedJSObject.click();
	}
}

var location = getLocation() - 0;
var cSpeed = getCurSpeed() - 0;
var hLocation = getHurdleLocation();
var hSpeed;
var hSpeedComp;
if (hLocation != null) {
	hSpeed = getHurdleSpeed(1) - 0;
	hSpeedComp = getHurdleSpeedComparison(1);
	hLocation -= 0;
} else {
	hSpeed = getHurdleSpeed(2) - 0;
	hSpeedComp = getHurdleSpeedComparison(2);
	hLocation = location;
}

if (location == 1) {
	var OLR = document.evaluate("//input[@name='card_used' and @value='63']", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
	if (OLR != null) {
		OLR.wrappedJSObject.click()
	}
} else if (location < 5) {
	var PizzaPizza = document.evaluate("//input[@name='card_used' and @value='3']", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
	if (PizzaPizza != null) {
		PizzaPizza.wrappedJSObject.click();
	}
} else if (getDeliciousness() < 200) {
	var MeltyCheese = document.evaluate("//input[@name='card_used' and @value='10']", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
	if (MeltyCheese != null) {
		MeltyCheese.wrappedJSObject.click();
	} else {
		var acOff = document.evaluate("//input[@name='card_used' and @value='7']", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
		if (acOff != null) {
			acOff.wrappedJSObject.click();
		}
	}
}



var target = 5;
if (hSpeedComp=="Slower") {
	if ((hSpeed == 2) && ((hLocation - location) <= target*2-1)) {
		target = 4;
	}
	if ((location + target) >= hLocation) {
		target--;
	}
	if ((location + hSpeed) >= hLocation) {
		target = hSpeed;
	}
}
if (hSpeedComp == "Faster") {
	if ((hLocation == location) && (hSpeed < 5)) {
		target--;
	}
}

/* Debug garbage
alert (getDeliciousness());
//alert("loc" + location + "\ncspeed" + cSpeed + "\nhLoc" + hLocation + "\nhSpeed" + hSpeed + "\nhSpeedComp" + hSpeedComp + "\ntarget" + target); */
setSpeed(target, cSpeed);

function process_event(event) {
	if (event.keyCode==71){		//g
		if (document.forms.namedItem("anotherdelivery")) {
			document.forms.namedItem("anotherdelivery").wrappedJSObject.submit();
		} else if (document.forms.namedItem("drive")) {
			document.forms.namedItem("drive").wrappedJSObject.submit();
		} else if (document.forms.namedItem("hittheride")) {
			document.forms.namedItem("hittheride").wrappedJSObject.submit();
		}
	}
}
window.addEventListener("keyup", process_event, false);