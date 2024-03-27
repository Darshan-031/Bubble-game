var bubbleBox = document.querySelector(".dbox");
var time = document.querySelector(".time");
var hit = document.querySelector(".hit");
var score = document.querySelector(".score");
var mainBox = document.querySelector(".mainbox");
var endBox = document.querySelector(".endBox");
var endScore = document.querySelector(".endScore");
var resetBtn = document.querySelector(".btn");
var bubbleAdd = "";
var fscore = 0;
var rndHit = 3;
runGame();

resetBtn.addEventListener("click", () => {
    reset();
});

function runGame() {
    makeBubble();
    addeventListnerToBubble();
    runTimer();
    genHit();
}

function runTimer() {
    let timer = 60;
    let myIntervel =  setInterval(() => {
        if (timer > 0) {
            timer--;
            time.textContent = timer;
        }
        else {
            clearInterval(myIntervel);
            EndGame();
        }
    }, 1000);
}

function genHit() {
    rndHit = Math.floor(Math.random() * 9 + 1);
    hit.textContent = rndHit;
}

function makeBubble() {
    bubbleAdd = ``;
    for (let i = 0; i < 126; i++) {
        let randonNum = Math.floor(Math.random() * 9 + 1);
        bubbleAdd += `<div class="bubble">${randonNum}</div>`;
    }
    bubbleBox.innerHTML = bubbleAdd;
}

function EndGame() {
    mainBox.style.display = "none";
    endBox.style.display = "block";
    endScore.textContent = fscore;
}

function reset() {
    mainBox.style.display = "block";
    endBox.style.display = "none";
    fscore = 0;
    score.textContent = fscore;
    runGame();
}

function addeventListnerToBubble(){
    let bubble = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubble.length; i++) {
        bubble[i].addEventListener("click", () => {
            if (bubble[i].textContent == rndHit) {
                fscore += 10;
                score.textContent = fscore;
                genHit();
                bubble[i].style.visibility = "hidden";
            }
        });
    }
}