const timer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours')
    const timerMinutes = document.querySelector('#timer-minutes')
    const timerSeconds = document.querySelector('#timer-seconds')

    const getTimeRemaining = () => {
        let hours
        let minutes
        let seconds
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000

        if( timeRemaining <= 0) {
            hours = '00'
            minutes = '00'
            seconds = '00'
        } else {
            hours = Math.floor(timeRemaining / 60 / 60)
            minutes = Math.floor((timeRemaining / 60) % 60)
            seconds = Math.floor(timeRemaining % 60)

            if (hours .toString().length == 1) {hours = '0' + hours}
            if (minutes .toString().length == 1) {minutes = '0' + minutes}
            if (seconds .toString().length == 1) {seconds = '0' + seconds}
        }
        
        return {timeRemaining, hours, minutes, seconds,}
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if(getTime.timeRemaining <= 0) {
            clearInterval(interval)
        }
    }
    // updateClock()
    let interval = setInterval(updateClock, 1000)
}

export default timer