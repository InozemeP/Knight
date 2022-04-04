class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
        this.flowers = [];
    };

    create() {
        // this.createBackground();

        this.bg = this.add.sprite(0, 0, 'bg').setOrigin(0);

        for (let i = 0; i < 13; i++)
        {
            this.add.image(64 * i, 536, 'tiles', 1)
                .setOrigin(0);
        }



        //  Our attack animation
        const attackConfig = {
            key: 'attack',
            frames: this.anims.generateFrameNames('knight', { prefix: 'attack_B/frame', start: 0, end: 12, zeroPad: 4 }),
            frameRate: 16
        };

        this.anims.create(attackConfig);

        const lancelot = this.add.sprite(300, 536, 'knight', 'attack_B/frame0000')

        lancelot.setOrigin(0.5, 1);
        lancelot.setScale(8);


        //  And a click handler to start the animation playing
        this.input.on('pointerdown', function () {
            lancelot.play('attack', true);
        });
    };




// createBackground() {
    // };
}

