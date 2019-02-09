import 'phaser';

var game;

window.onload = function ()
{

	var gameConfig =
			{
				type            : Phaser.AUTO,
				width           : 800,
				height          : 600,
				backgroundColor : 0x22222,
				physics         : {
					default : "arcade",
				},
				scene           : [playGame],
			};

	game = new Phaser.Game(gameConfig);

	window.focus();
	resize();
	window.addEventListener("resize", resize, false);
};


// import mainMenu from './mainMenu.js';
import playGame from './playGame.js';


function resize()
{
	var canvas       = document.querySelector("canvas");
	var windowWidth  = window.innerWidth;
	var windowHeight = window.innerHeight;
	var windowRatio  = windowWidth / windowHeight;
	var gameRatio    = game.config.width / game.config.height;
	if ( windowRatio < gameRatio )
	{
		canvas.style.width  = windowWidth + "px";
		canvas.style.height = (windowWidth / gameRatio) + "px";
	}
	else
	{
		canvas.style.width  = (windowHeight * gameRatio) + "px";
		canvas.style.height = windowHeight + "px";
	}
}
