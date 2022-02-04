
const btn16 = document.querySelector('.btn16');
const btn42 = document.querySelector('.btn64');


const container=document.querySelector('.board');
let x=19;
let w=(480/x);
console.log(w);
for(let i=0;i<x*x;i++){
    const box=document.createElement('div');
    box.setAttribute('style',`width: ${w}px; height: ${w}px;`);
    box.addEventListener('mouseenter',() => {
        box.classList.add('boxClicked');
    });
    container.appendChild(box);
}

