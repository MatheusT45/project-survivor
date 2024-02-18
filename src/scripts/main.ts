import k from "./kaboom";
import Controls from "./components/controls";
import Collisions from "./components/collisions";
import Animations from './components/animations';
import Spawn from './components/spawner';
import Background from "./components/background";

k.loadSprite("player", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 0,
          to: 0,
      },
  },
});

k.loadSprite("enemy", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 99,
          to: 99,
      },
  },
});

k.loadSprite("bullet", "./spritesheet.png", {
  sliceX: 10,
  sliceY: 10,
  anims: {
      idle: {
          from: 10,
          to: 10,
      },
  },
});

k.loadSprite("dirt", "./full-dirt.png");

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

// Load background
Background()

// Spawns entities
Spawn()

// Load controls
Controls()

// Load collisions
Collisions()

// Load animations
Animations()