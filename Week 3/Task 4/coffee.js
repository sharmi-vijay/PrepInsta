function coffeeSupply(age, cupsPerDay, maxAge = 90) {
    let yearsLeft = maxAge - age
    let totalCups = Math.round(yearsLeft * cupsPerDay * 365.25) //  leap years

    let resultMessage = `You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`
    let container = document.getElementById('container')
    // container.innerHTML = ''
    let messageElement = document.createElement('p')
    messageElement.textContent = resultMessage
    container.appendChild(messageElement)
}

coffeeSupply(25, 3.5);
coffeeSupply(30, 2.75);
coffeeSupply(40, 4);

