document.getElementById("option1").addEventListener("click", function() {
  document.getElementById("story").innerText = "You take the left path and encounter a wild wolf!";
  document.getElementById("option1").style.display = "none"; // Hide button after selection
  document.getElementById("option2").style.display = "none"; // Hide button after selection
  let newOption = document.createElement("button");
  newOption.innerText = "Fight the wolf";
  newOption.addEventListener("click", function() {
    document.getElementById("result").innerText = "You bravely fight the wolf and win! You continue on your journey.";
  });
  document.getElementById("game-container").appendChild(newOption);
});

document.getElementById("option2").addEventListener("click", function() {
  document.getElementById("story").innerText = "You take the right path and find a hidden treasure!";
  document.getElementById("option1").style.display = "none"; // Hide button after selection
  document.getElementById("option2").style.display = "none"; // Hide button after selection
  let newOption = document.createElement("button");
  newOption.innerText = "Open the treasure chest";
  newOption.addEventListener("click", function() {
    document.getElementById("result").innerText = "You open the chest and find gold! You're rich!";
  });
  document.getElementById("game-container").appendChild(newOption);
});
