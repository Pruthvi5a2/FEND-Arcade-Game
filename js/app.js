// Enemies our player must avoid
var Enemy = function(x, y, fastness) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.y = y;
    this.x = x;
    this.fastness = fastness;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.fastness * dt;
    if (this.x == 0) {
        this.fastness = 100 + Math.floor(Math.random() * 200);
    }
    if (this.x > 500) {
        this.x = 0;
        this.fastness = 100 + Math.floor(Math.random() * 200);
    }
    // Collision of Player with Enemy
    if (this.x + 70 > player.x && this.x < player.x + 70 && player.y < this.y + 70 && player.y + 70 > this.y) {
        player.x = 200;
        player.y = 400;
        points = 1;
        scores = 0;
        scoreCard.innerHTML = "<h2>Total score :" + scores + "</h2>";
        player.sprite = 'images/char-boy.png';
        // Pop-up showing Game loss and refreshing of game
        Swal.fire({
            title: "Oops",
            html: 'You lost the Game',
            confirmButtonText: 'Play Again',
        }).then(() => {
            document.location.reload();
        });
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Player {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }
}

// class for an update(), render()
Player.prototype.update = function(dt) {

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [];

// Location of enemies on canvas
let enemyLocation = [60, 143, 226];
enemyLocation.map((positionOfY) => {
    var enemyItem = new Enemy(0, positionOfY, 150);
    allEnemies.push(enemyItem);
})

// variables used to add score and animations to palyer
let points = 1;
let design = 0;
let scores = 0;
let scoreCard = document.getElementById('score');

// Placing palyer on canvas
let player = new Player(200, 400);

// a handleInput() method
Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            this.x = this.x - 101;
            if (this.x < 0) {
                this.x = 0;
            }
            break;
        case 'right':
            this.x = this.x + 101;
            if (this.x > 400) {
                this.x = 400;
            }
            break;
        case 'up':
            this.y = this.y - 85;
            if (this.y < 0) {
                setTimeout(() => {
                    this.x = 200;
                    this.y = 400;
                    points = points + 1;
                }, 130);
                // adding of score
                scores = scores + 20;
                scoreCard.innerHTML = "<h2>Total score :" + scores + "</h2>";
                // Pop-up after winnig the Game and refreshig of game
                if (scores >= 200) {
                    Swal.fire({
                        title: "Well Done",
                        html: 'You have successfully completed the Game',
                        confirmButtonText: 'Play Again',
                    }).then(() => {
                        document.location.reload();
                    });
                }
                // Code for changing Player's Sprite
                design = points % 2;
                if (design == 1) {
                    player.sprite = 'images/char-pink-girl.png';
                } else {
                    player.sprite = 'images/char-boy.png';
                }

            }
            break;
        case 'down':
            this.y = this.y + 85;
            if (this.y > 400) {
                this.y = 400;
            }
            break;

    }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
