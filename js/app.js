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
    
let player = {
    x: 25,
    y: 25,
    width: 25,
    height: 12,
    speed: 10,
    alive: true
}

// let food = {
//     this.x = x
// }
    
const manatee = new Image()
manatee.src = ('../js/images/manatee.png')

const food = new Image()
food.src = ('../js/images/foodPixil.png')

const bittenApple = new Image()
bittenApple.src = ('../js/images/applePixil.png')

function drawGameElem(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH)
    this.alive = true
}

function animate() {
    ctx. clearRect(0, 0, canvas.width, canvas.height)
    drawGameElem(manatee, player.x, player.y, player.width, player.height)
    let food1 = drawGameElem(food, 235, 132, 14, 18,)
    let trash1 = drawGameElem(bittenApple, 150, 15, 16, 18)
    requestAnimationFrame(animate)
}

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
        if (player.x >= 235) {
            player.x = 235
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