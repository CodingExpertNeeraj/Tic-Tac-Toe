let board = document.getElementById('gameboard');
let info = document.getElementById('info');
const startCells = [ " "," "," "," "," "," "," "," "," "];

function creatboard(){
    startCells.forEach((cell, index) =>{
        const cellElement =  document.createElement('div');
        cellElement.classList.add('squere');
        gameboard.append(cellElement);
        cellElement.id = index;
        cellElement.addEventListener('click',addGo)
    })
}
creatboard()


function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add('circle');
    e.target.append(goDisplay)
}