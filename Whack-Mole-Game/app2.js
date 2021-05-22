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
    square.style.backgroundColor = 'white'
    
  })

  let randomSquare = squares[Math.floor(Math.random() * 36)]
  
  randomSquare.classList.add('target')
  reset()
 
  
 
  hitPosition = randomSquare.id

}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result+=10
      score.textContent = result
      reset2()
      square.classList.remove('target')
      
      
      hitPosition = null
      if(score.textContent >= 100){
        addCode()
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('You have earned the right to pass the third stage! Your Score:' + result)
      }
    }
    else {
      result-=5
      score.textContent = result
      
      hitPosition = null
      reset2()
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
   alert('Sorry, you did not qualify for second stage. Your Score:' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)



function addCode() {
  document.getElementById("desc").innerHTML += '<p> You have earned the right to pass the third stage. Click on the link below to move to the third stage. </p>';
  document.getElementById("secondstep").innerHTML +=  '<a href="191216008_asama3.html">Third Stage</a>';
}

function reset(){
  
  var save = document.querySelector('.target');
  let colors = ["#000000","#FFEBCD","#8A2BE2","#DC143C","#8B0000","#FF1493","#DAA520","#4B0082","#F08080"]
  
  save.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
  

}

function reset2(){
  
  var save = document.querySelector('.target');
  save.style.backgroundColor = "white";
  

}