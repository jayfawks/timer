
var startingTime = "0:35";
var resetCount = 0;
document.getElementById('timer').innerHTML = startingTime;

var interval = setInterval(showTimer, 1000);

function showTimer(){
    var currentTime = document.getElementById('timer').innerHTML;
    var timerWhole = currentTime.split(/[:]+/);
    var min = timerWhole[0];
    var sec = timerWhole[1];
    var sec = showSec(sec);
    var min = showMin(min,sec);

    if(min == 0 && sec == 0){
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "expired"
    }
    else if(min == 0 && sec < 30){
        var userInput = confirm("Do you want to extend the timer?");
        if(userInput){
            if(resetCount >= 3){
                alert("You have exceeded MAX number of reset attempts.");
            }
            else{
                document.getElementById('timer').innerHTML = startingTime;
                resetCount = resetCount+1;
            }
        }
        else{
            clearInterval(interval);
            document.getElementById('timer').innerHTML = "expired";
        }
    }
    else
        document.getElementById("timer").innerHTML = min + ":" + sec;
}

function showSec(sec){
    sec = sec-1;
    sec = "0" + sec;
    sec = sec.substr(sec.length-2);

    if (sec < 0) {
        sec = "59"
    };
    return sec;
}

function showMin(min, sec){
    if(sec == 59){
        min = min-1;
    }
    return min;
}
