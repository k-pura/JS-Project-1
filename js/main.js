let gifEl = document.getElementById("gif")

let fightEl = document.getElementById("fight")

let restartEl = document.getElementById("restart")

let player1FlipEl = document.getElementById("player1Flip")
let player2FlipEl = document.getElementById("player2Flip")

let healthPlay1El= document.getElementById("healthPlay1")

let healthPlay2El = document.getElementById("healthPlay2")

let infoButEl = document.getElementById("info")

let musicEl = document.getElementById("music")

var winImgEl = document.getElementById("winImg");
var winEl = document.getElementById("win");
var loseImgEl = document.getElementById("loseImg");
var loseModalImgEl = document.getElementById("lose");

var infoModal = document.getElementById("infoM")
var winModalEl = document.getElementById("winModal")
var loseModalEl = document.getElementById("loseModal")

var span = document.getElementsByClassName("close")[0]
var span2 = document.getElementsByClassName("close2")[0]
var span3 = document.getElementsByClassName("close3")[0]
//constants

const fightAudio = new Audio("Sounds/99Ft!.mp3")
const startBattleAudio = new Audio("Sounds/04 Start Battle.mp3")
const endBattleAudio = new Audio("Sounds/EndBattle.mp3")
const gameOverAudio = new Audio("Sounds/GameOver.mp3")
const musicAudio = new Audio("Sounds/09 Ken.mp3")
const music1Audio = new Audio("Sounds/02 The World Warrior.mp3")
const music2Audio = new Audio("Sounds/18 Bonus Stage.mp3")

let warGif = ["https:media.giphy.com/media/4jWOiUK8654cWn9Si4/giphy.gif", 
              "https://media.giphy.com/media/oB1vWgGPNDmYE/giphy.gif",
              "https://media.giphy.com/media/xThuWhZczhDVxCRduM/giphy.gif",
              "https://media.giphy.com/media/26tPsS788ZFNT0nU4/giphy.gif",
              "https://media.giphy.com/media/JtBvPwzH18q6YjavNZ/giphy.gif",
              "https://media.giphy.com/media/lmvIRQxeMgmBg144RE/giphy.gif",
              "https://media.giphy.com/media/JrkEh5Gen0OQlEcbjh/giphy.gif",
              "https://media.giphy.com/media/6Y5vhbl39jNRe/giphy.gif",
              "https://media.giphy.com/media/lp1ZuIZEvj88YIctMe/giphy.gif",
              "https://media.giphy.com/media/l1J3nY7N7LBrBobVm/giphy.gif"
] 

let winGif = ["https://media.giphy.com/media/NXvbWznxGifYc/giphy.gif",
              "https://media.giphy.com/media/yoJC2JaiEMoxIhQhY4/giphy.gif",
              "https://media.giphy.com/media/kDWPAQBfATe3C/giphy.gif",
              "https://media.giphy.com/media/ToMjGpxblu4kv6mdFe0/giphy.gif",
              "https://media.giphy.com/media/KzntGpm9yM7GU/giphy.gif",
              "https://media.giphy.com/media/mV9qg8vX48TnO/giphy.gif",
              "https://media.giphy.com/media/4e0ETyN0pyz72/giphy.gif"            
]
let loseGif = ["https://media.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif",
               "https://media.giphy.com/media/iDyCRhFaunKENEHyVu/giphy.gif",
               "https://media.giphy.com/media/fjtoV2yqsWNRS/giphy.gif",
               "https://media.giphy.com/media/5xtDarrD3UV3Qk6N00E/giphy.gif",
               "https://media.giphy.com/media/qvVJ36yWjbq24/giphy.gif",
               "https://media.giphy.com/media/KwWhqBySq0KPe/giphy.gif",
]

let player1WinsGif = []
let player2Winsgif = []
let youLoseGif = []

let deck = [ "ddA", "ddQ", "ddK", "ddJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", 
            "hhA", "hhK", "hhQ", "hhJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", 
            "ccA", "ccK", "ccQ", "ccJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", 
            "ssA", "ssK", "ssQ", "ssJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02"]
           
let cardPick1 = ""
let cardPick2 = ""

let currentDeck = []

/*----- event listeners -----*/

gifEl.addEventListener("click", war)
fightEl.addEventListener("click", fightButton)
restartEl.addEventListener("click", restartGame)
infoButEl.addEventListener("click", infoButton)
musicEl.addEventListener("click", musicButton)

/*----- functions -----*/

function restartGame() {
    location.reload();
}

function infoButton() {

}

function musicButton() {
    musicAudio.volume = 0.5;
    return musicAudio.paused ? musicAudio.play() : musicAudio.pause();
}

function reDeck() {
    currentDeck = [...deck]
}

function getCardValue(c){
    let valueStr = c.substring(2)

    console.log(valueStr)

    if(valueStr == "K") {
        return 13
    } else if(valueStr == "Q") {
        return 12
    } else if(valueStr == "J") {
        return 11
    } else if(valueStr == "A") {
        return 14
    } else {
        return parseInt(valueStr)
    }
}

