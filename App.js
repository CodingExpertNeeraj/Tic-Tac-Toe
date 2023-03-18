let board = document.getElementById('gameboard');
let info = document.getElementById('info');
const startCells = [ " "," "," "," "," "," "," "," "," "];


let go = "circle";
info.textContent = "Circle goes first"


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
    goDisplay.classList.add(go);
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    info.textContent = "it is now " + go + " 's go.";
    e.target.removeEventListener("click", addGo)
}