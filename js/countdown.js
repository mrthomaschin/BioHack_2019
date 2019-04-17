var eventDate = new Date("May 18, 2019  09:00:00").getTime();

var counter = setInterval(function() {
  var currTime = new Date().getTime();
  var diff = eventDate - currTime;
  
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));

 
  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    document.getElementById("countdown").innerHTML = "Passed";
  }

    var styledTime = days + '<span class="countdown-units"> days and </span>' + 
                    hours + '<span class="countdown-units">h </span>' + 
                    minutes + '<span class="countdown-units">m </span>' + 
                    seconds + '<span class="countdown-units">s <br>until BioHack 2019!</span>';

    document.getElementById("countdown").innerHTML = styledTime;
}, 100);
