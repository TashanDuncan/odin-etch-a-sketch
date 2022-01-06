const gridContainer = document.querySelector('.grid-container');



function addGrid(squares) {
    if(squares > 100){
        return alert('Invalid Number, Please select a number no greater than 100')
    }
    gridContainer.style.setProperty('--grid-rows', squares);
    gridContainer.style.setProperty('--grid-cols', squares);
    for (let i = 0; i < (squares * squares); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        })

        gridContainer.appendChild(div)
    }
}

addGrid(16, 16);