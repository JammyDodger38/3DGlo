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

    form1Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/, "")
    })
    form1Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/, "")
    })
    form1Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\(\)\-]+/, "")
    })


    form2Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/, "")
    })
    form2Message.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/, "")
    })
    form2Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/, "")
    })
    form2Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\(\)\-]+/, "")
    })


    form3Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/, "")
    })
    form3Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/, "")
    })
    form3Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\(\)\-]+/, "")
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