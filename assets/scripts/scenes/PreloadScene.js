class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
        this.load.atlas('knight', 'assets/sprites/knight.png', 'assets/sprites/knight.json');
        this.load.spritesheet('tiles', 'assets/sprites/fantasy-tiles.png', { frameWidth: 64, frameHeight: 64 });

    }
    create() {
        this.scene.start('Game');
    }
}