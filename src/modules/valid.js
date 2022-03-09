const valid = () => {
    const form1Name = document.querySelector('#form1-name')
    const form1Email = document.querySelector('#form1-email')
    const form1Phone = document.querySelector('#form1-phone')

    const form2Name = document.querySelector('#form2-name')
    const form2Email = document.querySelector('#form2-email')
    const form2Phone = document.querySelector('#form2-phone')
    const form2Message = document.querySelector('#form2-message')

    const form3Name = document.querySelector('#form3-name')
    const form3Phone = document.querySelector('#form3-phone')
    const form3Email = document.querySelector('#form3-email')

    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')

    const blurInput = (ex) => {
        ex.target.value = ex.target.value.replace(/[\s]{2,}/, " ")
        ex.target.value = ex.target.value.replace(/[\-]{2,}/, "-")
        ex.target.value = ex.target.value.replace(/^\-/, "")
        ex.target.value = ex.target.value.replace(/\-$/, "")
    }
    const blurEmail = (e) => {
        if (e.target.value != '') {
            let result = e.target.value .toString().match(/^[a-z\d_+.\-]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i)
            if (result === null) {
                alert('Вы ввели неправильный email')
                e.target.value = ''
            }
        } else {
            alert('Вы ввели неправильный email')
        }
    }
    
    form1Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/g, "")
    })
    form1Name.addEventListener('blur', (e) => {
        blurInput(e)
        e.target.value = e.target.value.toString().substring('0', '1').toUpperCase() + e.target.value.toString().substring('1').toLowerCase()
    })

    form1Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/g, "")
    })
    form1Email.addEventListener('blur', (e) => {
        blurEmail(e)
    })

    form1Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\(\)\-]+/g, "")
    })
    form1Phone.addEventListener('blur', (e) => {
        blurInput(e)
    })


    form2Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/g, "")
    })
    form2Name.addEventListener('blur', (e) => {
        blurInput(e)
        e.target.value = e.target.value.toString().substring('0', '1').toUpperCase() + e.target.value.toString().substring('1').toLowerCase()
    })

    form2Message.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/g, "")
    })
    form2Message.addEventListener('blur', (e) => {
        blurInput(e)
        e.target.value = e.target.value.toString().substring('0', '1').toUpperCase() + e.target.value.toString().substring('1').toLowerCase()
    })

    form2Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/g, "")
    })
    form2Email.addEventListener('blur', (e) => {
        blurEmail(e)
    })

    form2Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\(\)\-]+/g, "")
    })
    form2Phone.addEventListener('blur', (e) => {
        blurInput(e)
    })


    form3Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/g, "")
    })
    form3Name.addEventListener('blur', (e) => {
        blurInput(e)
        e.target.value = e.target.value.toString().substring('0', '1').toUpperCase() + e.target.value.toString().substring('1').toLowerCase()
    })

    form3Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/g, "")
    })
    form3Email.addEventListener('blur', (e) => {
        blurEmail(e)
    })

    form3Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\(\)\-]+/g, "")
    })
    form3Phone.addEventListener('blur', (e) => {
        blurInput(e)
    })


    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
}

export default valid