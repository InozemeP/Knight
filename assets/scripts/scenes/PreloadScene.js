class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
        //
        // this.load.image('pl1', 'assets/sprites/player1.png');
        // this.load.image('pl2', 'assets/sprites/player2.png');

    }
    create() {
        // this.scene.start('Start');
    }
}