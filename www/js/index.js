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
var displayValue2 = window.localStorage.getItem(key2);
var displayValue3 = window.localStorage.getItem(key3);
var displayValue4 = window.localStorage.getItem(key4);
var displayValue5 = window.localStorage.getItem(key5);

$("#myValue1").text(displayValue1);
$("#myValue2").text(displayValue2);
$("#myValue3").text(displayValue3);
$("#myValue4").text(displayValue4);
$("#myValue5").text(displayValue5);

var newKey = "penNew";
var newValue = window.localStorage.getItem(newKey);
$("#myNewValue").text(newValue);