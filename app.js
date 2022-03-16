alert("the objective of the game is to try to get closest to 20 without going over")
alert("the computer will role first")

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")


var score = 0
do{
    var comp = 0
    var human = 0
    var one = 0
    var two = 0
    do{
        var ran = Math. floor(Math.random() * 10) +1
        console.log(ran)
        if (ran == 1){
            ran = 11 
            comp = comp + ran 
            one++
        }else if (ran != 1){
            comp = comp + ran
        }
        if(comp < 16){
            alert(`the computers score is ${comp} it will role again`)
        }
        if((comp > 20) && (one > 0)){
            alert("the computer went over 20 and is going to change from 11 to 1")
            comp = comp - 10;
            one--
        }
    }while(comp < 16) 
    alert(`the computers score is ${comp} it will stop`)
    if(comp > 20){
        alert(`the computers score is over 20. you win!!!`);
        score++
    }else if(comp == 20){
        alert(`the computers score is 20. you lose`)
    }else{
            alert("now it is your turn")
        do{
            var ran = Math. floor(Math.random() * 10) +1
            if (ran == 1){
                ran = 11 
                human = human + ran 
                two++
            }else if (ran != 1){
                human = human + ran
            }
            if((human > 20) && (one > 0)){
                alert("you went over 20 and is going to change from 11 to 1")
                human = human - 10;
                two--
            }
            if( human < 20){
                var question = prompt(`your score is ${human} do you want to continue? (y) for yes (n) for no`);
            }else if (human > 20){
                alert(`your score is ${human} you lose`)
                break
            }
            
        }while(question == "y")
        if((comp < human) && (human <= 20)){
            alert(`the comptuer had ${comp} and you had ${human}. you win!!!`)
            score++
        }else if((comp > human) && (human < 20)){
            alert(`the computer had ${comp} and you had ${human}. you lose`)
        }else if(comp == human){
            alert(`the computer had ${comp} and you had ${human}. you tied`)
        }
    }
    var again = prompt("do you want to play again.(y) for yes (n) for no")
}while(again == "y")

alert(`your total wins are ${score}, hope you had fun!`)



// when the user/computer gets 1, 1 is going to be 11 by default. if user/computer are using 11, but it goes over 20, the 11 changes to 1
