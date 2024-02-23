import k from "./kaboom";
import loadControls from "./components/loaders/controls";
import loadCollisions from "./components/loaders/collisions";
import loadAnimations from './components/loaders/animations';
import loadBackground from "./components/loaders/background";
import loadWaves from "./components/waves";
import spawn from './components/spawner';
import loadUI from "./components/loaders/ui";

k.loadSprite("player", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 0,
          to: 19,
          loop: true,
      },
      walking: {
        from: 20,
        to: 29,
        loop: true,
        pingpong: true,
    },
  },
});

k.loadSprite("hand-motion", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
        from: 39,
        to: 39,
        loop: true,
      },
      throwing: {
          from: 30,
          to: 39,
          loop: true,
      },
  },
});


k.loadSprite("enemy", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 96,
          to: 99,
          loop: true,
          pingpong: true,
      },
  },
});

k.loadSprite("enemy-spark", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 92,
          to: 95,
          loop: true,
          pingpong: true,
      },
  },
});

k.loadSprite("bullet", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 90,
          to: 90,
      },
  },
});

k.loadSprite("energy", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 80,
          to: 80,
      },
  },
});

k.loadSprite("dirt", "./full-dirtv2.png");


k.loadSprite("arrow-button", "./arrow.png");
k.loadSprite("pointer", "./pointer.png");

// k.loadSprite('dirt', "./tilemap.png", {
//   sliceX: 7,
//   sliceY: 1,
//   anims: {
//       dirt: {
//         from: 0,
//         to: 0,
//       },
      // var1: {
      //   from: 1,
      //   to: 1,
      // },
      // var2: {
      //   from: 2,
      //   to: 2,
      // },
      // var3: {
      //   from: 3,
      //   to: 3,
      // },
      // var4: {
      //   from: 4,
      //   to: 4,
      // },
      // var5: {
      //   from: 5,
      //   to: 5,
      // },
      // var6: {
      //   from: 6,
      //   to: 6,
      // },
      // var7: {
      //   from: 7,
      //   to: 7,
      // },
//   },
// });

// k.addLevel([
//   "================$===========================================",
//   "================$===========================================",
//   "============================================================",
//   "================$===========================================",
//   "============================================================",
//   "============================================================",
//   "=====@======================================================",
//   "============================================================",
//   "=======================!====================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "==============%=============================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
//   "============================================================",
// ], {
//   // define the size of tile block
//   tileWidth: 32,
//   tileHeight: 32,
//   // define what each symbol means, by a function returning a component list (what will be passed to add())
//   tiles: {
//       "=": () => [
//           k.sprite("dirt", {anim: "dirt"}),
//       ],
//       "$": () => [
//         k.sprite("dirt", {anim: "var1"}),
//       ],
//       "@": () => [
//         k.sprite("dirt", {anim: "var2"}),
//       ],
//       "!": () => [
//         k.sprite("dirt", {anim: "var3"}),
//       ],
//       "%": () => [
//         k.sprite("dirt", {anim: "var4"}),
//       ],
//   }
// })

loadBackground()

loadWaves()

// Spawns entities
spawn()

loadCollisions()

loadAnimations()

loadUI()

loadControls()