const daysDef = document.getElementById('days');
const hoursDef = document.getElementById('hours');
const minsDef = document.getElementById('mins');
const secondsDef = document.getElementById('seconds');

const newYears = '1 January 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysDef.innerHTML = days;
    hoursDef.innerHTML = hours;
    minsDef.innerHTML = mins;
    secondsDef.innerHTML = seconds;

}


// first call
countdown();

setInterval(countdown, 100);