$(function() {
    StartTimer();
    
});

function StartTimer(){
    var seconds = 0;
    var timeInterval = setInterval(function() {
        GetTimeTillChristmas();
        seconds++;
    }, 1000)
}

function GetTimeTillChristmas(){
    const christmas = new Date(`12/25/${new Date().getFullYear()}`);
        var timeTillChristmas =  (christmas - new Date());
        
        var days = Math.floor(timeTillChristmas / (1000*60*60*24));
        var hours = Math.floor((timeTillChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeTillChristmas % ((1000 * 60 * 60))  / (1000 * 60)));
        var seconds = Math.floor((timeTillChristmas % (1000 * 60)) / 1000);
       
        var $dayCounter = $('#days').children('.number');
        $dayCounter.html(days);
    
        var $hourCounter = $('#hours').children('.number');
        $hourCounter.html(hours);

        var $minuteCounter = $('#minutes').children('.number');
        $minuteCounter.html(minutes);
    
        var $secondCounter = $('#seconds').children('.number');
        $secondCounter.html(seconds);
}