const gridContainer = document.querySelector('.grid-container');

let divs = 256;

function addGrid(num) {
    for(let i = 0; i < num;i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        gridContainer.appendChild(div)
    }
}

addGrid(divs);