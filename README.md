# Save the Manatee!
## Do You Have the Humanatee to Save Manny?
Manataees are back on the endangered species list! Help Manny find enough food without crashing into any trash. 
<!-- Don't forget to come up for air every now and then! -->

## Tech Stack
* HTML/CSS - Canvas
* JavaScript

## Wireframes 
Start screen
![Wireframe Start](/css/images/hungry%20to%20full%20meter%20bar.png)
Playing screen
![Wireframe](css/images/game%20wireframe.png)

## MVP Goals
* Render a start screen with game instructions and a start button
* Render game screen/canvas with the manatee's oxygen and hunger meter
* Render food randomly along the canvas
* Render trash randomly falling down in the ocean
* Manatee can move around to find food/dodge trash with WASD keys
* As manatee collects food, hunger bar incremently increases to full
* Manatee dies if it collides with trash 3 times
* Manatee wins/is saved if hunger meter reaches full

## Stretch Goals
* Adding music to set sea vibes with option button to mute
* Add levels that increase difficulty by having food spawn slower and/or trash falling faster
* Bootstrap styling
* Adding oxygen meter so as manatee is underwater, oxygen incremently decreases, and as manatee is at surface, oxgyen incremently increases
    * If manatee oxygen bar reaches zero, manatee will die

## Potential Roadblocks
* Figuring out collision detection math
* Random spawning of trash and food