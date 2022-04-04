class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    };

    create() {
        this.createBackground();
        this.createKnightAnimation();
        this.createKnight();
        this.createEventOnKnight();
        this.createCursor();
    };

    createCursor() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createBackground() {
        this.bg = this.add.sprite(0, 0, 'bg').setOrigin(0);

        for (let i = 0; i < 13; i++)
        {
            this.add.image(64 * i, 536, 'tiles', 1).setOrigin(0);
        }
    };

    createKnightAnimation() {

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNames('knight', { prefix: 'attack_B/frame', start: 0, end: 12, zeroPad: 4 }),
            frameRate: 16,
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('knight', { prefix: 'idle/frame', start: 0, end: 5, zeroPad: 4 }),
            frameRate: 8,
            repeat: -1,
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('knight', { prefix: 'run/frame', start: 0, end: 7, zeroPad: 4 }),
            frameRate: 12,

        });

    };

    createKnight() {
        this.lancelot = this.physics.add.sprite(300, 536, 'knight', 'attack_B/frame0000')
        this.lancelot.setOrigin(0.5, 1);
        this.lancelot.scaleX = 1;
        this.lancelot.play('idle');
    };

    createEventOnKnight() {
        this.input.on('pointerdown', () => {
            if (this.lancelot.anims.getName() === 'idle')
            {
                this.lancelot.play('attack');
                this.lancelot.chain('idle');
            }
        });
    };

    update() {
        this.knightMove();
    }

    knightMove() {
        this.lancelot.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.lancelot.scaleX = -1;
            this.lancelot.setVelocityX(-100);
        } else if (this.cursors.right.isDown) {
            this.lancelot.scaleX = 1;
            this.lancelot.setVelocityX(100);

        }
    }

}

