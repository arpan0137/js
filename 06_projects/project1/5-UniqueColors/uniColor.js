//generate a random color

const randColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
let startStopBtn = document.querySelector('#startStopBtn')

startStopBtn.addEventListener('click',
    () => {
        if (startStopBtn.innerHTML === 'Start') {
            startStopBtn.innerHTML = "Stop"
            if (!intervalId) {
                intervalId = setInterval(() => (
                    document.body.style.backgroundColor = randColor()
                ), 2000)
            }
        }
        else if (startStopBtn.innerHTML === 'Stop') {
            startStopBtn.innerHTML = "Start"
            clearInterval(intervalId)
            intervalId = null
        }
    }
)
