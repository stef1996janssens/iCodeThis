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

// function formatTimeDifference(timeDifference) {
//     // Calculate days, hours, minutes, and seconds
//     var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
//     // Build the formatted string
//     var result = '';
//     if (days > 0) {
//       result += days + ' day' + (days > 1 ? 's' : '') + ', ';
//     }
//     if (hours > 0 || days > 0) {
//       result += hours + ' hour' + (hours > 1 ? 's' : '') + ', ';
//     }
//     if (minutes > 0 || hours > 0 || days > 0) {
//       result += minutes + ' minute' + (minutes > 1 ? 's' : '') + ', ';
//     }
//     result += seconds + ' second' + (seconds > 1 ? 's' : '');
  
//     return result;
//   }
  
//   function timeUntilChristmas() {
//     // Get the current date
//     var currentDate = new Date();
  
//     // Set the target date to Christmas of the current year
//     var christmasDate = new Date(currentDate.getFullYear(), 11, 25);
  
//     // Check if Christmas has already passed this year
//     if (currentDate > christmasDate) {
//       christmasDate.setFullYear(currentDate.getFullYear() + 1);
//     }
  
//     // Calculate the time difference in milliseconds
//     var timeDifference = christmasDate - currentDate;
  
//     // Format and display the result
//     var formattedTime = formatTimeDifference(timeDifference);
//     console.log("Time until Christmas: " + formattedTime);
//   }
  
//   // Call the function to calculate and display the formatted time until Christmas
//   timeUntilChristmas();
  