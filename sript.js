
const btn16 = document.querySelector('.btn16');
const btn42 = document.querySelector('.btn64');


const container=document.querySelector('.board');
let gridSize=32;
generate();

function generate(){
    let x=gridSize;
    let w=(480/x);
    for(let i=0;i<x*x;i++){
        const box=document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style',`width: ${w}px; height: ${w}px;`);
        box.addEventListener('mouseenter',() => {
            box.classList.add('boxClicked');
        });
        container.appendChild(box);
    }
}

function clear(){
    let x=gridSize;
    for(let i=0;i<x*x;i++){
        box=document.querySelector('.box');
        container.removeChild(box);
    }
}

let submitBtn=document.getElementById('submit');
submitBtn.addEventListener('click',()=> {
    clear();
    gridSize=document.getElementById('grid').value;
    generate();
});

let clearBtn=document.getElementById('clear');
clearBtn.addEventListener('click',()=> {
    clear();
    generate();
});

let black=document.getElementById('black');
let rgb=document.getElementById('rgb');
black.addEventListener('click',()=> {
    boxcolor='black'
    clear()
    generate();
})
