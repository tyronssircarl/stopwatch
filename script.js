let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;
let isPaused = false;
let lapCount = 0;
let lastLapTime = 0;

const timeDisplay = document.getElementById('stopWatchTime');
const startButton = document.getElementById('stopWatchStart');
const pauseButton = document.getElementById('stopWatchPause');
const lapButton = document.getElementById('stopWatchLap');
const resetButton = document.getElementById('stopWatchReset');
const lapsList = document.getElementById('stopWatchLapsList');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');
    const millisecondsStr = milliseconds.toString().padStart(2, '0');
    
    return hoursStr + ':' + minutesStr + ':' + secondsStr + ':' + millisecondsStr;
}

function updateDisplay() {
    const currentTime = Date.now();
    const totalElapsed = elapsedTime + (isRunning ? currentTime - startTime : 0);
    timeDisplay.textContent = formatTime(totalElapsed);
}

// ito yung function na nagstart o nagreresume ng timer pag pinindot mo yung start button
function startTimer() {
    if (isPaused) {
        startTime = Date.now();
        isPaused = false;
    } else {
        startTime = Date.now();
        elapsedTime = 0;
        lastLapTime = 0;
        lapCount = 0;
        lapsList.innerHTML = '';
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'stopWatch-laps-empty';
        emptyMessage.textContent = 'No laps recorded';
        lapsList.appendChild(emptyMessage);
    }
    
    timerInterval = setInterval(updateDisplay, 10);
    isRunning = true;
    lapButton.disabled = false;
    lapButton.style.opacity = '1';
    lapButton.style.cursor = 'pointer';
    pauseButton.disabled = false;
    pauseButton.style.opacity = '1';
    pauseButton.style.cursor = 'pointer';
    updateDisplay();
}

// function na mag popause ng timer pag pinindot mo yung pause button
function pauseTimer() {
    if (isRunning) {
        const currentTime = Date.now();
        elapsedTime += currentTime - startTime;
        clearInterval(timerInterval);
        isRunning = false;
        isPaused = true;
        lapButton.disabled = true;
        lapButton.style.opacity = '0.5';
        lapButton.style.cursor = 'not-allowed';
        pauseButton.disabled = true;
        pauseButton.style.opacity = '0.5';
        pauseButton.style.cursor = 'not-allowed';
    }
    updateDisplay();
}

// is is yung paglalagay ng lap time sa list pag pinindot mo yung lap button
function addLap() {
    if (!isRunning) {
        return;
    }
    
    const emptyMessage = lapsList.querySelector('.stopWatch-laps-empty');
    if (emptyMessage) {
        emptyMessage.remove();
    }
    
    const currentTime = Date.now();
    const totalElapsed = elapsedTime + (isRunning ? currentTime - startTime : 0);
    const lapTime = totalElapsed - lastLapTime;
    
    lapCount++;
    lastLapTime = totalElapsed;
    
    const lapItem = document.createElement('div');
    lapItem.className = 'stopWatch-lap-item';
    
    const lapNumber = document.createElement('span');
    lapNumber.className = 'stopWatch-lap-number';
    lapNumber.textContent = 'Lap ' + lapCount;
    
    const lapTimeDisplay = document.createElement('span');
    lapTimeDisplay.className = 'stopWatch-lap-time';
    lapTimeDisplay.textContent = formatTime(lapTime);
    
    lapItem.appendChild(lapNumber);
    lapItem.appendChild(lapTimeDisplay);
    
    lapsList.insertBefore(lapItem, lapsList.firstChild);
}

// ito nagrereset ng lahat ung timer at laps pag pinindot mo yung reset button
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = false;
    elapsedTime = 0;
    startTime = 0;
    lastLapTime = 0;
    lapCount = 0;
    timeDisplay.textContent = '00:00:00:00';
    lapButton.disabled = true;
    lapButton.style.opacity = '0.5';
    lapButton.style.cursor = 'not-allowed';
    pauseButton.disabled = true;
    pauseButton.style.opacity = '0.5';
    pauseButton.style.cursor = 'not-allowed';
    
    lapsList.innerHTML = '';
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'stopWatch-laps-empty';
    emptyMessage.textContent = 'No laps recorded';
    lapsList.appendChild(emptyMessage);
}

function addLoadingState(button) {
    button.classList.add('loading');
}

function removeLoadingState(button) {
    button.classList.remove('loading');
}


function handleButtonClick(event) {
    const button = event.currentTarget;
    const action = button.getAttribute('data-action');
    
    addLoadingState(button);
    
    setTimeout(function() {
        if (action === 'start') {
            startTimer();
        } else if (action === 'pause') {
            pauseTimer();
        } else if (action === 'lap') {
            addLap();
        } else if (action === 'reset') {
            resetTimer();
        }
        
        removeLoadingState(button);
    }, 150);
}

startButton.addEventListener('click', handleButtonClick);
pauseButton.addEventListener('click', handleButtonClick);
lapButton.addEventListener('click', handleButtonClick);
resetButton.addEventListener('click', handleButtonClick);

lapButton.disabled = true;
lapButton.style.opacity = '0.5';
lapButton.style.cursor = 'not-allowed';
pauseButton.disabled = true;
pauseButton.style.opacity = '0.5';
pauseButton.style.cursor = 'not-allowed';

const emptyMessage = document.createElement('div');
emptyMessage.className = 'stopWatch-laps-empty';
emptyMessage.textContent = 'No laps recorded';
lapsList.appendChild(emptyMessage);

