let choice1Taken = false;
let choice2Taken = false;

document.getElementById("option1").addEventListener("click", function() {
  if (!choice1Taken) {
    choice1Taken = true;
    document.getElementById("story").innerText = "You take the left path and encounter a wild wolf!";
    document.getElementById("option1").style.display = "none"; 
    document.getElementById("option2").style.display = "none";
    let newOption1 = document.createElement("button");
    newOption1.innerText = "Fight the wolf";
    newOption1.addEventListener("click", function() {
      document.getElementById("result").innerText = "You bravely fight the wolf and win!";
      nextChoice("wolf");
    });
    document.getElementById("game-container").appendChild(newOption1);
  }
});

document.getElementById("option2").addEventListener("click", function() {
  if (!choice2Taken) {
    choice2Taken = true;
    document.getElementById("story").innerText = "You take the right path and find a hidden treasure!";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    let newOption2 = document.createElement("button");
    newOption2.innerText = "Open the treasure chest";
    newOption2.addEventListener("click", function() {
      document.getElementById("result").innerText = "You open the chest and find gold!";
      nextChoice("treasure");
    });
    document.getElementById("game-container").appendChild(newOption2);
  }
});

function nextChoice(path) {
  let newOption3 = document.createElement("button");
  let newOption4 = document.createElement("button");

  if (path === "wolf") {
    document.getElementById("story").innerText = "You continue your journey and come across a village.";
    newOption3.innerText = "Help a villager in need";
    newOption4.innerText = "Steal from the villager's house";
  } else if (path === "treasure") {
    document.getElementById("story").innerText = "You walk deeper into the cave and find another fork in the road.";
    newOption3.innerText = "Take the left fork";
    newOption4.innerText = "Take the right fork";
  }

  newOption3.addEventListener("click", function() {
    document.getElementById("result").innerText = `You chose to ${newOption3.innerText.toLowerCase()} and face the consequences.`;
    finishGame();
  });
  newOption4.addEventListener("click", function() {
    document.getElementById("result").innerText = `You chose to ${newOption4.innerText.toLowerCase()} and face the consequences.`;
    finishGame();
  });

  document.getElementById("game-container").appendChild(newOption3);
  document.getElementById("game-container").appendChild(newOption4);
}

function finishGame() {
  let finalMessage = document.createElement("p");
  finalMessage.innerText = "Congratulations! You've completed your adventure.";
  document.getElementById("game-container").appendChild(finalMessage);
}

