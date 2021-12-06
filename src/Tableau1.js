/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)

        //bg 1 (gris légèrement flou)
        this.load.image('bg-wooden', 'assets/level/background-1/bg-wooden-bridge.png');
        this.load.image('g-big-stone', 'assets/level/ground/g-big-stone.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('g-left', 'assets/level/ground/g-left.png');
        this.load.image('g-seesaw--bar', 'assets/level/ground/g-seesaw--bar.png');
        this.load.image('g-seesaw-base', 'assets/level/ground/g-seesaw-base.png');
        this.load.image('g-water', 'assets/level/ground/g-water.png');
        this.load.image('g-wooden-bridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('treefall', 'assets/level/ground/g-fellen-tree-1.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++){
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png');
        }


        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let e=1;e<=3;e++) {
            this.load.image('bg-animation-'+e, 'assets/level/background-2/bg-animation/bg-animation-'+e+'.png');
        }

        for(let e=1;e<=11;e++) {
            this.load.image('z' + e, 'assets/Zobmie/z' + e + '.png');
        }

        for(let e=1;e<=2;e++){
            this.load.image('bg-box-'+e, 'assets/level/background-1/bg-box-'+e+'.png');
        }

        for(let e=1;e<=2;e++){
            this.load.image('bg-fellen-tree-'+e, 'assets/level/background-1/bg-fellen-tree-'+e+'.png');
        }

        for(let e=1;e<=4;e++){
            this.load.image('bg-grass-'+e, 'assets/level/background-1/bg-grass-'+e+'.png');
        }

        for(let e=1;e<=2;e++){
            this.load.image('bg-mushroom-'+e, 'assets/level/background-1/bg-mushroom-'+e+'.png');
        }

        for(let e=1;e<=5;e++){
            this.load.image('bg-stone-'+e, 'assets/level/background-1/bg-stone-'+e+'.png');
        }

        for(let e=1;e<=4;e++){
            this.load.image('bg-terrain-'+e, 'assets/level/background-1/bg-terrain-'+e+'.png');
        }

        for(let e=1;e<=3;e++){
            this.load.image('bg-tree-'+e, 'assets/level/background-1/bg-tree-'+e+'.png');
        }
        for(let e=1;e<=4;e++){
            this.load.image('bg2-terrain-'+e, 'assets/level/background-2/bg2-terrain-'+e+'.png');
        }

        for(let e=1;e<=3;e++){
            this.load.image('bg2-tree-'+e, 'assets/level/background-2/bg2-tree-'+e+'.png');
        }

        for(let e=1;e<=3;e++){
            this.load.image('frame'+e, 'assets/level/filters/bloody/frame'+e+'.png');
        }

        for(let e=1;e<=2;e++){
            this.load.image('g-box-'+e, 'assets/level/ground/g-box-'+e+'.png');
        }

        for(let e=1;e<=5;e++){
            this.load.image('g-grass-'+e, 'assets/level/ground/g-grass-'+e+'.png');
        }

        for(let e=1;e<=2;e++){
            this.load.image('g-mushroom'+e, 'assets/level/ground/g-mushroom'+e+'.png');
        }
        for(let e=1;e<=2;e++){
            this.load.image('g-spike-'+e, 'assets/level/ground/g-spike-'+e+'.png');
        }

        for(let e=1;e<=5;e++){
            this.load.image('g-stone-'+e, 'assets/level/ground/g-stone-'+e+'.png');
        }

        for(let e=1;e<=3;e++){
            this.load.image('g-tree-'+e, 'assets/level/ground/g-tree-'+e+'.png');
        }

        for(let e=1;e<=2;e++){
            this.load.image('g-tree-platform-'+e, 'assets/level/ground/g-tree-platform-'+e+'.png');
        }

        for(let e=1;e<=3;e++){
            this.load.image('g-vine-'+e, 'assets/level/ground/g-vine-'+e+'.png');
        }

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimation1=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        this.filterFilm = this.add.sprite(0, 0, 'bg-animation-2').setOrigin(0,0);
        this.anims.create({
            key: 'bg-animation',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: 1
        });
        this.filterFilm.play('bg-animation');



        //--------------background 2 (tout au fond et flou)--------------------
        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-200,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(360,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.scale=0.5


        let bg2Tree3=this.add.image(750,-30, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.scale=0.7
        bg2Tree3.angle=-5; //pencher l'arbre de -5 degrès

        let bg2terrain1=this.add.image(740,450, 'bg2-terrain-1').setOrigin(0,1);
        this.bg2Container.add(bg2terrain1);
        bg2terrain1.scale=0.6

        //--------------background 1 (gris) --------------------

        /**
        *let bgterrain1=this.add.image(400,190, 'bg-terrain-1').setOrigin(0,0);
        *this.bg2Container.add(bgterrain1);
        */


        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bgterrain1=this.add.image(690,300, 'bg-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bgterrain1);
        bgterrain1.scale= 0.38

        let bgwoodenbridge=this.add.image(1050,360, 'bg-wooden').setOrigin(0,1);
        this.bg2Container.add(bgwoodenbridge);

        let bgterraain1=this.add.image(860,300, 'bg-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bgterraain1);
        bgterraain1.scale= 0.38

        let zombie2=this.add.image(1056,480, 'z2').setOrigin(0,1);

        let bgterrain4=this.add.image(550,590, 'bg2-terrain-4').setOrigin(0,1);
        this.bg2Container.add(bgterrain4);
        bgterrain4.scale= 0.3

        let bgterrain3=this.add.image(-300,210, 'bg-terrain-3').setOrigin(0,0);
        this.bg2Container.add(bgterrain3);
        bgterrain3.scale= 0.8

        let bgtree2=this.add.image(890,480, 'bg-tree-2').setOrigin(0,1);
        this.bg2Container.add(bgtree2);
        bgtree2.scale= 0.8

        let bgtree3=this.add.image(150,300, 'bg-tree-3').setOrigin(0,1);
        this.bg2Container.add(bgtree3);
        bgtree3.scale= 0.6

        let bgtree1=this.add.image(-25,300, 'bg-tree-1').setOrigin(0,1);
        this.bg2Container.add(bgtree1);
        bgtree1.scale= 0.6


        let bg1Terrain3=this.add.image(-300,5, 'bg1-terrain-3').setOrigin(0,1);
        this.bg1Container.add(bg1Terrain3);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         * let tree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);
         tree1.setTintFill(0xFF0000); // pratique pour dbugger
         this.groundContainer.add(tree1);
         */

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions


        let gwater=this.add.image(400,660, 'g-water').setOrigin(0,1);
        this.groundContainer.add(gwater);
        gwater.scale= 1.1

        let ggraaas3=this.add.image(490,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggraaas3);
        ggraaas3.scale= 1.9

        let ggraaaas3=this.add.image(400,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggraaaas3);
        ggraaaas3.scale= 2



        let ggr3=this.add.image(576,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggr3);
        ggr3.scale= 2

        let ggrr3=this.add.image(668,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggrr3);
        ggrr3.scale= 2


        let ggaaas3=this.add.image(1640,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggraaas3);
        ggaaas3.scale= 2

        let ggaaaas3=this.add.image(1550,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggaaaas3);
        ggaaaas3.scale= 2



        let gg3=this.add.image(1370,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(gg3);
        gg3.scale= 2

        let ggrrr3=this.add.image(1460,540, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(ggrrr3);
        ggrrr3.scale= 2


        let gMid1=this.add.image(-100,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);



        /**
         * Terrain 2
         * gMid1.x+gMid1.width+1
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(10,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */

        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.Image}
         */


        let gtree2=this.add.image(238,450, 'g-tree-2').setOrigin(0,1);
        this.groundContainer.add(gtree2);
        gtree2.scale= 0.8

        let gtreee2=this.add.image(10,450, 'g-tree-2').setOrigin(0,1);
        this.groundContainer.add(gtreee2);
        gtreee2.scale= 1
        gtreee2.flipX=true

        let gmushroom1=this.add.image(140,350, 'g-mushroom1').setOrigin(0,1);
        this.groundContainer.add(gmushroom1);
        gmushroom1.scale= 1
        gmushroom1.angle=10;

        let gstone1=this.add.image(280,365, 'g-stone-1').setOrigin(0,1);
        this.groundContainer.add(gstone1);
        gstone1.scale= 1.5
        gstone1.flipX=true

        let gtreee1=this.add.image(860, 440, 'g-tree-1' ).setOrigin(0, 1);
        this.groundContainer.add(gtreee1)
        gtreee1.angle= -10
        gtreee1.flipX=true

        let gwoodenbridge=this.add.image(370,390, 'g-wooden-bridge').setOrigin(0,1);
        this.groundContainer.add(gwoodenbridge);
        gwoodenbridge.scale= 0.9
        gwoodenbridge.angle= 4

        let gbox=this.add.image(470,356, 'g-box-2').setOrigin(0,1);
        this.groundContainer.add(gbox)
        gbox.scale= 0.6
        gbox.angle= 10

        let gleft=this.add.image(770,780, 'g-left').setOrigin(0,1);
        this.groundContainer.add(gleft);

        let gstone4=this.add.image(800,410, 'g-stone-4').setOrigin(0,1);
        this.groundContainer.add(gstone4)
        gstone4.scale= 0.9

        let gmidi=this.add.image(900,777, 'gMid').setOrigin(0,1);
        this.groundContainer.add(gmidi);

        let gii=this.add.image(1000,777, 'gMid').setOrigin(0,1);
        this.groundContainer.add(gii);

        let gstoone1=this.add.image(940,400, 'g-stone-1').setOrigin(0,1);
        this.groundContainer.add(gstoone1);
        gstoone1.scale= 2

        let griri=this.add.image(1180,777, 'gRight').setOrigin(0,1);
        this.groundContainer.add(griri);
        gstoone1.scale= 2

        let gmushro=this.add.image(1180,395, 'g-mushroom1').setOrigin(0,1);
        this.groundContainer.add(gmushro);
        gmushro.scale= 0.6
        gmushro.angle=10;

        let treefal=this.add.image(1280,395, 'treefall').setOrigin(0,1);
        this.groundContainer.add(treefal);
        treefal.scale= 1
        treefal.angle=10;

        let gleeft=this.add.image(1700,820, 'g-left').setOrigin(0,1);
        this.groundContainer.add(gleeft);

        let zombie1=this.add.image(590,380, 'z1').setOrigin(0,1);
        this.groundContainer.add(zombie1);
        zombie1.angle=9;

        let vine1=this.add.image()








        /**
         * filtre type film au premier plan
         *this.filterFilm = this.add.sprite(10, 400, 'bg-animation-2').setOrigin(0,0);
         this.anims.create({
            key: 'bg-animation',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: 1
        });
         this.filterFilm.play('bg-animation');
         *
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 40,
            repeat: -1
        });
        this.filterFilm.play('film');

        this.filterFilm = this.add.sprite(965, 0, 'filterFilm1').setOrigin(0,0);
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 40,
            repeat: -1
        });
        this.filterFilm.play('film');

        this.filterFilm = this.add.sprite(0, 0, 'blood').setOrigin(0,0);
        this.anims.create({
            key: 'blood',
            frames: [
                {key:'frame1'},
                {key:'frame2'},
                {key:'frame3'},
            ],
            frameRate: 40,
            repeat: -1
        });
        this.filterFilm.play('blood');

        this.weatherrain = this.add.sprite(0, 0, 'rain').setOrigin(0,0);
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'frame1'},
                {key:'frame2'},
                {key:'frame3'},
            ],
            frameRate: 40,
            repeat: -1
        });
        this.filterFilm.play('rain');






        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1880, 2540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimation1.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}