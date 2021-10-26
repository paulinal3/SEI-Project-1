// const game = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')
// const foodEaten = document.getElementById('btmRight')
     
// const manateeImg = new Image()
// manateeImg.src = ('../js/images/manatee.png')

// function drawPlayer(img, dX, dY, dW, dH) {
//     ctx.drawImage(img, dX, dY, dW, dH)
//     this.alive = true
// }

// let player = {
//     x: 25,
//     y: 25,
//     width: 25,
//     height: 12,
//     speed: 10,
//     alive: true
// }

// const foodImg = new Image()
// foodImg.src = ('../js/images/foodPixil.png')

// function foodElem(url, x, y) {
//     this.url = url
//     this.x = x
//     this.y = y
//     this.alive = true

//     this.render = function () {
//         ctx.drawImage(this.url, this.x, this.y,)
//     }
// }

// const foodNum = 5
// let foodArr = []

// // loop through empty food arr
// // for (let i = 0; i < foodNum; i++) {
// //     foodArr.push({
// //         x: Math.random()*300
// //         y: Math.random()*150
// //     })
// // }

// const appleImg = new Image()
// appleImg.src = ('../js/images/applePixil.png')

// const sodaImg = new Image()
// sodaImg.src = ('../js/images/sodaPixil.png')

// const burgerImg = new Image()
// burgerImg.src = ('../js/images/burgerPixil.png')

// function gameElem(url, x, y) {
//     this.url = url
//     this.x = x
//     this.y = y
//     this.alive = true

//     this.render = function () {
//         ctx.drawImage(this.url, this.x, this.y,)
//     }
// }

// let foodOne = new foodElem(foodImg, 200, 100)
// let foodTwo = new foodElem(foodImg, 275, 45)
// let foodThree = new foodElem(foodImg, 300, 130)
// let trashOne = new gameElem(sodaImg, 75, 0)
// let trashTwo = new gameElem(appleImg, 150, 0)
// let trashThree = new gameElem(sodaImg, 215, 0)
// let trashFour = new gameElem(burgerImg, 250, -15)

// // allow player to move manatee around with with arrow keys
// let movePlayer = (e) => {
// switch (e.key) {
//     // left arrow
//     case ('ArrowLeft'):
//         player.x -= player.speed
//         if (player.x <= 25) {
//             player.x = 25
//             foodOne.x += 1
//             foodTwo.x += 1
//             foodThree.x += 1
//             trashOne.x += 1
//         }
//         break
//     // up arrow
//     case ('ArrowUp'):
//         player.y -= player.speed
//         if (player.y <= 10) {
//             player. y = 10
//         }
//         break
//     // right arrow
//     case ('ArrowRight'):
//         player.x += player.speed
//         if (player.x >= 245) {
//             player.x = 245
//             foodOne.x -= 1
//             foodTwo.x -= 1
//             foodThree.x -= 1
//             trashOne.x -= 1
//         }
//         break
//     // down arrow
//     case ('ArrowDown'):
//         player.y += player.speed
//         if (player.y >= 135) {
//             player.y = 135
//         }
//         break
//     }
// }

// // have trash falling down
// let trashMove = () => {
//     trashOne.y += Math.random()
//     if (trashOne.y >=175) {
//         trashOne.y = 0
//     }
//     trashTwo.y += .33
//     if (trashTwo.y >=225) {
//         trashTwo.y = 0
//     }
//     trashThree.y += Math.random()
//     if (trashThree.y >= 190) {
//         trashThree.y = 0
//     }
//     trashFour.y += .25
//     if (trashFour.y >= 175) {
//         trashFour.y = -10
//     } 
// }

// // create collsion detection for when player collects food
// // const detectFoodEaten = () => {
// //     if (
// //         player.x < foodOne.x + foodOne.width &&
// //         player.x + player.width > foodOne.x &&
// //         player.y < foodOne.y + foodOne.height &&
// //         player.y + player.height > foodOne.y
// //     ) {
// //         foodOne.alive = false
// //     }
// // }

// function animate() {
//     // clears canvas
//     ctx. clearRect(0, 0, canvas.width, canvas.height)
//     trashOne.render()
//     // if (foodOne.alive) {
//     //     foodOne.render()
//     //     detectFoodEaten()
//     // }
//     foodOne.render()
//     foodTwo.render()
//     foodThree.render()
//     trashTwo.render()
//     trashThree.render()
//     trashFour.render()
//     trashMove()
//     drawPlayer(manateeImg, player.x, player.y, player.width, player.height)
//     requestAnimationFrame(animate)
// }

// animate()

// document.addEventListener('keydown', movePlayer)




// ARRAYS VERSION
const game = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const foodEaten = document.getElementById('btmRight')
     
const manateeImg = new Image()
manateeImg.src = ('../js/images/manatee.png')

// create manatee
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

// food class constructor
function foodElem(url, x, y) {
    this.url = url
    this.x = x
    this.y = y
    this.alive = true

    this.render = function() {
        ctx.drawImage(this.url, this.x, this.y)
    }
}

// spawn 10 food items randomly on canvas
let foodArr = []
function addFood () {
    for (i = 0; i <= 10; i++) {
    let food = new foodElem(foodImg, (Math.random()*300), (Math.random()*150))
    foodArr.push(food)
    }
}

console.log(foodArr)

// being called down in animate function
function createFood() {
    // if (foodArr.length <= 10) {
        addFood()
        let newFood = {}
        console.log(newFood)
        // Loop over each array to render each item
        for (let i = 0; i < 10; i++) {
            newFood = foodArr[i]
            newFood.render()
        }
    }
}
const appleImg = new Image()
appleImg.src = ('../js/images/applePixil.png')

const sodaImg = new Image()
sodaImg.src = ('../js/images/sodaPixil.png')

const burgerImg = new Image()
burgerImg.src = ('../js/images/burgerPixil.png')

function trashElem(url, x, y) {
    this.url = url
    this.x = x
    this.y = y
    this.alive = true

    this.update = function() {
        this.y += Math.random()
    }

    this.render = function () {
        ctx.drawImage(this.url, this.x, this.y)
    }
}

let trashArr = []

// function spawnTrash() {
//     setInterval(() => {
//         const url = burgerImg
//         const x = 200
//         const y = 0
//         const velocity = {
//             x: 1,
//             y: 1
//         }
//         trashArr.push(new gameElem(url, x, y, velocity))

//         // console.log(trashArr)
//     }, 3000)
// } 

// let trashMove = () => {
//     trashOne.y += Math.random()
//     if (trashOne.y >=175) {
//         trashOne.y = 0
//     }
// }

// allow player to move manatee with arrow keys
let movePlayer = (e) => {
    switch (e.key) {
        case ('ArrowLeft'):
            player.x -= player.speed
            if (player.x <= 25) {
                player.x = 25
            }
            break
        case ('ArrowUp'):
            player.y -= player.speed
            if (player.y <= 10) {
                player. y = 10
            }
            break
        case ('ArrowRight'):
            player.x += player.speed
            if (player.x >= 245) {
                player.x = 245
            }
            break
        case ('ArrowDown'):
            player.y += player.speed
            if (player.y >= 135) {
                player.y = 135
            }
            break
        }
    }

// Refactor my collision detection so that it has a param to reuse for multiple items
// Loop over food array and call detection on each of those
// Splice the food from the array

function animate() {
    // clears canvas
    ctx. clearRect(0, 0, canvas.width, canvas.height)
    createFood()
    drawPlayer(manateeImg, player.x, player.y, player.width, player.height)
    requestAnimationFrame(animate)
}

animate()
// spawnTrash()

document.addEventListener('keydown', movePlayer)