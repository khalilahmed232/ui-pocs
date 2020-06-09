function pageLoadFn() {
  var time = Util.getUrlParamterValue("time");
  var unit = time.substr(-1);
  var minutes = 0;
  var seconds = 0;

  if (unit == "m") {
    minutes = Number(time.substr(0, time.length - 1));
  }

  if (unit == "s") {
    seconds = Number(time.substr(0, time.length - 1));
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
  }

  fomattedTimefn(minutes, seconds);
  var intervId = window.setInterval(function () {
    seconds = seconds - 1;
    if (seconds == -1) {
      minutes = minutes - 1;
      if (minutes == -1) {
        clearInterval(intervId);
        window.location.href = "https://www.youtube.com/watch?v=2xZyo6weod4";
      } else {
        seconds = 59;
      }
    }
    fomattedTimefn(minutes, seconds);
  }, 1000);
}

function fomattedTimefn(minutes, seconds) {
  if (minutes > 0) {
    var formattedTime = minutes + "m : " + seconds + "s";
    $(".tomato").html(formattedTime);
  } else if (seconds >= 0) {
    var formattedTime = seconds + "s";
    $(".tomato").html(formattedTime);
  }
}
