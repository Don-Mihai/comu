// Функция для проверки, видима ли секция на экране
function isSectionVisible(section) {
    var rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

const sections = document.querySelectorAll('section')


window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const link = document.querySelector(`a[href="#${section.id}"]`)

        if(isSectionVisible(section)) {
            link.style.color = 'red'
        } else {
            link.style.color = 'black'
        }
    })
})
