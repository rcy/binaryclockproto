function draw() {
  var number = g_num;
  var tens = number / 10;
  var ones = number % 10;

  $(".led").removeClass("on");

  if (ones & 8) $("#ones .8").addClass("on");
  if (ones & 4) $("#ones .4").addClass("on");
  if (ones & 2) $("#ones .2").addClass("on");
  if (ones & 1) $("#ones .1").addClass("on");

  if (tens & 8) $("#tens .8").addClass("on");
  if (tens & 4) $("#tens .4").addClass("on");
  if (tens & 2) $("#tens .2").addClass("on");
  if (tens & 1) $("#tens .1").addClass("on");

  if (g_minutes)
    $(".minsec.led").addClass("on");

  $("#human").html(number);
}

var g_num = 60;
var g_minutes = false;

draw();

$("button#up").on("click", function() {
  g_num++;
  draw();
});

$("button#down").on("click", function() {
  g_num--;
  if (g_num < 1) g_num = 1;
  draw();
});

$("button#minsec").on("click", function() {
  g_minutes = !g_minutes;

  if (g_minutes)
    g_num /= 60;
  else
    g_num *= 60;

  g_num = Math.round(g_num);

  draw();
});

var g_running = false;
var g_timer;
var g_initial;

$("button#startstop").on("click", function() {
  if (!g_running)
    start();
  else
    stop();
});

function start() {
  g_initial = g_num;

  var interval = 1000;
  if (g_minutes)
    interval *= 60;

  g_timer = setInterval(function() {
    g_num -= 1;
    draw();
    if (g_num <= 0) {
      stop();
      buzz();
      reset();
      draw();
    }
  }, interval);
  g_running = true;
}
function stop() {
  clearTimeout(g_timer);
  g_running = false;
}
function reset() {
  g_num = g_initial;
}
function buzz() {
  alert("times up!");
}