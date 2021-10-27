const game = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const foodEaten = document.getElementById('btmRight')
     
const manateeImg = new Image()
manateeImg.src = ('../js/images/manatee.png')

// create manatee
function manatee(url, x, y, width, height) {
    this.url = url
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true

    this.render = function() {
        ctx.drawImage(this.url, this.x, this.y, this.width, this.height)
    }
}

let player = new manatee(manateeImg, 25, 25, 25, 12)

const foodImg = new Image()
foodImg.src = ('../js/images/foodPixil.png')

// food class constructor
function foodElem(url, x, y, width, height) {
    this.url = url
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true

    this.render = function() {
        ctx.drawImage(this.url, this.x, this.y, this.width, this.height)
    }
}

// spawn 10 food items randomly on canvas
let foodArr = []
function addFood () {
    for (let i = 0; i <= 10; i++) {
    let food = new foodElem(foodImg, (Math.random() * 700) + 100, (Math.random() * 132), 14, 18)
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
function trashElem(url, x, y, width, height) {
    this.url = url
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true

    this.update = function() {
        this.y += Math.random()
    }

    this.render = function () {
        ctx.drawImage(this.url, this.x, this.y, this.width, this.height)
    }
}

let appleArr = []
let sodaArr = []
let burgerArr = []

// spawn trash at random x-axis points
function addTrash () {
    for (let i = 0; i <= 5; i++) {
        let apple = new trashElem(appleImg, Math.floor((Math.random() * 700)) + 100, -10, 16, 18)
        appleArr.push(apple)
    }
    for (let i = 0; i <= 5; i++) {
        let soda = new trashElem(sodaImg, Math.floor((Math.random() * 700)) + 100, -10, 15, 19)
        sodaArr.push(soda)
    }
    for (let i = 0; i <= 5; i++) {
        let burger = new trashElem(burgerImg, Math.floor((Math.random() * 700)) + 100, -10, 17, 16)
        burgerArr.push(burger)
    }
}

// have trash falling down screen at different speeds
function fallingTrash () {
    for (let i = 0; i < appleArr.length; i++) {
        if (player.alive) {
            appleArr[i].y += (Math.random())
            if (appleArr[i].y > 170) {
                appleArr[i].y = -15
                fallingTrash()
            }
        }
    }
    for (let i = 0; i < sodaArr.length; i++) {
        if (player.alive) {
            sodaArr[i].y += (Math.random())
            if (sodaArr[i].y > 190) {
                sodaArr[i].y = -0
                fallingTrash()
            }
        }
    }
    for (let i = 0; i < burgerArr.length; i++) {
        if (player.alive) {
            burgerArr[i].y += (Math.random())
            if (burgerArr[i].y > 200) {
                burgerArr[i].y = -25
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
    for (let i = 0; i < foodArr.length; i++) {
        if (player.x <= 25) {
            foodArr[i].x += 1
        }
    }
    for (let i = 0; i < appleArr.length; i++) {
        if (player.x <= 25) {
            appleArr[i].x += 1
        }
    }
    for (let i = 0; i < sodaArr.length; i++) {
        if (player.x <= 25) {
            sodaArr[i].x += 1
        }
    }
    for (let i = 0; i < burgerArr.length; i++) {
        if (player.x <= 25) {
            burgerArr[i].x += 1
        }
    }
}

function moveGameElemLeft () {
    for (let i = 0; i < foodArr.length; i++) {
        if (player.x >= 245) {
            foodArr[i].x -= 1
        }
    }
    for (let i = 0; i < appleArr.length; i++) {
        if (player.x >= 245) {
            appleArr[i].x -= 1
        }
    }
    for (let i = 0; i < sodaArr.length; i++) {
        if (player.x >= 245) {
            sodaArr[i].x -= 1
        }
    }
    for (let i = 0; i < burgerArr.length; i++) {
        if (player.x >= 245) {
            burgerArr[i].x -= 1
        }
    }
}

// allow player to move manatee with arrow keys
let movePlayer = (e) => {
    switch (e.key) {
        case ('ArrowLeft'):
            player.x -= 10
            if (player.x <= 25) {
                player.x = 25
                moveGameElemRight()
            }
            break
        case ('ArrowUp'):
            player.y -= 10
            if (player.y <= 10) {
                player. y = 10
            }
            break
        case ('ArrowRight'):
            player.x += 10
            if (player.x >= 245) {
                player.x = 245
                moveGameElemLeft()
            }
            break
        case ('ArrowDown'):
            player.y += 10
            if (player.y >= 135) {
                player.y = 135
            }
    }
}


// set conditions for collision detection 

// const detectFoodEaten = (foodItem) => {
    //     foodArr.forEach

// create collision detection for when player collects food
const detectFoodEaten = () => {
    for (let i = 0; i < foodArr.length; i++) {
        if (
            player.x < foodArr[i].x + foodArr[i].width &&
            player.x + player.width > foodArr[i].x &&
            player.y < foodArr[i].y + foodArr[i].height &&
            player.y + player.height > foodArr[i].y
        ) {
            // eat the food
            foodArr[i].alive = false
            // remove food from foodArr once eaten
            foodArr.splice([i])
        }
    }
}

const detectScarHit = () => {
    for (let i = 0; i < appleArr.length; i++) {
        if (
            player.x < appleArr[i].x + appleArr[i].width &&
            player.x + player.width > appleArr[i].x &&
            player.y < appleArr[i].y + appleArr[i].height &&
            player.y + player.height > appleArr[i].y
        ) {
            // eat the food
            player.x = 25
            player.y = 25
        }
    }
    for (let i = 0; i < sodaArr.length; i++) {
        if (
            player.x < sodaArr[i].x + sodaArr[i].width &&
            player.x + player.width > sodaArr[i].x &&
            player.y < sodaArr[i].y + sodaArr[i].height &&
            player.y + player.height > sodaArr[i].y
        ) {
            // eat the food
            player.x = 25
            player.y = 25
        }
    }
    for (let i = 0; i < burgerArr.length; i++) {
        if (
            player.x < burgerArr[i].x + burgerArr[i].width &&
            player.x + player.width > burgerArr[i].x &&
            player.y < burgerArr[i].y + burgerArr[i].height &&
            player.y + player.height > burgerArr[i].y
        ) {
            // eat the food
            player.x = 25
            player.y = 25
        }
    }
}

// Refactor my collision detection so that it has a param to reuse for multiple items (for each loop?)

// Loop over food array and call detection on each of those
// Splice the food from the array (arrName.splice[i])

function animate() {
    // clears canvas
    ctx. clearRect(0, 0, canvas.width, canvas.height)
    detectFoodEaten()
    createTrash()
    fallingTrash()
    // if (player.alive) {
    //     createFood()
    //     detectFoodEaten()
    // }
    createFood()
    detectScarHit()
    player.render()
    requestAnimationFrame(animate)
}

animate()

// let createTrashInterval = setInterval(createTrash, 1000)
document.addEventListener('keydown', movePlayer)