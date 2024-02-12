// Rock Paper Scissors

//variables
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let score = 0;
let scorecomp = 0;

//event
document.getElementById("rock").addEventListener("click", selectRock);
document.getElementById("paper").addEventListener("click", selectpaper);
document.getElementById("scissors").addEventListener("click", selectscissors);
//functions
function selectRock() {
  img1.src = "images/rock.png";

  let random = Math.random();
  if (random < 0.3333) {
    img2.src = "images/rock.png";
    document.getElementById("result").innerHTML = "tie";
  } else if (random < 0.6666) {
    img2.src = "images/paper.png";
    scorecomp++;
    document.getElementById("scorecomp").innerHTML = scorecomp;
    document.getElementById("result").innerHTML = "loss";
  } else if (random > 0.6666) {
    img2.src = "images/scissors.png";
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("result").innerHTML = "win";
  }
}

function selectpaper() {
  img1.src = "images/paper.png";

  let random = Math.random();
  if (random < 0.3333) {
    img2.src = "images/rock.png";
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("result").innerHTML = "win";
  } else if (random < 0.6666) {
    img2.src = "images/paper.png";
    document.getElementById("result").innerHTML = "tie";
  } else if (random > 0.6666) {
    img2.src = "images/scissors.png";
    scorecomp++;
    document.getElementById("scorecomp").innerHTML = scorecomp;
    document.getElementById("result").innerHTML = "loss";
  }
}

function selectscissors() {
  img1.src = "images/scissors.png";

  let random = Math.random();
  if (random < 0.3333) {
    img2.src = "images/rock.png";
    scorecomp++;
    document.getElementById("scorecomp").innerHTML = scorecomp;
    document.getElementById("result").innerHTML = "loss";
  } else if (random < 0.6666) {
    img2.src = "images/paper.png";
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("result").innerHTML = "win";
  } else if (random > 0.6666) {
    img2.src = "images/scissors.png";
    document.getElementById("result").innerHTML = "tie";
  }
}
