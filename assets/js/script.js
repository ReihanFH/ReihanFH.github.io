// Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("07/01/2023 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  }
}, 1000);

// Page Loader
$(document).ready(function () {
  // Will wait for everything on the page to load.
  $(window).bind("load", function () {
    $(".overlay, body").addClass("loaded");
    setTimeout(function () {
      $(".overlay").css({ display: "none" });
    }, 2000);
  });

  // Will remove overlay after 1min for users cannnot load properly.
  setTimeout(function () {
    $(".overlay, body").addClass("loaded");
  }, 6000);
});

// Music Player
var track = document.getElementById("track");

var openBtn = document.getElementById("open");
var controlBtn = document.getElementById("play-pause");

var audio = document.getElementById("track");
audio.volume = 0.2;

function playPause() {
  if (track.paused) {
    track.play();
    //controlBtn.textContent = "Pause";
    controlBtn.className = "pause";
  } else {
    track.pause();
    //controlBtn.textContent = "Play";
    controlBtn.className = "play";
  }
}

openBtn.addEventListener("click", playPause);
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

// Open Cover
$(window).on("load", function () {
  $(this).scrollTop(0);
  $("#cover").modal("show");
});

// Aos
AOS.init({
  duration: 1500,
});
