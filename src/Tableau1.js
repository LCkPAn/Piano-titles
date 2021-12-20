class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image("arb1", "asset/tree/arbre.png")
        this.load.image("arb2", "asset/tree/arbre2.png")
        this.load.image("arb3", "asset/tree/arbre3.png")
        this.load.image("lanon", "asset/tree/lanterneon.png")
        this.load.image("lanoff", "asset/tree/lanterneoff.png")
        this.load.image("fond", "asset/tree/fonds.png")
        this.load.image("etoile", "asset/tree/étoile.png")
        this.load.image("grenou", "asset/tree/grenouille.png")
        this.load.image("panda", "asset/tree/panda.png")
        this.load.image("dragon", "asset/tree/dragon.png")
        this.load.image("flame2", "asset/tree/flame2.png")
        this.load.image("flame1", "asset/tree/flame1.png")
        this.load.image("blue", "asset/tree/blue.png")
        this.load.image("bulle", "asset/tree/bubble.png")
        this.load.image("fly", "asset/tree/lanternfly.png")
    }

    getFrames(prefix, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }

/** crée l'animation de la flamme avec les 2 images flame1 et 2*/
    allAnims() {
        this.fireball = this.add.sprite(960, 620, "flame1")
        this.anims.create({
            key: 'flame',
            frames: this.getFrames('flame', 2),
            frameRate: 8,
            repeat: -1,
            showOnStart: true,


        })
        this.fireball.play("flame")
    }
    /** Permet au lanterne de s'éclairer et de monter vers le haut */
    createFly() {
        let x = Phaser.Math.Between(1, 1800)
        let y = 1000

        this.fly = this.add.sprite(x,y, 'fly')
        this.allTweens()
        


        /** Généere aléatoirement des particules de fleur de cerisier sur les arbres entre X et Y position */
    }
    createEnemyTwo() {
        this.bulle1 = this.physics.add.sprite(Phaser.Math.Between(1300, 1650), Phaser.Math.Between(90, 100), 'bulle')
    }

    createEnemy(){
        this.bulle2 = this.physics.add.sprite(Phaser.Math.Between(810, 990), Phaser.Math.Between(160, 180), 'bulle')
    }
    /** Démarre ce que j'ai besoin quand la page internet s'ouvre */
    create() {
        this.setlight=0
        this.lights.enable();
        this.lights.setAmbientColor(0x808080);

        this.allTweens()
        this.creerFormes()
        this.initKeyboard()
        this.etoile = this.add.sprite(-50, 300, "etoile")
        this.flamme = this.add.sprite(-70, 300, "flamme")
    }
/** crée la scène*/
    creerFormes() {

        this.fond = this.add.image(800, 380, "fond")
        this.fond.scale = 1.6

        this.arb1 = this.add.image(280, 300, "arb1");
        this.panda = this.add.image(320, 360, "panda")

        this.lanoff1 = this.add.image(310, 260, "lanoff")
        this.lanoff2 = this.add.image(110, 340, "lanoff")
        this.lanoff3 = this.add.image(380, 270, "lanoff")
        this.lanon = this.add.image(308, 260, "lanon")
        this.lanon.visible= false
        this.lanon1 = this.add.image(108, 340, "lanon")
        this.lanon1.visible= false
        this.lanon2 = this.add.image(380, 270, "lanon")
        this.lanon2.visible= false

        this.arb2 = this.add.image(850, 490, "arb2");
        this.dragon = this.add.image(920, 620, "dragon")


        this.arb3 = this.add.image(1450, 380, "arb3");
        this.grenou = this.add.image(1450, 520, "grenou")
    }
    /** ce qui permet à mes images de bouger */
allTweens(){
        this.tweens.add({
            targets: [this.fly, this.spotlight],
            y: -100,
            duration: 1500,
            ease: 'Linear',
            repeat: 0,
            delay: 0,
        })
    }
    tweensEtoile() {
        this.etoile.x = -50
        this.tweens.add({
            targets: this.etoile,
            x: 2000,
            duration: 2500,
            ease: 'Linear',
            repeat: 0,
            delay: 0,
        })
    }

    tweensSautPanda() {
        this.panda.x = 320
        this.tweens.add({
            targets: this.panda,
            y: 350,
            duration: 10,
            ease: 'Linear',
            repeat: 3,
            delay: 0,
            yoyo: true,
        })
    }

    tweensSautGrenou() {
        this.grenou.x = 1450
        this.tweens.add({
            targets: this.grenou,
            y: 350,
            duration: 10,
            ease: 'Linear',
            repeat: 3,
            delay: 0,
            yoyo: true,
        })
    }
    /** J'appuie sur une touche et une action ce passe*/
    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.tweensEtoile()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.tweensSautPanda()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.tweensSautGrenou()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.allAnims()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.lanon.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.lanon1.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.lanon2.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.createEnemy();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.lanon.visible=true
                    me.lanon1.visible=true
                    me.lanon2.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.createEnemyTwo();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.createFly();
                    break;



            }
        })
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.lanon.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.lanon1.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.lanon2.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.lanon.visible=false
                    me.lanon1.visible=false
                    me.lanon2.visible=false
            }
    })
}

}



