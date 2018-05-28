// create variables to hold generated score number, image numbers, and wins/losses
var gscore;
var cscore = 0;
var breakingimg;
var darkimg;
var indyimg;
var starimg;
var wins = 0;
var losses = 0;

$(document).ready(function() {
  // generate score number and image numbers
  function gameStart() {
    gscore = Math.floor(Math.random() * 101) + 19;
    $("#cgn").text(gscore);
    breakingimg = Math.floor(Math.random() * 12) + 1;
    darkimg = Math.floor(Math.random() * 12) + 1;
    indyimg = Math.floor(Math.random() * 12) + 1;
    starimg = Math.floor(Math.random() * 12) + 1;
    console.log("generated score " + gscore);
  console.log("breaking bad " + breakingimg);
  console.log("dark crystal " + darkimg);
  console.log("crystal skull " + indyimg);
  console.log("dilithium " + starimg);
  }
  gameStart();
  

  // when user clicks image
  // add image number to current score number

  $("#bb").click(function(event) {
    cscore = cscore + breakingimg;
    $("#current").text(cscore);
    rules();
  });
  $("#dc").click(function(event) {
    cscore = cscore + darkimg;
    $("#current").text(cscore);
    rules();
  });
  $("#cs").click(function(event) {
    cscore = cscore + indyimg;
    $("#current").text(cscore);
    rules();
  });
  $("#sc").click(function(event) {
    cscore = cscore + starimg;
    $("#current").text(cscore);
    rules();
  });

  function rules() {
    // if score === generated score alert win, wins++, reset numbers
    if (cscore == gscore) {
     wins++;
      gameStart();
      cscore = 0;
      $("#current").text(cscore);
      $("wins").text(wins);
      alert("Great job!");
    };
    // if score is greater than generate alert loss, losses++, reset numbers
    if (cscore > gscore) {
      losses++;
      gameStart();
      cscore = 0;
      $("#current").text(cscore);
      $("#losses").text(losses);
      alert("Math is hard!");
    };
  };

  // when user clicks reset button
  // reset scoresheet
  $("#reset").click(function() {
    wins = 0;
    losses = 0;
    $("#losses").text(losses);
    $("wins").text(wins);
  });
});
