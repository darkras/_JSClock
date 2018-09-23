/*jshint esversion: 6 */
const Suites = {
    Spade: 1,
    Heart: 2,
    Diamond: 3,
    Club: 4
};

//get elements
var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHans = document.querySelector('.hour-hand');

//current time
const time = new Date();
const sec = time.getSeconds();
const min = time.getMinutes();
const hour = time.getHours();

//covert current time to percentage
var secDeg = ((sec / 60) * 360) - 6;
var minDeg = ((min / 60) * 360) - 6;
var hourDeg = ((hour / 12) * 360);

//setting clock hand
secHand.style.transform = 'rotate(' + secDeg + 'deg)';
minHand.style.transform = 'rotate(' + minDeg + 'deg)';
hourHans.style.transform = 'rotate(' + hourDeg + 'deg)';

//set current time
function setDateSec() {
    secDeg += 6;
    secHand.style.transform = 'rotate(' + secDeg + 'deg)';
}

function setDateMin() {
    minDeg += 6;
    minHand.style.transform = 'rotate(' + minDeg + 'deg)';
}

function setDateHour() {
    hourDeg += 5;
    hourHans.style.transform = 'rotate(' + hourDeg + 'deg)';
}

//update interval base on sec, min, hour
setInterval(setDateSec, 1000);
setInterval(setDateMin, 60000);
setInterval(setDateHour, 600000);