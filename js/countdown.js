var eventDate = new Date("May 18, 2019  09:00:00").getTime();

var counter = setInterval(function() {
  var currTime = new Date();
  var liveFlag = -1;
  var diff = eventDate - currTime.getTime();
  if (diff < 0) {
    var remainingTime = new Date("May 18, 2019  21:00:00").getTime();
    diff = remainingTime - currTime.getTime();
    liveFlag = (diff > 0) ? 0 : 1;
  }

  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));

  switch (liveFlag) {
    case -1:
      var styledTime = days + '<span class="countdown-units"> days and </span>' +
                      hours + '<span class="countdown-units">h </span>' +
                      minutes + '<span class="countdown-units">m </span>' +
                      seconds + '<span class="countdown-units">s<br>until BioHack 2019!</span>';
      break;
    case 0:
      var styledTime = '<span class="countdown-units"> BioHack 2019 is live!<br></span>' +
                    hours + '<span class="countdown-units">h </span>' +
                    minutes + '<span class="countdown-units">m </span>' +
                    seconds + '<span class="countdown-units">s<br>remaining!</span>';
      break;
    case 1:
      var styledTime = '<span class="countdown-units"> BioHack 2019 has ended.<br></span>';
      break;
  }

  document.getElementById("countdown").innerHTML = styledTime;

}, 100);

// var scheduler = function() {
//   if (eventDate - new Date().getTime() > 0) {
//     return;
//   }
//
//   var event = document.getElementById("responsive-table");
//
//   for (resp)
//
//
//
//   //Todo: OnLoad get time and sort schedule table by passed and upcoming
// };
