/**
 *  Play Game file
 */


// PlayGame scene
class playGame extends Phaser.Scene
{

	constructor()
	{
		super({ key : 'playGame' });
		// this.game = game;
	}

	preload()
	{

		// loading assets
		this.load.image("paddle", "../assets/paddle.png");
		this.load.image("ball", "../assets/ball.png");
	}

	create()
	{

		//change background
		// this.bg = this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, 750, 1334, 'bg');
		this.player1 = this.create_paddle(12 / 2, 624);
		this.player2 = this.create_paddle(12 / 2, 16);
	}

	create_paddle(x, y)
	{
		let paddle = this.game.add.sprite(x, y, "paddle");
		// paddle.anchor.setTo(0.5,0.5);
		// paddle.body.collideWorldBounds = true;
		// paddle.body.bounce.setTo(1,1);
		// paddle.body.immovable = true;
	}

	// method to be executed at each frame
	update()
	{

	}
}


export default playGame;
