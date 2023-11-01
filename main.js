/* Work with strings.*/
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  var rockford = document.getElementById("baddie1"),
    area = document.getElementById("flash"),
    left = area.offsetLeft,
    top = area.offsetTop,
    posLeft = 0,
    posTop = 0,
    tileSize = 32,
    gridSize = 24,
    /*This is the background for the game area.*/
    gameArea = [
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 12, 13, 14, 12, 13,
      14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 12, 13, 14, 12, 13,
      14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 12, 13, 14, 12, 13,
      14, 16, 16, 14, 12, 16, 17, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
      13, 14, 12, 13, 14, 12, 13, 14, 16, 17, 14, 17, 13, 15, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 12, 13, 14, 12, 13, 14, 12, 13, 15, 15, 13, 14,
      12, 16, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 12, 13, 14, 12, 13,
      14, 12, 15, 15, 17, 17, 16, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 17, 17, 15, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 17, 17, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 12, 13, 14, 12, 13,
      14, 16, 13, 14, 12, 13, 14, 17, 16, 16, 16, 13, 14, 12, 13, 14, 19, 21,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 17, 13, 14, 12, 16, 16, 12,
      13, 19, 18, 18, 21, 21, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 13, 17, 12, 13, 19, 18, 21, 21, 21, 21, 21, 14, 12, 13, 14, 12, 13,
      14, 12, 13, 14, 12, 13, 14, 15, 16, 14, 12, 20, 21, 21, 21, 21, 21, 21,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 15, 15, 13, 19, 21,
      21, 21, 21, 21, 21, 21, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 13, 14, 12, 20, 21, 21, 21, 21, 21, 21, 21, 14, 12, 13, 14, 12, 13,
      14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 22, 21, 21, 21, 21, 21, 21, 21,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 22,
      21, 21, 21, 21, 21, 21, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
      12, 13, 14, 12, 13, 14, 22, 21, 21, 21, 21, 21, 14, 12, 13, 14, 12, 13,
      14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 22, 21, 21, 21, 21,
    ],
    /* These are blocks that cant be moved to, or something happens when you try to move on them.
     The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
     */
    gameBlocks = [
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 10, 10, 13, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 11, 10, 10, 10, 10, 10, 11, 11, 11, 11, 19, 19, 10, 10, 11, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 10, 10, 10, 10, 11, 10, 19,
      19, 10, 10, 10, 10, 10, 10, 10, 11, 11, 10, 11, 10, 10, 10, 10, 10, 10,
      11, 10, 10, 10, 10, 19, 19, 10, 11, 10, 14, 11, 11, 11, 10, 10, 10, 10,
      10, 10, 10, 10, 11, 11, 11, 11, 10, 10, 11, 19, 19, 11, 11, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 11, 10, 10, 11, 11, 10, 10, 10, 10, 10, 19,
      19, 10, 10, 10, 10, 10, 10, 10, 11, 10, 14, 11, 11, 11, 11, 10, 10, 11,
      10, 10, 10, 10, 10, 19, 19, 11, 10, 10, 10, 10, 11, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 13, 10, 10, 11, 10, 10, 11, 19, 19, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 11, 11, 12, 11, 10, 11, 11, 10, 11, 10, 11, 11, 19,
      19, 10, 10, 10, 10, 10, 11, 11, 11, 11, 13, 10, 10, 10, 10, 10, 13, 10,
      10, 10, 10, 10, 10, 19, 19, 11, 10, 11, 11, 10, 10, 10, 10, 10, 11, 11,
      10, 10, 10, 10, 13, 10, 10, 10, 10, 10, 10, 19, 19, 11, 10, 10, 10, 11,
      10, 10, 10, 11, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 10, 10, 10, 19,
      19, 10, 10, 14, 11, 11, 11, 11, 10, 10, 10, 11, 11, 11, 11, 10, 11, 10,
      10, 10, 10, 14, 11, 19, 19, 10, 10, 11, 11, 10, 10, 10, 10, 10, 11, 10,
      10, 11, 11, 10, 11, 11, 10, 10, 10, 10, 11, 19, 19, 11, 11, 11, 11, 10,
      13, 11, 11, 11, 11, 11, 10, 17, 11, 10, 10, 10, 10, 11, 11, 10, 14, 19,
      19, 10, 10, 10, 10, 10, 11, 11, 10, 11, 13, 10, 10, 11, 10, 10, 10, 10,
      10, 11, 11, 10, 10, 19, 19, 11, 10, 10, 10, 10, 11, 14, 10, 11, 13, 11,
      10, 10, 10, 10, 10, 11, 11, 13, 11, 10, 14, 19, 19, 10, 10, 10, 10, 10,
      13, 10, 10, 11, 10, 10, 11, 10, 10, 11, 14, 10, 11, 10, 10, 10, 11, 19,
      19, 10, 10, 11, 11, 13, 11, 10, 11, 10, 10, 11, 10, 10, 11, 11, 13, 10,
      11, 11, 11, 10, 11, 19, 19, 10, 10, 10, 10, 11, 11, 10, 10, 10, 11, 10,
      11, 10, 11, 11, 11, 10, 10, 10, 10, 10, 11, 19, 19, 10, 10, 10, 11, 10,
      10, 10, 11, 10, 10, 10, 10, 10, 11, 14, 11, 10, 10, 11, 11, 11, 11, 19,
      19, 10, 11, 13, 10, 10, 10, 11, 11, 10, 11, 11, 11, 11, 11, 11, 11, 10,
      11, 11, 11, 10, 10, 19, 19, 10, 10, 10, 10, 10, 10, 13, 11, 11, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 19, 19, 19, 19, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
    ];

  /*Draw the initial gameplan */
  function drawGamePlan(gameArea, gameBlocks) {
    var i, e, b;
    for (i = 0; i < gameArea.length; i++) {
      e = document.createElement("div");
      e.innerHTML = "";
      e.className =
        "tile t" + gameArea[i] + (gameBlocks[i] ? " b" + gameBlocks[i] : "");
      e.id = "n" + i;
      area.appendChild(e);
    }
  }
  console.log("Drawing gameplan.");
  drawGamePlan(gameArea, gameBlocks);

  /*Move Rockford */
  var move = function (moveLeft, moveTop, which) {
    function moveIt() {
      rockford.style.left =
        area.offsetLeft + posLeft * tileSize + tileSize / 2 + "px";
      rockford.style.top =
        area.offsetTop + posTop * tileSize + tileSize / 2 + "px";
    }
    if (which) {
      rockford.className = "baddie " + which;
    }

    // The first "if" means the baddie can move
    if (
      !(gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] - 10)
    ) {
      posLeft += moveLeft;
      posTop += moveTop;
      moveIt();
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 13
    ) {
      let audioOne = document.querySelector("#audioTwo");
      audioOne.play();
      alert(`You were in danger!`);
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 14
    ) {
      let audioThree = document.querySelector("#audioThree");
      audioThree.play();
      alert(`Woo! You've found gold!`);
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 12
    ) {
      document.querySelector(".b17").style.backgroundImage =
        "url('img/tiles/passage/open_door.png')";
      document.querySelector(".b17").style.backgroundColor = "none";
      let audioThree = document.querySelector("#audioThree");
      audioThree.play();
      alert(`Well done! The closed door will be open!`);
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 18
    ) {
      let audioThree = document.querySelector("#audioThree");
      audioThree.play();
      alert(`Congratualtion! You've reached the gate!`);
    } else {
      let audioOne = document.querySelector("#audioOne");
      audioOne.play();
      console.log("Blocker detected!");
    }
  };

  console.log("Moving Mickey Mos (Rockford) to initial spot.");
  move(1, 1, "down");
  /* Keep track on keys pressed and move Rockford accordingly. */
  document.onkeydown = function (event) {
    var key;
    key = event.keyCode || event.which;
    switch (key) {
      case 37:
        move(-1, 0, "left");
        break;
      case 39:
        move(1, 0, "right");
        break;
      case 38:
        move(0, -1, "up");
        break;
      case 40:
        move(0, 1, "down");
        break;
      default:
        move(0, 0, "down");
        break;
    }
  };
});
