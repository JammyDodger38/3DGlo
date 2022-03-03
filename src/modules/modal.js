import {animate} from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const widthScreen = window.screen.availWidth

    let count = 0
    let idInterval

    

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            animate({
                duration: 500,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress
                }
            });
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            count = 0
            modal.style.opacity = '0'
        }
    })
}

export default modal 