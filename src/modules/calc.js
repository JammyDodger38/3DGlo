const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1
        let totalAnimation

        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if(calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        } else {
            totalValue = 0
        }

        if (totalValue > +total.textContent) {
            const time = 100;
            let step = 0;

            function outNum(num) {
                let n = +total.textContent;
                let t = time / num;
                step = Math.round(num / time)

                let interval = setInterval(() => {
                    n += step;
                    if (n >= num) {
                        clearInterval(interval);
                        total.textContent = num
                    } else {
                        total.textContent = n
                    }
                }, t);
            }

            if(totalValue == 0) {
                total.textContent = 0;
            } else {
                outNum(+totalValue);
            }

        } else if (totalValue < +total.textContent) {
            const time = 100;
            let step = 0;

            function outNum(num) {
                let n = +total.textContent;
                let t = time / (n - num);
                step = Math.round((n - num) / time)

                let interval = setInterval(() => {
                    n -= step;
                    if (n <= num) {
                        clearInterval(interval);
                        total.textContent = num
                    } else {
                        total.textContent = n
                    }
                }, t);
            }
            if(totalValue == 0) {
                total.textContent = 0;
            } else {
                outNum(+totalValue);
            }
        }
    }

    calcBlock.addEventListener('change', (e) => {
        if(e.target === calcType || e.target === calcSquare || 
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })
}

export default calc