function fightButton() {
    fightAudio.play() 
    if(currentDeck.length === 0) {
        reDeck()
    }
    if(healthPlay1El === 0 && healthPlay1El < healthPlay2El) {
        loseModelEl()
        }
    //picks random card from deck array
    cardPick1 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick1);
    cardPick2 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick2);
    let id = currentDeck.indexOf(cardPick1);
    removedDeck = currentDeck.splice(id, 1);
    let id2 = currentDeck.indexOf(cardPick2);
    removedDeck = currentDeck.splice(id2, 1);        
    console.log(currentDeck)
//puts the card selected into the page?
    player1FlipEl.className = "";
    player1FlipEl.classList.add("card");
    player1FlipEl.classList.add(cardPick1);
    player2FlipEl.className = ""
    player2FlipEl.classList.add("card");
    player2FlipEl.classList.add(cardPick2);
console.log('before getcardvalue')
    if (getCardValue(cardPick1) == getCardValue(cardPick2)) {
       startWar()
    }
} 

function startWar() {
    fightEl.disabled = true;
    console.log("button is disabled", fightEl)
    
    startBattleAudio.play()
    gifEl.innerHTML = "<img src="+warGif[Math.floor(Math.random()*warGif.length)]+'>'
}


function war() {
    fightEl.disabled = false;
    gifEl.innerHTML = ""
    if(currentDeck.length === 0) {
        reDeck()
    }
    //picks random card from deck array
    cardPick1 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick1)
    cardPick2 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick2)

//puts the card selected into the page?
    player1FlipEl.className = ""
    player1FlipEl.classList.add("card");
    player1FlipEl.classList.add(cardPick1);
    player2FlipEl.className = ""
    player2FlipEl.classList.add("card");
    player2FlipEl.classList.add(cardPick2);

//reduces health bar
    if(cardPick1 > cardPick2) {
        healthPlay2El.value -= 1;
        endBattleAudio.play() 
    } else if(cardPick1 < cardPick2) {
        healthPlay1El.value -= 1;
        endBattleAudio.play()
    } else {
        war2()
    }
    checkWinOrLose()
}

function war2() {

    startBattleAudio.play()
    if(currentDeck.length === 0) {
        reDeck()
    }
    //picks random card from deck array
    cardPick1 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick1)
    cardPick2 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick2)

//puts the card selected into the page?
    player1FlipEl.className = ""
    player1FlipEl.classList.add("card");
    player1FlipEl.classList.add(cardPick1);
    player2FlipEl.className = ""
    player2FlipEl.classList.add("card");
    player2FlipEl.classList.add(cardPick2);

//reduces health bar
    if(cardPick1 > cardPick2) {
        healthPlay2El.value -= 2;
        endBattleAudio.play()
    } else if(cardPick1 < cardPick2) {
        healthPlay1El.value -= 2;
        endBattleAudio.play()
    } else {
        war3()
    }
}

function war3() {

    startBattleAudio.play()
    if(currentDeck.length === 0) {
        reDeck()
    }
    //picks random card from deck array
    cardPick1 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick1)
    cardPick2 = currentDeck[Math.floor(Math.random()*currentDeck.length)];
    console.log(cardPick2)

//puts the card selected into the page?
    player1FlipEl.className = ""
    player1FlipEl.classList.add("card");
    player1FlipEl.classList.add(cardPick1);
    player2FlipEl.className = ""
    player2FlipEl.classList.add("card");
    player2FlipEl.classList.add(cardPick2);

//reduces health bar
    if(cardPick1 > cardPick2) {
        healthPlay2El.value -= 3;
        endBattleAudio.play() 
    } else if(cardPick1 < cardPick2) {
        healthPlay1El.value -= 3;
        endBattleAudio.play()
    } else {
        healthPlay2El.value = 0
        healthPlay1El.value = 0
        showLoseModal()
}
}

function checkWinOrLose() {
    if(healthPlay1El.value > healthPlay2El.value && healthPlay2El.value === 0) {
    showWinModal()
    }
    else if(healthPlay1El.value < healthPlay2El.value && healthPlay1El.value === 0) {
        showLoseModal()
    }
    else (
        fightButton()
    )
}


function showWinModal() {
    winModalEl.style.display = "block";
    winImgEl.src = winGif[Math.floor(Math.random()*winGif.length)]
}

span.onclick = function() {
    winModalEl.style.display = "none";
    restartGame()
  }

window.onclick = function(event) {
   if (event.target == winModalEl) {
   winModalEl.style.display = "none";
   }
}  



function showLoseModal() {
    loseModalEl.style.display = "block";
    loseImgEl.src = loseGif[Math.floor(Math.random()*loseGif.length)]
  }

span2.onclick = function() {
    loseModalEl.style.display = "none";
    restartGame()
  }

window.onclick = function(event) {
   if (event.target == loseModalEl) {
   loseModalEl.style.display = "none";
   }
}  

//INFO BUTTON

infoButEl.onclick = function() {
    infoModal.style.display = "block";
  }
  
span3.onclick = function() {
    infoModal.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == infoModal) {
      infoModal.style.display = "none";
    }
  }

reDeck()