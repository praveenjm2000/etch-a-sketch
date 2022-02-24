
const btn16 = document.querySelector('.btn16');
const btn42 = document.querySelector('.btn64');


const container=document.querySelector('.board');
let gridSize=32;
let color="#000";
let rgb=false;
let greyflag=false;
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
                box.style.backgroundColor=`${color}`;
            }
            else if(greyflag){
                if(box.style.backgroundColor.match(/rgba/)){
                    let opacity=Number(box.style.backgroundColor.slice(-4,-1));
                    opacity+=0.2;
                    box.style.backgroundColor=`rgba(0,0,0,${opacity})`;
                    box.classList.add('grey');
                }
                else if(box.classList[1]!='grey'){
                    box.style.backgroundColor='rgba(0,0,0,0.2)';
                }
            }
            else{
                box.style.backgroundColor=`${color}`;
            }
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
let grey=document.getElementById('grey');
let erase=document.getElementById('erase');

grey.addEventListener('click',()=> {
    color='#00000055';
    greyflag=true;
    rgb=false;
    clear();
    generate();
})
black.addEventListener('click',()=> {
    greyflag=false;
    rgb=false;
    color='black';
    clear();
    generate();
})
erase.addEventListener('click',()=> {
    greyflag=false;
    rgb=false;
    color='white';
})
rgbBtn.addEventListener('click',()=> {
    rgb=true;
    greyflag=false;
    clear();
    generate();
})


colorPicker=document.getElementById('colorPicker');

//colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    rgb=false;
    greyflag=false;
    color = event.target.value;
    clear();
    generate();
}


function rgbcolor(){
    color=`hsl(${Math.random() * 360}, 100%, 50%)`;
}