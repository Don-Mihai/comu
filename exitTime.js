// let isShure = true;

// window.addEventListener('mousemove', (event) => {
//     const isTop = event.clientY < 25;

//     if(isTop && isShure) {
//         isShure = !confirm('Вы точно уверены что хотите покинуть нашу страну?')
//     }
// })

const section = document.querySelector('.home')

const images = ['sam.jpg', 'home.png', 'grey', 'black']

let counter = 0;

setInterval(() => {
    section.style.backgroundImage = `url(../../images/${images[counter]})`;

    if(counter === images.length -1) {
        counter = 0
    } else {
        counter++;
    }
    
}, 2000)
