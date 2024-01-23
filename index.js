let twentySecondsBtnEl = document.getElementById('twentySecondsBtn');
let thirtySecondsBtnEl = document.getElementById('thirtySecondsBtn');
let fortySecondsBtnEl = document.getElementById('fortySecondsBtn');
let oneMinuteSecondsBtnEl = document.getElementById('oneMinuteBtn');
let timerTextEl = document.getElementById('timerText');

twentySecondsBtnEl.addEventListener('click', () => {
    timerTextEl.textContent = 20 + ' seconds left';
    let timerStart = 19;
    let uniqueNo20 = setInterval(function() {
        timerTextEl.textContent = timerStart + ' seconds left';
        if (timerStart === 0) {
            clearInterval(uniqueNo20);
            timerTextEl.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);
    thirtySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo20);
    });
    fortySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo20);
    });
    oneMinuteSecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo20);
    });
});

thirtySecondsBtnEl.addEventListener('click', () => {
    timerTextEl.textContent = 30 + ' seconds left';
    let timerStart = 29;
    let uniqueNo30 = setInterval(function() {
        timerTextEl.textContent = timerStart + ' seconds left';
        if (timerStart === 0) {
            clearInterval(uniqueNo30);
            timerTextEl.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);
    twentySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo30);
    });
    fortySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo30);
    });
    oneMinuteSecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo30);
    });
});

fortySecondsBtnEl.addEventListener('click', () => {
    timerTextEl.textContent = 40 + ' seconds left';
    let timerStart = 39;
    let uniqueNo40 = setInterval(function() {
        timerTextEl.textContent = timerStart + ' seconds left';
        if (timerStart === 0) {
            clearInterval(uniqueNo40);
            timerTextEl.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);
    twentySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo40);
    });
    thirtySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo40);
    });
    oneMinuteSecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo40);
    });
});

oneMinuteSecondsBtnEl.addEventListener('click', () => {
    timerTextEl.textContent = 60 + ' seconds left';
    let timerStart = 59;
    let uniqueNo60 = setInterval(function() {
        timerTextEl.textContent = timerStart + ' seconds left';
        if (timerStart === 0) {
            clearInterval(uniqueNo60);
            timerTextEl.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);
    twentySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo60);
    });
    thirtySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo60);
    });
    fortySecondsBtnEl.addEventListener('click', function() {
        clearInterval(uniqueNo60);
    });
});
