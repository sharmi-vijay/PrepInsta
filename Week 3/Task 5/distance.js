function metersToFeet(dis) {
    let feet =  dis * 3.281 
    let res = `${dis} meters is equal to ${feet.toFixed(2)} feet`
    let container = document.getElementById('container')
    container.innerHTML = ''
    let ele = document.createElement('p')
    ele.textContent = res
    container.appendChild(ele)
}

function feetToMeters(feet) {
    let meters = feet * 0.3048
    let res = `${feet} feet is equal to ${meters.toFixed(2)} meters`
    let container = document.getElementById('container')
    var ele = document.createElement('p')
    ele.textContent = res
    container.appendChild(ele)
}

function calculateRect() {
    let dis = parseFloat(document.getElementById('dis').value)
    metersToFeet(dis)
    feetToMeters(dis)
}

document.getElementById('calculate').addEventListener('click', calculateRect)
