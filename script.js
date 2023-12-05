window.onload = function() {

    const ms = document.querySelector('.milliseconds');
    const sec = document.querySelector('.seconds');
    const min = document.querySelector('.minutes');
    const hr = document.querySelector('.hour');

    const btnStart = document.querySelector('.start');
    const btnStop = document.querySelector('.stop');
    const btnReset = document.querySelector('.reset');

    let interval;
    let seconds = 0;
    let milliseconds = 0;
    let minutes = 0;
    let hours = 0;

    ms.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hr.innerHTML = '00';

    btnStart.addEventListener('click', ()=> {
        clearInterval(interval);
        interval = setInterval(() => {
            start();
        }, 10);
    });

    btnStop.addEventListener('click', ()=>{
        clearInterval(interval);
    });

    btnReset.addEventListener('click', () => {
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        ms.innerHTML = milliseconds + '0';
        sec.innerHTML = seconds + '0';
        min.innerHTML = minutes + '0';
        hr.innerHTML = hours + '0';
    });

    function start() {
        milliseconds++;

        if(milliseconds < 9){
            ms.innerHTML = '0' + milliseconds;
        }

        if(milliseconds > 9){
            ms.innerHTML = milliseconds;
        }

        if(milliseconds > 99) {
            seconds++;
            sec.innerHTML = '0' + seconds;
            milliseconds = 0;
            ms.innerHTML = '0' + 0;
        }

        if(seconds > 9){
            sec.innerHTML = seconds;
        }

        if(seconds > 59) {
            minutes++;
            min.innerHTML = '0' + minutes;
            seconds = 0;
            sec.innerHTML = '0' + seconds;
        }

        if (minutes > 9){
            min.innerHTML = minutes;
        } 

        if (minutes > 58) {
            hours++;
            hr.innerHTML = "0" + hours;
            minutes = 0;
            min .innerHTML = "0" + minutes;
        }

        if (hours > 9) {
            hr.innerHTML = hours;
        }
    }
}