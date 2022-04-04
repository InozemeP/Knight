let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

let game = new Phaser.Game(config);