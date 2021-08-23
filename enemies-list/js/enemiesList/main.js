// Put your code here

console.log("My Enemies List!");
console.log("----------------");

const makeEnemy = (firstName, lastName, offenses, isReallyHated) => {
    const enemy = {
                firstName: firstName,
                lastName: lastName,
                offenses: offenses,
                isReallyHated: isReallyHated
                }
    return enemy
}

const enemies = []

enemies.push(makeEnemy("Joshua","Flowers",["Being a jerk to me in elementary school","Not being nice to me in elementary school"], true))
enemies.push(makeEnemy("Darth","Vader",["Cut off Luke's hand","Murdered all those kids","Unkind management practices"],false))
enemies.push(makeEnemy("Betty","Rudelady",["Phone calls in the theater","Phone calls on the bus","Phone calls in line at the grovery store","Poor conversationalist"],true))
enemies.push(makeEnemy("Leon","Peck",["Keeps giving me a hotplace"],false))

enemies.map(enemy => {
    {enemy.isReallyHated ? console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
    : console.log( `${enemy.firstName} ${enemy.lastName}`);}
})
