const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const widthScreen = window.screen.availWidth

    let count = 0
    let idInterval

    const animation = () => {
        if (widthScreen >= 768) {
            count += 0.05
            idInterval = requestAnimationFrame(animation)

            if (count <= 1) {
                modal.style.opacity = count
            } else {
                cancelAnimationFrame(idInterval)
            }
        } else {
            modal.style.opacity = '1'
        }
        
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            animation()
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