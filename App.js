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
    e.target.removeEventListener("click", addGo);
    checkScore()
}

function checkScore(){
  const allSquere =  document.querySelectorAll('.squere')
//   console.log(allSquere)
    const winningcombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    console.log(allSquere[4])

    winningcombos.forEach(Array => {
     const circleWins =    Array.every(cell =>
             allSquere[cell].firstChild?.classList.contains('circle'))

             if (circleWins) {
                info.textContent = "Circle wins!"
                allSquere.forEach(squere => squere.replaceWith(squere.cloneNode(true)))
                return      
             }
            //  -----------------------
             winningcombos.forEach(Array => {
                const crossWins =    Array.every(cell =>
                        allSquere[cell].firstChild?.classList.contains('cross'))
           
                        if (crossWins) {
                           info.textContent = "Cross wins!"
                           allSquere.forEach(squere => squere.replaceWith(squere.cloneNode(true)))
                           return      
                        }
               })
    })
}





















