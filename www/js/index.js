var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }

var key1 = "pen1";
var key2 = "pen2";
var key3 = "pen3";
var key4 = "pen4";
var key5 = "pen5";

var value1 = "blue";
var value2 = "red";
var value3 = "green";
var value4 = "yellow";
var value5 = "orange";

window.localStorage.setItem(key1, value1);
window.localStorage.setItem(key2, value2);
window.localStorage.setItem(key3, value3);
window.localStorage.setItem(key4, value4);
window.localStorage.setItem(key5, value5);

var displayValue1 = window.localStorage.getItem(key1);

$("myValue1").text(displayValue1);