import 'phaser';

const config = {
	type            : Phaser.AUTO,
	width           : 800,
	height          : 600,
	backgroundColor : 0xffffff,
	scene           : [playGame],
	// scene           : [mainMenu, playGame],
};


const game = new Phaser.Game(config);


// import mainMenu from './mainMenu.js';
import playGame from './playGame.js';
// playGame.game = game;



