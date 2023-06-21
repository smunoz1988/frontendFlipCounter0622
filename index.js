const decimal = document.getElementById('decimal');
const unit = document.getElementById('unit');
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
    decimal.innerHTML = countDecimal;
};


counter();

setInterval(counter, 1000);