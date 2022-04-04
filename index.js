const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  function resetGame()
  {
    console.log("reset game");
    if (document.getElementById("outcomeText")) {
      const outcome = document.body.lastChild;
      console.log("reset game");
      document.body.removeChild(outcomeText);
    }
  }

  function playGame()
  {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    console.log("play game");
    updateDOM(playerOneMove, playerTwoMove, outcome);
  }

  function updateDOM (moveOne, moveTwo, outcome)
  {
    // TODO Implement this method to update the DOM
    // There are some images you can use in the images directory
    document.getElementById("player-one-move__img").src="images/" + moveOne + ".png";
    document.getElementById("player-two-move__img").src="images/" + moveTwo + ".png";
    console.log(outcome);
    outcomeText=document.createElement("outcomeText");
    outcomeText.innerHTML="<div  id='outcomeText'>Outcome: " + outcome +"</div>";
    document.body.appendChild(outcomeText);
  }

  const playButton = document.getElementById("play-btn");


  