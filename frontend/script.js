const firstPerson = {
    name: "Peter",
    sex: "male"
}

const secondPerson = {
    name: "Sarah",
    sex: "female"
}

function detectSex(person) {

    if (person.sex === "female") {
        return "this person is a female"
    } else if(person.sex === "male") {
        return "this person is a male"
    } else {
        return "the person's sex is not female nor male"
    }
}

console.log(detectSex(firstPerson))

console.log(detectSex(secondPerson))

console.log(detectSex({
    name: "Penelope",
    sex: "female2"
}))