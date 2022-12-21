$(".restart").toggle();
$(".start").one("click", function() {
  $(".click2").toggle();
  $(".start").toggle();
});

$(".click1").click(function() {

  var p1 = Math.random();
  p1 = p1 * 5;
  p1 = Math.round(p1) + 1;

  var u1 = $(".win0").html();

  u1 = parseInt(u1);

  u1 = u1 + 1;

  $(".win0").html(u1);

  $(".fin" + u1).html(p1);

  var pr1 = $(".score1").html();

  pr1 = parseInt(pr1);

  pr1 = pr1 + p1;

  $(".score1").html(pr1);

  $(".click1").toggle();
  $(".click2").toggle();

  $(".f1").attr("src", "images/dice" + p1 + ".png");

  $(".ans1").html(p1);
});

$(".click2").click(function() {

  var p2 = Math.random();
  p2 = p2 * 5;
  p2 = Math.round(p2) + 1;

  var pr2 = $(".score2").html();
  pr2 = parseInt(pr2);
  pr2 = pr2 + p2;

  $(".score2").html(pr2);
  $(".click2").toggle();
  $(".click1").toggle();

  var g = $(".win2").html();

  var h = parseInt(g);

  h = h + 1;

  $(".win2").html(h);

  $(".pin" + h).html(p2);

  $(".f2").attr("src", "images/dice" + p2 + ".png");

  $(".ans2").html(p2);
});

$(".click2").click(function() {

  var e = $(".win1").html();
  var l = $(".win2").html();
  var r = $(".ans1").html();
  var t = $(".ans2").html();

  var e = parseInt(e);
  var c = parseInt(l);
  var n = parseInt(r);
  var m = parseInt(t);

  if (c === 3) {
    var k1 = $(".score1").html();
    var k2 = $(".score2").html();

    k1 = parseInt(k1);
    k2 = parseInt(k2);

    if (k1 > k2) {
      $(".buttons").toggle();
      $(".khatam").html("Player 1 Wins");
      $(".restart").toggle();
      setTimeout(function() {
        location.reload();
      }, 5000);
    } else if (k2 > k1) {
      $(".buttons").toggle();
      $(".khatam").html("Player 2 Wins");
      $(".restart").toggle();
      setTimeout(function() {
        location.reload();
      }, 5000);

    } else {
      $(".buttons").toggle();
      $(".khatam").html("Match Draw");
      $(".restart").toggle();
      setTimeout(function() {
        location.reload();
      }, 5000);
    }
  }
});
