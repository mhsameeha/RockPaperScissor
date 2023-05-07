const message = document.getElementById("message")
const player1Board = document.getElementById("player1Board")
const player2Board = document.getElementById("player2Board")
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorBtn")
const restartBtn = document.getElementById("restartBtn")
const resetBtn = document.getElementById("resetBtn")
let Mark1 = document.getElementById("Mark1")
let Mark2 = document.getElementById("Mark2")

let RPS = ["⛰️","📝","✂️"]
let randomResult = Math.floor(Math.random() * 3)
let x = 0
let y = parseInt(Mark1.textContent)
let z = parseInt(Mark2.textContent)



rockBtn.addEventListener("click", function(){
    player1Board.textContent = RPS[0]
    computerResponse()
    scoreRock()
    resetBtnfunc()
    paperBtn.classList.remove("active")
    scissorBtn.classList.remove("active")
    rockBtn.classList.add("active")


    // console.log(randomResult)
})

paperBtn.addEventListener("click", function(){
    player1Board.textContent = RPS[1]
    computerResponse()
    scorePaper()
    resetBtnfunc()
    scissorBtn.classList.remove("active")
    rockBtn.classList.remove("active")
    paperBtn.classList.add("active")
})

scissorBtn.addEventListener("click", function(){
    player1Board.textContent =RPS[2]
    computerResponse()
    scoreScissor()
    resetBtnfunc()
    rockBtn.classList.remove("active")
    paperBtn.classList.remove("active")
    scissorBtn.classList.add("active")

})

function computerResponse(){
let randomResult = Math.floor(Math.random() * 3)
x = randomResult
    player2Board.textContent = RPS[x]
}

function scoreRock(){
if (x === 1){
z += 1
Mark2.textContent = z

}
else if (x ===2){
    y +=1
    Mark1.textContent = y
}
}

function scorePaper(){
    if (x === 0){
    y += 1
    Mark1.textContent = y}
    else if (x ===2){
        z +=1
Mark2.textContent = z

    }
    }

    function scoreScissor(){
        if (x === 0){
        z += 1
Mark2.textContent = z
}
        else if (x ===1){
            y +=1
            Mark1.textContent = y
        }
        }

function resetBtnfunc(){
    if (parseInt(Mark1.textContent)>=3){
        message.textContent = "Player's the Winner"
        restartBtn.style.display = "none"
        resetBtn.style.display = "block"
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true
       
    }
    else if (parseInt(Mark2.textContent)>=3){
        message.textContent = "Computer's the Winner"
        restartBtn.style.display = "none"
        resetBtn.style.display = "block"
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true
    }
}

function reset(){
    message.textContent = "Rock Paper Scissor"
    player1Board.textContent="-"
    player2Board.textContent="-"
    restartBtn.style.display = "block"
    resetBtn.style.display = "none"
    Mark1.textContent = "0"
    Mark2.textContent = "0"
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorBtn.disabled = false
    x = 0
    y = parseInt(Mark1.textContent)
    z = parseInt(Mark2.textContent)

}

resetBtn.addEventListener("click", function(){
    reset()
})

restartBtn.addEventListener("click", function() {
    reset()
    
})