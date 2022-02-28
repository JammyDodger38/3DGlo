const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const body = document.querySelector('body')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    body.addEventListener('click', (e) => {
        
        if(menu.classList.contains('active-menu')) {
            if (e.target.closest('.active-menu')) {
                if(e.target.classList.contains('close-btn')) {
                    handleMenu()
                } else if (e.target.matches('ul>li>a')) {
                    handleMenu()
                }
            } else {
                handleMenu()
            }
        } else {
            if (e.target.closest('.menu')) {
                handleMenu()
            }
        }
    })
}
export default menu