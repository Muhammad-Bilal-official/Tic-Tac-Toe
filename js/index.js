console.log("Tic Tac Toe Game");
let turn = "X";
let turnCount = 0;
let turnContainer = document.getElementById("turnContainer");
let turnBtnX = document.getElementById("turnBtnX");
let turnBtn0 = document.getElementById("turnBtn0");
let winAnnouncement = document.getElementById("winAnnouncement");
let gameInfoHeading = document.getElementById("gameInfoHeading");
let winImg = document.querySelector("#winImg img");

function changeTurn() {
    turn = (turn === "X") ? "0" : "X";
    turnCount++;
    if(turn==="X"){
        console.log("X turn")
        turnBtnX.style.border = "4px solid red";
        turnBtn0.style.border = "2px solid black";
    }
    else{
        console.log("0 turn")
        turnBtn0.style.border = "4px solid red";
        turnBtnX.style.border = "2px solid black";
    }

}
let chembers = document.getElementsByClassName("chembers");
Array.from(chembers).forEach((chember) => {
    chember.addEventListener("mouseenter", () => {
        if (chember.innerText === "")
            chember.innerText = turn + '....';
    });
    chember.addEventListener("mouseout", () => {
        if (chember.innerText === turn + '....')
            chember.innerText = "";
    });
    chember.addEventListener("click", () => {
        if (chember.innerText === turn + '....') {
            chember.innerText = turn;
            thisTurnWins();
            if (!winText) {
                changeTurn();
            }
            else {
                console.log(winText);
                winAnnouncement.innerHTML = winText;
                resetGameBtn.style.display = "block";
                turnContainer.style.display = "none";
                gameInfoHeading.style.display = "none";
                winImg.style.width = "200px";

                // resetGame();
            }
        }
        if (turnCount === 9) {
            winAnnouncement.innerHTML = "Match Drawn";
            resetGameBtn.style.display = "block";
            turnContainer.style.display = "none";
            gameInfoHeading.style.display = "none";
            winImg.style.width = "200px";
            turnCount = 0;
        }
    });
});

let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
let winText;
function thisTurnWins() {
    winCombos.forEach((winCombo, index) => {
        // console.log(index, chembers[winCombo[0]].innerText, chembers[winCombo[1]].innerText, chembers[winCombo[2]].innerText);
        if ((chembers[winCombo[0]].innerText !== "") && (chembers[winCombo[0]].innerText === chembers[winCombo[1]].innerText) && (chembers[winCombo[1]].innerText === chembers[winCombo[2]].innerText)) {
            winText = `Congratulations ${turn} wins`;
        }
    });
}

resetGameBtn.addEventListener("click", resetGame);
function resetGame() {
    Array.from(chembers).forEach((chember) => {
        chember.innerText = "";
    });
    turn = "X";
    turnCount = 0;
    winText = undefined;
    winAnnouncement.innerHTML = "";
    resetGameBtn.style.display = "none";
    
    turnContainer.style.display = "block";
    turnBtnX.style.border = "4px solid red";
    turnBtn0.style.border = "2px solid black";
    gameInfoHeading.style.display = "block";
    winImg.style.width = "0px";
}