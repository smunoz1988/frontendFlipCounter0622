const unit = document.getElementsByClassName('top');
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
};

counter();

setInterval(counter, 1000);