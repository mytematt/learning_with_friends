document.addEventListener("DOMContentLoaded", function(){
  //variables
  var player
  var name = document.getElementById('name')
  var startButton = document.getElementById('start-button')
  var top = document.getElementById('top')
  var gameArea = document.getElementById('game-area')
  var numGuesses = 0
  var correctGuesses = 0
  var ballPosition
  var userGuess
  var avgAttempt = 0

  name.addEventListener('keyup', function(event){
    if (event.target.value !== '') {
      startButton.className=""
    } else {
      startButton.className="hide"
    }
  })




  //functions

  function genBallPosition() {
    // generate winning location
    ballPosition = Math.floor(Math.random() * 3)
  }

  function incCounters() {
    // if correct guess, increment correct guess
    // if wrong guess, incremenet wrong guess
    // update scoreboard according

  }

  function calcAverage() {
  // worry about this last
  // divide winning from attempted guesses
  avgAttempt = ((numGuesses / correctGuesses) * 100).toFixed(2)+"%"

  }

  function makeGuess() {
    genBallPosition()
  }

  function drawBoxes() {
    for(var i = 0; i < 3; i++){
      var box = document.createElement('div')
      box.className = 'box'
      box.id = 'box-' + i
      gameArea.append(box)
      box.addEventListener('click', makeGuess)
    }
  }

  function startGame() {
    player = name.value
    startButton.className = "hide"
    var label = document.createElement('p')
    label.innerHTML = 'Welcome ' + player
    label.className = 'center'
    top.append(label)
    drawBoxes()
  }

  startButton.addEventListener('click', startGame)
})
