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
