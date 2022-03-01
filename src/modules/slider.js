const slider = (classBlock, classSlides, classActiveSlide = 'portfolio-item-active', classActiveDot = 'dot-active') => {
    const sliderBlock = document.querySelector(classBlock)
    const slides = document.querySelectorAll(classSlides)
    const portfolioDots = document.querySelector('.portfolio-dots')
    let dots
    
    document.addEventListener("DOMContentLoaded", () => {
        if (sliderBlock == null || slides == null) {
            console.log('error');
        } else {
            for (let i = 0; i < slides.length; i++) {
                let li = document.createElement('li')
                li.classList.add('dot')
                if(i == 0) {li.classList.add(classActiveDot)}
                portfolioDots.appendChild(li)
            }
            dots = document.querySelectorAll('.dot')
            startSlide(timeInterval)
        }
    });

    const timeInterval = 2000

    let currentSlide = 0
    let interval

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, classActiveSlide)
        prevSlide(dots, currentSlide, classActiveDot)

        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, classActiveSlide)
        nextSlide(dots, currentSlide, classActiveDot)
    }
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, 2000)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currentSlide, classActiveSlide)
        prevSlide(dots, currentSlide, classActiveDot)

        if(e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if(e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, classActiveSlide)
        nextSlide(dots, currentSlide, classActiveDot)
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)
}

export default slider