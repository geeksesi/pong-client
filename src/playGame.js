class playGame extends Phaser.Scene
{

	constructor()
	{
		super({ key : 'playGame' });
		this.ball_released = false;
		this.ball_speed    = 200;
	}


	preload()
	{

		this.load.image("paddle", "../assets/paddle.png");
		this.load.image("ball", "../assets/ball.png");


	}


	create()
	{

		this.player1 = this.new_paddle(20, this.game.config.height / 2);
		this.player2 = this.new_paddle((this.game.config.width - 30), this.game.config.height / 2);
		this.ball    = this.new_ball((this.game.config.width / 2), (this.game.config.height / 2));
		this.set_ball();

	}

	update()
	{
		this.check_goal();
		this.colloid();
		this.control_player1();
		this.control_player2();
	}


	new_paddle(x, y)
	{
		let paddle = this.physics.add.sprite(x, y, "paddle");
		paddle.setOrigin(0.5, 0.5);
		paddle.setCollideWorldBounds(true);
		paddle.setBounce(1, 1);
		paddle.setImmovable(true);
		return paddle;
	}

	new_ball(x, y)
	{
		let ball = this.physics.add.sprite(x, y, "ball");
		ball.setOrigin(0.5, 0.5);
		ball.setCollideWorldBounds(true);
		ball.setBounce(1, 1);
		return ball;
	}

	set_ball()
	{
		if ( this.ball_released )
		{
			this.ball.x               = this.game.config.width / 2;
			this.ball.y               = this.game.config.height / 2;
			this.ball.body.velocity.x = 0;
			this.ball.body.velocity.y = 0;
			this.ball_released        = false;
			this.ball_speed           = 200;
			this.set_ball();
		}
		else
		{

			this.set_speed("init");
			this.ball_released = true;
		}
		// console.log("random : "+this.ball.body.velocity.y);

	}

	colloid()
	{
		this.physics.add.collider(this.ball, this.player1, null, () =>
		{
			let dif = 0;
			if ( this.ball.y < this.player1.y )
			{
				dif = this.ball.y - this.player1.y;
				this.set_speed(dif);
			}
			else if ( this.ball.y > this.player1.y )
			{
				dif = this.ball.y - this.player1.y;
				this.set_speed(dif);
			}
			else
			{
				this.set_speed(dif);
			}
		});
		this.physics.add.collider(this.ball, this.player2, null, () =>
		{
			let dif = 0;
			if ( this.ball.y < this.player1.y )
			{
				dif = this.ball.y - this.player1.y;
				this.set_speed(dif);
			}
			else if ( this.ball.y > this.player1.y )
			{
				dif = this.ball.y - this.player1.y;
				this.set_speed(dif);
			}
			else
			{
				this.set_speed(dif);
			}
		});
	}

	check_goal()
	{
		if ( this.ball.x < 20 )
		{
			this.set_ball();
		}
		else if ( this.ball.x > 780 )
		{
			this.set_ball();
		}
	}

	set_speed(dif)
	{
		let speedx = 0;
		let speedy = 0;
		if ( dif === "init" )
		{
			const make_mirror = [1, -1];
			const speeds      = [1, 150, 70, 80, 90, 20, 46, 110, 220, 300, 325, 254, 128, 256, 200, 140, 130, 178, 256, 64, 16, 130, 144, 156, 250, 132, 192, 17, 150, 175];
			speedx            = (make_mirror[Math.floor(Math.random() * make_mirror.length)]) * (speeds[Math.floor(Math.random() * speeds.length)] + this.ball_speed);
			speedy            = (make_mirror[Math.floor(Math.random() * make_mirror.length)]) * (speeds[Math.floor(Math.random() * speeds.length)] + this.ball_speed);
			this.ball.setVelocityX(speedx);
			this.ball.setVelocityY(speedy);
		}
		else if ( dif === 0 )
		{
			speedy = this.ball.velocityY + 10;
			this.ball.setVelocityY(speedy);
		}
		else if ( dif > 0 )
		{
			speedy = (dif * 10);
			this.ball.setVelocityY(speedy);
		}
		// else
		// {
		// }
	}


	control_player1()
	{

		let keys = this.input.keyboard.addKeys("UP,DOWN");
		if ( keys.DOWN.isDown )
		{
			if ( this.player1.y < 472 )
			{
				this.player1.y += 8;
			}
		}
		if ( keys.UP.isDown )
		{
			if ( this.player1.y > 128 )
			{
				this.player1.y -= 8;
			}
		}

	}

	control_player2()
	{
		let keys = this.input.keyboard.addKeys("S,W");
		if ( keys.S.isDown )
		{
			if ( this.player1.y < 472 )
			{
				this.player1.y += 8;
			}
		}
		if ( keys.W.isDown )
		{
			if ( this.player1.y > 128 )
			{
				this.player1.y -= 8;
			}
		}

	}


}


export default playGame;
