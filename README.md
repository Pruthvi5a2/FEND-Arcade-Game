# FEND-Arcade-Game


## I have followed the below steps to complete and run the Arcade Game

### Cloning and Downloading the Project

-   After reading the Instructions, I have downloaded the skeleton project of Classic Arcade Game from a link of GitHub which is provided by **Udacity**.
-   Then I unzipped the skeleton project folder.
-   I observed the following sub-folders (`css/style.css`,`images` folder,`js/app.js, js/engine.app, js/resources.js`,`index.html`(root file),`README.md`).

### Code Modifications

-   The css folder contain styles for body of the game. I changed the background.
-   Initially opening of `index.html` file gives us a blank page in browser. This is because of not implementing some part of the code in `app.js` file.
-   I now implemented the _Player_ class using _object oriented JavaScript_.
-   I defined co-ordinates and sprite image for _Player_ class. After the code modifications we get player can be seen on canvas of the game.
-   Then we defined direction keys for the Player  by using _switch case_. I defined the displacement length of each key. This code is written in _handleInput()_ method function.
-   After getting the player sprite code is implemented for displaying of _Enemy_ using _Object Oriented JavaScript_.
-   Function for displaying _Enemy_ is implemented. Then initial co-ordinates are allocated using an array.
-   For the movement of Enemies I have used `random()` method to get different speeds of Enemies.
-   Then Collison of _Enemy_ and _Player_ is determined by using the co-ordinates of the respective sprites.
-   So code is written such that whenever _Enemy_ and _Player_ sprites' co-ordinates are equal, the _Player_ sprit is restored to its starting position.
-   Eventually pop-ups are raised to show the game status.
-   Sweet Alert is used to raise this pop-ups.

### How To Run The Game

-   After opening the page, game start automatically.
-   Use directional keys(arrow keys) to move in on the screen.
-   Try to escape from Bugs and reach to other side of the play area.

### How To Play Game

-   After staring the game, and try to reach the other side of the play area to increase your score.
-   As you reach the other side of the play area the _Player_ sprite returns to default position with sprite changed.
-   Use direction keys to move in play area.
-   If the _Total Score_ is 200 the game is finished and a pop-up is raised.
-   Else if you collide with the _Enemy_ your score gets _0_ and game is finished.
