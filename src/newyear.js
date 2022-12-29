var countDownDate = new Date("Jan 01, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("newyeartimer").innerHTML =  "до нового года осталось:<br>" + days + " дн, " + hours + " ч, "
    + minutes + " мин, " + seconds + " сек.";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("newyeartimer").innerHTML = "с новым годом!";
    }
}, 1000);

