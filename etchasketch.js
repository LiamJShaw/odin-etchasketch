const container = document.querySelector('#container');
const rows = document.getElementsByClassName("row");

document.getElementsByClassName('row');

function generateGrid(gridSize){
    generateRows(gridSize);
    generateColumns(gridSize);
}

function generateRows(gridSize){
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

function generateColumns(gridSize){
    
    for (let n = 0; n < gridSize; n++){
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            rows[i].appendChild(square);
        }
    }
}

const squares = document.querySelectorAll('square');
squares.forEach((square) => {

    console.log("Test");

//   square.addEventListener('mouseenter', () => {
//     square.style.color = "purple"
//   });
});

generateGrid(16);