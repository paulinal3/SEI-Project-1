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

const game = document.getElementById('gameCanvas')
const ctx = gameCanvas.getContext('2d')
    
// create manatee and add to canvas
// manatee.onload = function () {
    //     ctx.drawImage(manatee, 5, 15)
    // }
    
const player = {
    x: 10,
    y: 25,
    width: 49,
    height: 23,
    speed: 5,
    alive: true
}
    
const manatee = new Image()
manatee.src = ('../css/images/manatee.png')

function drawGameElem(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH)
}

function animate() {
    // ctx. clearRect(0, 0, canvas.width, canvas.height)
    drawGameElem(manatee, player.x, player.y, player.width, player.height)
    // movementHandler()
    requestAnimationFrame(animate)
}

const keys = []

// const movementHandler = (e) => {
// switch (e.key) {
//     // left arrow
//     case ('ArrowLeft'):
//         player.x -= player.speed
//         break
//     // up arrow
//     case ('ArrowUp'):
//         player.y -= player.speed
//         break
//     // right arrow
//     case ('ArrowRight'):
//         player.x += player.speed
//         break
//     // down arrow
//     case ('ArrowDown'):
//         player.y += player.speed
//         break
//     }
// }

animate()
    
    // function drawImage(src, x, y) {
    //         this.src = src
    //         this.x = x
    //         this.y = y
    //         this.alive = true
    //     }
    //     let player = drawImage(manatee, 5, 15)

// function gameElem(x, y, color, width, height) {
//     this.x = x
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height
//     this.alive = true

//     this.render = function () {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }
        
// let player = new gameElem(10, 25, 'gray', 10, 10)
// let food = new gameElem(200, 115, 'lightgreen', 10,35)
// let trash = new gameElem(150, 35, 'red', 10, 20)
// console.log(player)
       
// allow player to move manatee around with with arrow keys


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

window.addEventListener('keydown', function (e) {
    keys[e.key] = true
    console.log(keys)
})

window.addEventListener('keyup', function(e) {
    delete keys[e.key]
})

// document.addEventListener('keydown', movementHandler)

// let gameInterval = setInterval(gameLoop, 70)