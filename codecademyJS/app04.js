const getUserChoice =  (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    console.log("error");

  }
  
};

 
var getComputerChoice = () =>{
var randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2: 
  return 'scissors';
  }
}
console.log(getUserChoice('scissors'));
console.log(getComputerChoice());

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
};
