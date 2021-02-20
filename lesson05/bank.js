let myBalance = 0;

function startBanking(myBlance) {
let finished = false;
  while (!finished) {
    let input = prompt('Select an option, Q - quit, W - Withdraw, D - Deposit, B - Balance').toLowerCase();
    switch (input) {
      case 'q':{
        finished = true;
        break;
      }
      case 'w':{
        let withdraw = prompt('Enter ammount to withdraw');
        let withdrawNum = parseInt(withdraw);
        myBalance = myBalance - withdrawNum;
        break;
      }
      case 'd':{
        let deposit = prompt('Enter ammount to deposit');
        let depositNum = parseInt(deposit);
        myBalance = myBalance + depositNum;
        break;
      }
      case 'b':{
        alert('Your Balance: $' + myBalance);
        break;
      }
      default: {
        break;
      }
    }
  }
}
