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

$("#myValue").text(value1//displayValue1);