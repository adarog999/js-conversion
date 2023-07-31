const from = document.getElementById('from')
const inputVal = document.getElementById('inputVal')
const val = document.getElementById('val')
function yard() {
    let fromVal = from.value
    if (fromVal === 'yard') {
        val.textContent = inputVal.value
    }
    else if(fromVal === 'meter') {
        val.textContent = parseFloat(inputVal.value) * 1.094
    }
    else if (fromVal === 'kilometre') {
        val.textContent = parseFloat(inputVal.value) * 1094
    }
    else {
        val.textContent = parseFloat(inputVal.value) * 1760
    }
}

function meter() {
    let fromVal = from.value
    if (fromVal === 'meter') {
        val.textContent = parseFloat(inputVal.value) 
    }
    else if (fromVal === 'yard') {
        val.textContent = parseFloat(inputVal.value) / 1.094
    }
    else if (fromVal === 'kilometre') {
        val.textContent = parseFloat(inputVal.value) * 1000

    }
    else {
        val.textContent = parseFloat(inputVal.value) * 1609
    }
}

function kilometre() {
    let fromVal = from.value
    if (fromVal === 'yard'){

        val.textContent = parseFloat(inputVal.value) / 1094
    }
    else if (fromVal === 'meter') {
        val.textContent = parseFloat(inputVal.value) / 1000 
    }
    else if (fromVal === 'kilometre') {
        val.textContent = parseFloat(inputVal.value) 
    }
    else {
        val.textContent = parseFloat(inputVal.value) * 1.609
    }
}
function mile() {
    let fromVal = from.value
    if (fromVal === 'yard') {
        val.textContent = parseFloat(inputVal.value) / 1760
    }
    else if (fromVal === 'meter') {
        val.textContent = parseFloat(inputVal.value) / 1609
    }
    else if (fromVal === 'kilometre') {
        val.textContent = parseFloat(inputVal.value)  / 1.609
    } else {
        val.textContent = parseFloat(inputVal.value) 
    }
}
