// random pin
function getPin() {
    const pin = Math.round(Math.random() * 11111);
    if ((pin + '').length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
   
}

// generate pin
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}



// type input firld
document.getElementById('keyPad').addEventListener('click', function (funk) {
    const number = funk.target.innerText;
    const givenInput = document.getElementById('typedNumber');
    if (isNaN(number)) {
        if (number == 'C') {
            givenInput.value = '';
        }
    } else {
        const previousInput = givenInput.value;
        const newInput = previousInput + number;
        givenInput.value = newInput;
    }
   
})

// verity section

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typedNumber').value;
    
    const success = document.getElementById('success');

    const fail = document.getElementById('fail');

    if (pin == typedNumber) {
        
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        
        fail.style.display = 'block';
        success.style.display = 'none';
    }
}