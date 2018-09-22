//get elements
var setSec = document.querySelector('.second-hand');
var setMin = document.querySelector('.min-hand');
var setHour = document.querySelector('.hour-hand');

//set current time
function setDate() {
    const time = new Date();
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hour = time.getHours();
    const secDeg = ((sec / 60) * 360);
    const minDeg = ((min / 60) * 360);
    const hourDeg = ((hour / 12) * 360);

    setSec.style.transform = 'rotate(' + secDeg + 'deg)';
    setMin.style.transform = 'rotate(' + minDeg + 'deg)';
    setHour.style.transform = 'rotate(' + hourDeg + 'deg)';
}

//check for current time every 1s
setInterval(setDate, 1000);