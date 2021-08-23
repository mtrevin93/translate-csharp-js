// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rollDie = () => getRandomInt(1, 6)

for (i = 0; i< 10; i++){
    const die1 = rollDie()
    const die2 = rollDie()

    let message = `${die1.toString()} + ${die2.toString()} == ${die1+die2}`
    if (die1 === die2){
        message += " DOUBLES!";
    }
    console.log(message)
}

