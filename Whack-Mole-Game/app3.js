const squares = document.querySelectorAll('.square')
const target = document.querySelector('.target')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    
    square.classList.remove('target')

  })

  let randomSquare = squares[Math.floor(Math.random() * 36)]
  randomSquare.classList.add('target')
  hitPosition = randomSquare.id

}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result+=10
      play();
      square.classList.remove('target')
      score.textContent = result
      
      hitPosition = null
      
      if(score.textContent >= 1500){
        
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Oyun Bitti Skorunuz:' + result)
      }
    }
    else{
      result-=5
      score.textContent = result
     
      hitPosition = null
    }
  })
})

function movetarget() {
  timerId = setInterval(randomSquare, 800)
}
movetarget()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime
 
 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('Time is up. Your Score:' + result)
 }
}

let countDownTimerId = setInterval(countDown, 1000)


function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }