
const btn16 = document.querySelector('.btn16');
const btn42 = document.querySelector('.btn64');


const container=document.querySelector('.board');
let gridSize=32;
let color="#000";
let rgb=false;
generate();

function generate(){
    let x=gridSize;
    let w=(480/x);
    for(let i=0;i<x*x;i++){
        const box=document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style',`width: ${w}px; height: ${w}px;`);
        box.addEventListener('mouseenter',() => {
            if(rgb){
                rgbcolor();
            }
            box.style.backgroundColor=`${color}`;
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
let rgbBtn=document.getElementById('rgb');
black.addEventListener('click',()=> {
    color='black'
    rgb=false;
    clear();
    generate();
})

rgbBtn.addEventListener('click',()=> {
    rgb=true;
    clear();
    generate();
})


colorPicker=document.getElementById('colorPicker');

//colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    rgb=false;
    color = event.target.value;
    clear();
    generate();
}

let c=1;
function rgbcolor(){
    if(c>3){
        c=1;
    }
    console.log(c);
    switch(c){
        case 1:
            color="red";
            c++;
            break;
        case 2:
            color="blue";
            c++;
            break;
        case 3:
            color="green";
            c++;
            break;
    }
}