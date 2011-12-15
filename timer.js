function draw(number) {
  var tens = number / 10;
  var ones = number % 10;

  $("#ones .led").removeClass("on");
  $("#tens .led").removeClass("on");

  if (ones & 8) $("#ones .8").addClass("on");
  if (ones & 4) $("#ones .4").addClass("on");
  if (ones & 2) $("#ones .2").addClass("on");
  if (ones & 1) $("#ones .1").addClass("on");

  if (tens & 8) $("#tens .8").addClass("on");
  if (tens & 4) $("#tens .4").addClass("on");
  if (tens & 2) $("#tens .2").addClass("on");
  if (tens & 1) $("#tens .1").addClass("on");
}

var num = 60;

setInterval(function() {
  draw(num);
  num -= 1;
  if (num < 0)
    num = 60;
}, 1000);