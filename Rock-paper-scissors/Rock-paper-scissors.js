const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  	return userInput;
  } else {
    console.log('Wrong input, please try again');
  }
};
const getComputerChoice = () => { 
 let randomNumber= Math.floor(Math.random()*3)
	switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice)=>{
  if (userChoice === computerChoice){
    return 'Its a fuckin tie';
  }//if end
  
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won!'
}//comp choice scissors
    else {
      return 'You won!';
    }//else end
  }//user choice rock end
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }//else end
  }//if end
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer won!';
    }
    else {
      return 'You won!';
    }//else end
  }//if end
  
}

const playGame = () => {
const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
};

playGame();