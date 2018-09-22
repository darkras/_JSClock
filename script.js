//get current time
document.addEventListener('DOMContentLoaded', function () {
    var Time = new Date();

    //get hour
    var hour = 0;

    function getHour() {
        hour = Time.getHours();
        if (hour > 12) {
            hour -= 12;
        }
        return hour * 30;
    }


    //get min
    var min = 0;

    function getMin() {
        min = Time.getMinutes();
        return (min * 6);
    }

    //get sec
    var sec = 0;

    function getSec() {
        sec = Time.getSeconds();
        return (sec * 6);
    }

    var setSec = document.querySelector('.second-hand');
    setSec.style.transform = 'rotate(' + getSec() + 'deg)';

    var setMin = document.querySelector('.min-hand');
    setMin.style.transform = 'rotate(' + getMin() + 'deg)';

    var setHour = document.querySelector('.hour-hand');
    setHour.style.transform = 'rotate(' + getHour() + 'deg)';

})