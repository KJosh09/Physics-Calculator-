function calcKineticEnergy() {
    console.log("KE")
    var velocity = document.getElementById("velocity").value
    var mass = document.getElementById("mass").value
    console.log(velocity)
    console.log(mass)
    console.log(velocity*velocity)
    var step2 = (velocity*velocity)
    console.log(step2*mass)
    var step3 = step2*mass
    var answer = step3/2
    document.getElementById("answerKineticEnergy").innerHTML = answer
}

function calcPotentialEnergy() {
    console.log("PE")
    var mass = document.getElementById("mass").value
    var distance = document.getElementById("distance").value
    var gravity = document.getElementById("gravity").value
    console.log(mass)
    console.log(gravity)
    console.log(distance)
    console.log(mass*distance*gravity)
    var answerP = mass*distance*gravity
    document.getElementById("answerPotentialEnergy").innerHTML = answerP
}

function calcVelocity() {
    console.log("V")
    var KE = document.getElementById("KE").value
    var mass = document.getElementById("Mass").value
    console.log(mass)
    console.log(KE)
    console.log(KE*2/mass)
    var step2 = KE*2/mass
    console.log(Math.sqrt(step2))
    var answerV = Math.sqrt(step2)
    document.getElementById("answerVelocity").innerHTML = answerV
}