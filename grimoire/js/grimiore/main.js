// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const makeSpell = (name, isEvil, energyRequired) => {
    const spell = {
        name: name,
        isEvil: isEvil,
        energyRequired: energyRequired
    }
    return spell
}

const spellbook = []

spellbook.push(makeSpell("Turn enemy into a newt",true,5.1))
spellbook.push(makeSpell("Conjure some gold for a local charity",false, 2.99))
spellbook.push(makeSpell("Give a deaf person the ability to heal",false,12.2))
spellbook.push(makeSpell("Make yourself emperor of the universe",true,100.0))
spellbook.push(makeSpell("Convince your relatives your political views are correct",false,2921.5))

const goodSpells = {
    title : "Good Book",
    spells : spellbook.filter(spell => spell.isEvil ===false)
}
const evilSpells = {
    title : "Evil Book",
    spells: spellbook.filter(spell => spell.isEvil === true)
}

const displaySpellbook = (spellbook) => {
    console.log(spellbook.title)
    spellbook.spells.map(spell => {
    console.log(`  ${spell.name}`)
    }
)}

displaySpellbook(goodSpells)
console.log("\n")
displaySpellbook(evilSpells)
