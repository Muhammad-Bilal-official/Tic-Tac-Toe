console.log("Tic Tac Toe Game");
let turn = "X";
let turnCount = 0;
let winAnnouncement = document.getElementById("winAnnouncement");

function changeTurn() {
    turn = (turn === "X") ? "0" : "X";
    turnCount++;
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
                // resetGame();
            }
        }
        if (turnCount === 9) {
            winAnnouncement.innerHTML = "Match Drawn";
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
}