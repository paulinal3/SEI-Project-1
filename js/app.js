// elements on the game
    // manatee
    // food populating across
    // trash falling down
    // hunger bar filling up
    // when manatee collides with food, the hunger bar is increased
    // when hunger bar reaches full, game is won
    // if manatee and trash collide, manatee receives one scar
    // if manatee receives 3 scars, the game is over
    
const game = document.getElementById('gameCanvas')
    
const ctx = gameCanvas.getContext('2d')
    
// create manatee and add to canvas
const manatee = new Image()
manatee.src = ('../css/images/manatee.png')
// manatee.onload = function () {
//     ctx.drawImage(manatee, 10, 25)
// }
    
    // function drawManatee(src, x, y) {
        //     ctx.drawManatee(src, x, y)
        // }
        // let player = manatee(manatee, 10, 25)

function gameElem(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true

    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
        
let player = new gameElem(10, 25, 'gray', 10, 10)
let food = new gameElem(200, 115, 'lightgreen', 10,35)
let trash = new gameElem(150, 35, 'red', 10, 20)
// console.log(player)
       
// allow player to move manatee around with with arrow keys
const movementHandler = (e) => {
switch (e.keyCode) {
    // left arrow
    case (37):
        player.x -= 10
        break
    // up arrow
    case (38):
        player.y -= 10
        break
    // right arrow
    case (39):
        player.x += 10
        break
    // down arrow
    case (40):
        player.y += 10
        break
    }
}

const detectFoodEaten = () => {
    if (
        player.x < food.x + food.width &&
        player.x + player.width > food.x &&
        player.y < food.y + food.height &&
        player.y + player.height > food.y
    ) {
        food.alive = false
    }
}

const gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (food.alive) {
        food.render()
        detectFoodEaten()
    }
    trash.render()
    player.render()
}

document.addEventListener('keydown', movementHandler)

let gameInterval = setInterval(gameLoop, 70)