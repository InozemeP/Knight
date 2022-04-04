class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    };

    create() {
        this.createBackground();
    };

    createBackground() {
        this.bg = this.add.sprite(0, 0, 'bg').setOrigin(0);
    };
}

