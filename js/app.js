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
    let food = new foodElem(foodImg, (Math.random() * 700) + 100, (Math.random() * 132))
    foodArr.push(food)
    }
}

console.log('this is the foodArr\n', foodArr)

// being called down in animate function
function createFood() {
    if (foodArr.length <= 10) {
        addFood()
    }
    // Loop over each array to render each item
    for (let i = 0; i < foodArr.length; i++) {
        foodArr[i].render()
    }
}

const appleImg = new Image()
appleImg.src = ('../js/images/applePixil.png')

const sodaImg = new Image()
sodaImg.src = ('../js/images/sodaPixil.png')

const burgerImg = new Image()
burgerImg.src = ('../js/images/burgerPixil.png')

// trash class constructor
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

let appleArr = []
let sodaArr = []
let burgerArr = []

function addTrash () {
    for (i = 0; i <= 5; i++) {
        let apple = new trashElem(appleImg, Math.floor((Math.random() * 700)) + 100, -10)
        appleArr.push(apple)
    }
    for (i = 0; i <= 5; i++) {
        let soda = new trashElem(sodaImg, Math.floor((Math.random() * 700)) + 100, -10)
        sodaArr.push(soda)
    }
    for (i = 0; i <= 5; i++) {
        let burger = new trashElem(burgerImg, Math.floor((Math.random() * 700)) + 100, -10)
        burgerArr.push(burger)
    }
}

function fallingTrash () {
    for (i = 0; i < appleArr.length; i++) {
        if (player.alive) {
            appleArr[i].y += (Math.random())
            if (appleArr[i].y > 150) {
                appleArr[i].y = 0
                fallingTrash()
            }
        }
    }
    for (i = 0; i < sodaArr.length; i++) {
        if (player.alive) {
            sodaArr[i].y += (Math.random())
            if (sodaArr[i].y > 150) {
                sodaArr[i].y = 0
                fallingTrash()
            }
        }
    }
    for (i = 0; i < sodaArr.length; i++) {
        if (player.alive) {
            burgerArr[i].y += (Math.random())
            if (burgerArr[i].y > 150) {
                burgerArr[i].y = 0
                fallingTrash()
            }
        }
    }
}

console.log('this is the appleArr\n', appleArr)
console.log('this is the sodaArr\n', sodaArr)
console.log('this is the burgerArr\n', burgerArr)

// being called down in animate function
function createTrash() {
    if (appleArr.length <= 5) {
        addTrash()
    }
    // Loop over each array to render each item
    for (let i = 0; i < appleArr.length; i++) {
        appleArr[i].render()
    }
    if (sodaArr.length <= 5) {
        addTrash()
    }
    // Loop over each array to render each item
    for (let i = 0; i < sodaArr.length; i++) {
        sodaArr[i].render()
    }
    if (burgerArr.length <= 5) {
        addTrash()
    }
    // Loop over each array to render each item
    for (let i = 0; i < burgerArr.length; i++) {
        burgerArr[i].render()
    }
}

// have game elem move in the opposite direction when player hits breakpoint
function moveGameElemRight () {
    for (i = 0; i < foodArr.length; i++) {
        if (player.x <= 25) {
            foodArr[i].x += 1
        }
    }
    for (i = 0; i < appleArr.length; i++) {
        if (player.x <= 25) {
            appleArr[i].x += 1
        }
    }
    for (i = 0; i < sodaArr.length; i++) {
        if (player.x <= 25) {
            sodaArr[i].x += 1
        }
    }
    for (i = 0; i < burgerArr.length; i++) {
        if (player.x <= 25) {
            burgerArr[i].x += 1
        }
    }
}

function moveGameElemLeft () {
    for (i = 0; i < foodArr.length; i++) {
        if (player.x >= 245) {
            foodArr[i].x -= 1
        }
    }
    for (i = 0; i < appleArr.length; i++) {
        if (player.x >= 245) {
            appleArr[i].x -= 1
        }
    }
    for (i = 0; i < sodaArr.length; i++) {
        if (player.x >= 245) {
            sodaArr[i].x -= 1
        }
    }
    for (i = 0; i < burgerArr.length; i++) {
        if (player.x >= 245) {
            burgerArr[i].x -= 1
        }
    }
}

// allow player to move manatee with arrow keys
let movePlayer = (e) => {
    switch (e.key) {
        case ('ArrowLeft'):
            player.x -= player.speed
            if (player.x <= 25) {
                player.x = 25
                moveGameElemRight()
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
                moveGameElemLeft()
            }
            break
        case ('ArrowDown'):
            player.y += player.speed
            if (player.y >= 135) {
                player.y = 135
            }
    }
}

// Refactor my collision detection so that it has a param to reuse for multiple items
// Loop over food array and call detection on each of those
// Splice the food from the array

function animate() {
    // clears canvas
    ctx. clearRect(0, 0, canvas.width, canvas.height)
    createFood()
    createTrash()
    fallingTrash()
    drawPlayer(manateeImg, player.x, player.y, player.width, player.height)
    requestAnimationFrame(animate)
}

animate()

document.addEventListener('keydown', movePlayer)