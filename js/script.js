let status = 'Not started';
let interval;
let changeValues = [100, 60, 60, 24, 7]
let timeValues = [0, 0]; // 0 = MS, 1 = Sec, 1 = Min, 2 = Hour, 3 = Day, 4 Week

window.addEventListener('load', 
    (event) => {
        document.getElementById('status').innerHTML = status;
        document.getElementById('time').innerHTML = "";

        document.getElementById('button-start').addEventListener('click', startClickHandler)
        document.getElementById('button-stop').addEventListener('click', stopClickHandler)
        document.getElementById('button-reset').addEventListener('click', resetClickHandler)

        console.log('Stopwatch, Created by: Huzina Patrik (https://github.com/HuzinaPatrik)')
    }
);

function startClickHandler() {
    status = 'Started';

    document.getElementById('status').innerHTML = status;
    clearInterval(interval);
    interval = setInterval(timerHandler, 10);
}

function stopClickHandler() {
    status = 'Stopped';
    
    clearInterval(interval);
    document.getElementById('status').innerHTML = status;
}

function resetClickHandler() {
    status = 'Resetted';
    
    clearInterval(interval);
    timeValues = [0, 0]
    document.getElementById('time').innerHTML = "";
    document.getElementById('status').innerHTML = status;
}

function timerHandler() {
    timeValues[0]++;

    for (i=0;i<timeValues.length;i++) {
        if (timeValues[i] >= changeValues[i]) {
            timeValues[i] = 0;

            if (!timeValues[i+1]) {
                timeValues[i+1] = 0;
            }

            timeValues[i+1]++;
        }
    }

    let minutes = timeValues[1];
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = timeValues[0];
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let string = minutes + ":" + seconds;

    if (timeValues.length > 1) {
        for (i=2;i<timeValues.length;i++) {
            let val = timeValues[i];
            if (val < 10) {
                val = "0" + val;
            }

            string = val + ":" + string
        }
    }

    document.getElementById('time').innerHTML = string;
}