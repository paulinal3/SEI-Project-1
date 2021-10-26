// elements on the game
    // manatee
    // food populating across
    // trash falling down
    // hunger bar filling up
    // when manatee collides with food, the hunger bar is increased
    // when hunger bar reaches full, game is won
    // if manatee and trash collide, manatee receives one scar
    // if manatee receives 3 scars, the game is over

// use Math.random(Math.floor) to randomly spawn food and trash
    // then use an if statement to block spawning of trash in the 1/3 of the x-axis and allow it on the other 2/3    

const game = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const foodEaten = document.getElementById('btmRight')
     
const manateeImg = new Image()
manateeImg.src = ('../js/images/manatee.png')

function drawPlayer(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH)
    this.alive = true
}

let player = {
    x: 25,
    y: 25,
    width: 25,
    height: 12,
    speed: 10,
    alive: true
}

const foodImg = new Image()
foodImg.src = ('../js/images/foodPixil.png')

const appleImg = new Image()
appleImg.src = ('../js/images/applePixil.png')

const sodaImg = new Image()
sodaImg.src = ('../js/images/sodaPixil.png')

const burgerImg = new Image()
burgerImg.src = ('../js/images/burgerPixil.png')

function gameElem(url, x, y) {
    this.url = url
    this.x = x
    this.y = y
    this.alive = true

    this.render = function () {
        ctx.drawImage(this.url, this.x, this.y,)
    }
}

const trash = [appleImg, sodaImg, burgerImg]

for (let i = 0; i<trash.length; i++) {
    new gameElem(trash[i], (Math.floor(Math.random()*300)))
}

let foodOne = new gameElem(foodImg, 200, 100)
let foodTwo = new gameElem(foodImg, 275, 45)
let foodThree = new gameElem(foodImg, 300, 130)
let trashOne = new gameElem(sodaImg, 75, 0)
let trashTwo = new gameElem(appleImg, 150, 0)
let trashThree = new gameElem(sodaImg, 215, 0)
let trashFour = new gameElem(burgerImg, 250, -15)

// allow player to move manatee around with with arrow keys
let movePlayer = (e) => {
switch (e.key) {
    // left arrow
    case ('ArrowLeft'):
        player.x -= player.speed
        if (player.x <= 25) {
            player.x = 25
            foodOne += 1
            foodTwo.x += 1
            trashOne.x += 1
        }
        break
    // up arrow
    case ('ArrowUp'):
        player.y -= player.speed
        if (player.y <= 10) {
            player. y = 10
        }
        break
    // right arrow
    case ('ArrowRight'):
        player.x += player.speed
        if (player.x >= 245) {
            player.x = 245
            foodOne.x -= 1
            foodTwo.x -= 1
            trashOne.x -= 1
        }
        break
    // down arrow
    case ('ArrowDown'):
        player.y += player.speed
        if (player.y >= 135) {
            player.y = 135
        }
        break
    }
}

// have trash falling down
let trashMove = () => {
    trashOne.y += Math.random()
    if (trashOne.y >=175) {
        trashOne.y = 0
    }
    trashTwo.y += .33
    if (trashTwo.y >=225) {
        trashTwo.y = 0
    }
    trashThree.y += Math.random()
    if (trashThree.y >= 190) {
        trashThree.y = 0
    }
    trashFour.y += .25
    if (trashFour.y >= 175) {
        trashFour.y = -10
    } 
}

// create collsion detection for when player collects food
// const detectFoodEaten = () => {
//     if (
//         player.x < foodOne.x + foodOne.width &&
//         player.x + player.width > foodOne.x &&
//         player.y < foodOne.y + foodOne.height &&
//         player.y + player.height > foodOne.y
//     ) {
//         foodOne.alive = false
//     }
// }

// create separate arrays for food and trash to populate
// Loop over each array to render each item
// Refactor my collision detection so that it has a param to reuse for multiple items
// Loop over food array and call detection on each of those
// Splice the food from the array

function animate() {
    // clears canvas
    ctx. clearRect(0, 0, canvas.width, canvas.height)
    trashOne.render()
    // if (foodOne.alive) {
    //     foodOne.render()
    //     detectFoodEaten()
    // }
    foodOne.render()
    foodTwo.render()
    foodThree.render()
    trashTwo.render()
    trashThree.render()
    trashFour.render()
    trashMove()
    drawPlayer(manateeImg, player.x, player.y, player.width, player.height)
    requestAnimationFrame(animate)
}

animate()

// const gameLoop = () => {
//     ctx.clearRect(0, 0, game.width, game.height)
//     // if (food.alive) {
//     //     food.render()
//     //     detectFoodEaten()
//     // }
//     // trash.render()
//     player.render()
// }

document.addEventListener('keydown', movePlayer)

// let gameInterval = setInterval(gameLoop, 70)