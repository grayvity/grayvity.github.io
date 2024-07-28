$(document).ready(function () {
  var gameStarted = false;
  var gameEnded = false;

  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
    $("#status").text("Game started...");
    gameStarted = true;
    gameEnded = false;
  });

  $("#maze").mouseleave(function () {
    if (gameStarted && !gameEnded) {
      $(".boundary").addClass("youlose");
      $("#status").text("You lose! Click the 'S' to begin.");
      gameStarted = false;
      gameEnded = true;
    }
  });

  $(".boundary").mouseenter(function () {
    if (gameStarted && !gameEnded) {
      $(".boundary").addClass("youlose");
      $("#status").text("You lose! Click the 'S' to begin.");
      gameStarted = false;
      gameEnded = true;
    }
  });

  $("#end").mouseenter(function () {
    if (gameStarted && !gameEnded) {
      $("#status").text("You win! Click the 'S' to play again.");
      gameStarted = false;
      gameEnded = true;
    }
  });
});
