const container = document.querySelector('#container');
const rows = document.getElementsByClassName("row");

document.getElementsByClassName('row');

function generateGrid(gridSize) {
    console.log(gridSize);
    generateRows(gridSize);
    generateColumns(gridSize);
    squareEventListeners()
}

function generateRows(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

function generateColumns(gridSize) {
    for (let n = 0; n < gridSize; n++){
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = "#202020";
            rows[i].appendChild(square);
        }
    }
}

function squareEventListeners() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'purple';
        })
    })
}

const gridSizeInput = document.querySelector(".slider");
const sliderValue = document.querySelector('.sliderValue');

gridSizeInput.oninput = function() {
    sliderValue.textContent = this.value;
    clear(this.value);
}

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    clear();
})

function clear() {
    container.innerHTML = "";
    generateGrid(gridSizeInput.value);  
}

generateGrid(16);