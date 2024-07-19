let grid = document.querySelector('.container');
let gridbtn = document.querySelector('.sizebtn');
let resetbtn = document.querySelector('.resetbtn');
let currentSize = 16;
let chkbox = document.querySelector('.randomchk');
let newsize;

function createGrid(num) {
    grid.innerHTML = "";
    let size = (600/num) - 2;
    for(let i = 0; i <= (num*num)-1; i++) {
        let onepixel = document.createElement("div");
        onepixel.style.width = size + 'px';
        onepixel.style.height = size + 'px';
        onepixel.addEventListener('mouseover', () => changeColor(onepixel));
        grid.appendChild(onepixel);
    }
    currentSize = num;
}

function changeColor(item) {
    if(chkbox.checked){

        item.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    }
    else {
        item.style.backgroundColor = "black";
    }
}

function askSize() {
    newsize = prompt("Enter new grid size (1 - 100)");
    createGrid(newsize);
}

function resetGrid() {
    createGrid(currentSize)
}

gridbtn.addEventListener('click', () => askSize());
resetbtn.addEventListener('click', () => resetGrid());

createGrid(currentSize);