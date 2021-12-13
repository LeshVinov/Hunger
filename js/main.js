const linkDown = document.querySelector('.link_down');
const secondSection = document.querySelector('.section_about-us')
const secondSectionY = secondSection.offsetTop

let intervalId

const trackScroll = () => {
    window.scrollBy(0, 30)
    if (window.pageYOffset >= secondSectionY) {
        clearInterval(intervalId)
    }
}

linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    intervalId = setInterval(trackScroll, 20)
}) 




// const forms = document.querySelectorAll('form')
// 
// let formId
// 
// const sendForm = (formId) => {
    // const form = document.getElementById(formId)
// 
    // console.log(form);
// }
// 
// 
// forms.forEach((form, id) => {
    // form.addEventListener('submit', (event) => {
        // event.preventDefault()
        // formId = `form${id+1}`
        // sendForm(formId)
    // })
// }) 28:20 отправка формы