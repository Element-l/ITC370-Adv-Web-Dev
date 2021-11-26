let winner = 0
//initializing racer objects 
const racer1 = {
  name: 'racer1',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
}

const racer2 = {
  name: 'racer2',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
}

const racer3 = {
  name: 'racer3',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
}

const racer4 = {
  name: 'racer4',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
}
//getting variables for html items
img1 = document.getElementById('racer1')
img2 = document.getElementById('racer2')
img3 = document.getElementById('racer3')
img4 = document.getElementById('racer4')

winnerDiv = document.getElementById('winnerDiv')
winnerImg = document.getElementById('winnerImg')
winnerText = document.getElementById('winnerText')
stoplight = document.getElementById('stoplight')

//adding event for clicking the stoplight
stoplight.addEventListener('click', function() {

  stoplight.src = "./images/green.png"

  //setting racers to walking animation
  img1.src = "./images/walk1.gif"
  img2.src = "./images/walk2.gif"
  img3.src = "./images/walk3.gif"
  img4.src = "./images/walk4.gif"

  //adding interval to move racers
  let raceInterval = setInterval(function(){
    //calling functions to move racers
    moveImg(racer1)
    moveImg(racer2)
    moveImg(racer3)
    moveImg(racer4)
    
    //checking for winner
    if (racer1['position'] >= 800){
      winner = 1
      winnerImg.src = "./images/1.gif"
    }
    else if (racer2['position'] >= 800){
      winner = 2
      winnerImg.src = "./images/2.gif"
    }
    else if (racer3['position'] >= 800){
      winner = 3
      winnerImg.src = "./images/3.gif"
    }
    else if (racer4['position'] >= 800){
      winner = 4
      winnerImg.src = "./images/4.gif"
    }
    
    if (winner != 0){
      winnerText.innerHTML += winner
      clearInterval(raceInterval)
      //resetting images to idle animation
      img1.src = "./images/1.gif"
      img2.src = "./images/2.gif"
      img3.src = "./images/3.gif"
      img4.src = "./images/4.gif"
      //displaying winner
      winnerDiv.style.display = 'initial'

      winnerDiv.addEventListener('click', function(){
        //resetting stoplight and winner display
        stoplight.src = "./images/red.png"
        winnerDiv.style.display = 'none'
        winnerText.innerHTML = 'Winner is #'
        //reseting positions of all racers and winner variable
        resetImg(racer1)
        resetImg(racer2)
        resetImg(racer3)
        resetImg(racer4)
        winner = 0
      })
    }
  //setting interval for 16ms
  }, 16)

})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function moveImg(object) {
  //getting random integer to move racer
  var x = getRndInteger(object['minSpeed'], object['maxSpeed'])
  //moving racer + adding to position variable
  document.getElementById(object['name']).style.left = object['position'] + x + "px"
  object['position'] = object['position'] + x
}

function resetImg(object) {
  //resetting position on screen and position variable to 0
  document.getElementById(object['name']).style.left = 0 + "px"
  object['position'] = 0
}