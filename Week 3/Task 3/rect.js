function calcPerimeter(len, wid) {
    let perimeter = 2 * (len + wid)
    let res = "The perimeter is " + perimeter
    let container = document.getElementById('container')
    container.innerHTML = ''
    let ele = document.createElement('p')
    ele.textContent = res
    container.appendChild(ele)
}

function calcArea(len, wid) {
    let area = len * wid
    let res = "The area is " + area
    let container = document.getElementById('container')
    var ele = document.createElement('p')
    ele.textContent = res
    container.appendChild(ele)
}

function calculateRect() {
    let len = parseFloat(document.getElementById('len').value)
    let wid = parseFloat(document.getElementById('wid').value)
    calcPerimeter(len, wid)
    calcArea(len, wid)
}

document.getElementById('calculate').addEventListener('click', calculateRect)
