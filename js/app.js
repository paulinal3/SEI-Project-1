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

function gameElem(url, x, y, speed, dir) {
    this.url = url
    this.x = x
    this.y = y
    this.speed = speed
    this. dir = dir
    this.alive = true

    this.render = function () {
        ctx.drawImage(this.url, this.x, this.y,)
    }
}

let foodOne = new gameElem(foodImg, 200, 100, 0, 1,)
let foodTwo = new gameElem(foodImg, 235, 132, 0, 0)
let trashOne = new gameElem(appleImg, 150, 15)
let trashTwo = new gameElem(sodaImg, 215, 5)

// let food1 = new Sprite(food, 235, 132, 14, 18)

// allow player to move manatee around with with arrow keys
let movePlayer = (e) => {
switch (e.key) {
    // left arrow
    case ('ArrowLeft'):
        player.x -= player.speed
        if (player.x <= 25) {
            player.x = 25
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

let trashMove = () => {
    trashOne.y += .25
    trashTwo.y += .50
}

function animate() {
    ctx. clearRect(0, 0, canvas.width, canvas.height)
    trashOne.render()
    foodOne.render()
    foodTwo.render()
    trashTwo.render()
    trashMove()
    // foodMove()
    drawPlayer(manateeImg, player.x, player.y, player.width, player.height)
    requestAnimationFrame(animate)
}

animate()
         
// const detectFoodEaten = () => {
//     if (
//         player.x < food.x + food.width &&
//         player.x + player.width > food.x &&
//         player.y < food.y + food.height &&
//         player.y + player.height > food.y
//     ) {
//         food.alive = false
//     }
// }

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