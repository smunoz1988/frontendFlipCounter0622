const decimal = document.getElementById('decimal');
const unit = document.getElementById('unit');
const backUnit = document.getElementById('backUnit');
const backDecimal = document.getElementById('backDecimal');
let countUnit = -1;
let countDecimal = 0;

const counter = () => {
    if (countUnit === 9) {
    countDecimal++;
    }
    countUnit++;
    if (countUnit === 10) {
        countUnit = 0;
    }
    if (countDecimal === 6) {
        countDecimal = 0;
    }
    unit.innerHTML = countUnit;
    backUnit.innerHTML = countUnit;
    decimal.innerHTML = countDecimal;
    backDecimal.innerHTML = countDecimal;
};

counter();

setInterval(counter, 1000);