// Your code goes here
// 1 (click)
const btn = document.querySelectorAll('.btn');
console.log('I am a button', btn);
btn.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.style.backgroundColor = '#FF0000';
    
        setTimeout(() => {
            event.target.style.backgroundColor = "";
        }, 700);
    }, false);
});

// 2 (mouseenter)
const content = document.querySelectorAll('.content-pick');
console.log('content', content);
content.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'pink';
    })
})

// 3 (mouseleave)
content.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'white';
    })
})

// 4 (copy)
const page = document.querySelector('html');
console.log('page', page);
page.addEventListener('copy', (event) => {
    alert('Ohhhh they stealin!')
})

// 5 (mouseover)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', (event) =>{
        event.target.style.color = '#fdce41';
        event.target.style.textTransform = 'uppercase'
    })
})

// 6 (mouseout)
navLinks.forEach(link => {
    link.addEventListener('mouseout', (event) =>{
        event.target.style.color = '#000000';
        event.target.style.textTransform = 'capitalize';
    })
})

// 7 (dblclick)
const bus = document.querySelector('img');
console.log('bus img', bus)
bus.addEventListener('click', () => {
    bus.src = 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fac37bd9a8893041d7064ce43b60c1045%2F200261530%2Fmagic-school-bus-360-concept.jpg&client=amp-blogside-v2&signature=233050a712c79731fb73e1d7e1ab44e65ff213b8';
})
bus.addEventListener('dblclick', () => {
    bus.src = './img/fun-bus.jpg';
})

// 8 (resize)
window.addEventListener('resize', (event) => {
    console.log(`Don't squish me!`);
})

// 9 (drag)
const img = document.querySelectorAll('img');
console.log('images', img);
img.forEach(image => {
    image.addEventListener('drag', (event) => {
        console.log('Where are we going? STRANGER DANGER!');
    })
})

//10 (keydown)
window.addEventListener('keydown', () => {
    console.log('Drop it drop it low low');
})

// stopPropagation() example
const topContent = document.querySelectorAll('.content-section .text-content');
console.log('Top Content', topContent);

topContent.forEach(section => {
    section.addEventListener('click', (event) => {
        event.target.style.backgroundColor = "#8DBEC2";
    })
})

const topContentH2 = document.querySelectorAll('.content-section .text-content h2');
console.log('top content h2 titles', topContentH2)

topContentH2.forEach(title => {
    title.addEventListener('click', (event) => {
        event.stopPropagation();
        event.target.style.color = "#501B09";
        event.target.style.textTransform = 'uppercase';
    })
})