function rollDice(){
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == 1){
        status.innerHTML += " YOU LOSE! give up turn!!";
    }
}
