class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    };

    create() {
        this.createBackground();
        this.createKnightAnimation();
        this.createKnight();
        this.createEventOnKnight();
    };

    createBackground() {
        this.bg = this.add.sprite(0, 0, 'bg').setOrigin(0);

        for (let i = 0; i < 13; i++)
        {
            this.add.image(64 * i, 536, 'tiles', 1).setOrigin(0);
        }
    };

    createKnightAnimation() {
    const attackConfig = {
        key: 'attack',
        frames: this.anims.generateFrameNames('knight', { prefix: 'attack_B/frame', start: 0, end: 12, zeroPad: 4 }),
        frameRate: 16
    };

    this.anims.create(attackConfig);
};

    createKnight() {
    const lancelot = this.add.sprite(300, 536, 'knight', 'attack_B/frame0000')
    lancelot.setOrigin(0.5, 1);
    lancelot.setScale(8);
};

    createEventOnKnight() {
        this.input.on('pointerdown', function () {
            lancelot.play('attack', true);
        });
    };


}

