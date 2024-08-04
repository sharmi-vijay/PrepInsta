function tellFortune(childCount, partnerName, place, futureJob) {
    let res = "You will be a " + futureJob + " in " + place + ", and married to " + partnerName + " with " + childCount + " kids."
    var fortuneContainer = document.getElementById('fortune-container')
    var element = document.createElement('p')
    element.textContent = res
    fortuneContainer.appendChild(element)
}

tellFortune(2, "Murali", "Manali", "Full Stack developer")
tellFortune(3, "Prasath", "Chennai", "Software developer")
tellFortune(1, "Ajay", "Bangalore", "Product Manager")