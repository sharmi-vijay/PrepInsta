function calculatePetAge() {
    let Age = parseInt(document.getElementById('age-input').value)
    let conversion = parseFloat(document.getElementById('conversion-input').value)
    let breed = document.getElementById('breed-input').value
    
    let catAge
    let dogAge

    if (breed == "cat") {
        if (Age === 1)
            catAge = 15;
        else if (Age === 2)
            catAge = 15 + 9
        else    
            catAge = 15 + 9 + (Age - 2) * conversion
    
        var message = "Your " + breed + " is " + catAge + " years old in cat years!"
        var container = document.getElementById('container')
        container.innerHTML = ""
        var element = document.createElement('p')
        element.textContent = message
        container.appendChild(element)
    }

    if (breed == "dog") {
        if (Age === 1)
            dogAge = 15
        else if (Age === 2)
            dogAge = 15 + 9
        else
            dogAge = 15 + 9 + (Age - 2) * conversion
    
        var message = "Your " + breed + " is " + dogAge + " years old in dog years!"
        var container = document.getElementById('container')
        container.innerHTML = ""
        var element = document.createElement('p')
        element.textContent = message
        container.appendChild(element)
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculatePetAge()
    }
}

document.getElementById('age-input').addEventListener('keypress', handleKeyPress)
document.getElementById('conversion-input').addEventListener('keypress', handleKeyPress)
document.getElementById('breed-input').addEventListener('keypress', handleKeyPress)

// Add event listener to the button
document.getElementById('calculate').addEventListener('click', calculatePetAge)



