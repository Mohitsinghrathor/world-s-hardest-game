var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","6aa50d5d-f218-4de9-bf8a-5a47089ef532","c8cd67bf-fdd1-486f-be00-4c5bd5dd4431","755bb715-6aca-466e-bc57-7b095dab327e","c05b215a-3349-4bf5-9900-a0cc3465b380","1392e86e-2257-4499-9896-6f984da2505f","dfd983df-cb6b-4469-9c03-b7f96b79b2d8","6833468c-aa1a-4eef-9eea-f68c31a6353d","d232d920-8d78-4503-bc35-a1893f113d72","95dc61d8-565d-42fc-90df-8ef3a4dc8e73","6968be2c-8c3c-4931-976d-753b185c28ef","c5587f8e-3f6a-4b00-b0ad-11a4810f46a3"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"pxPkMR04gE1H_8GbYb19Ux0FqhRqGwSn","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"fa8RzW_GDaJ72n17Byhowqg6Pb1rlEjK","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"caJi_YZY1DvEX697HAI8z3gF7Li5t0nD","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"6aa50d5d-f218-4de9-bf8a-5a47089ef532":{"name":"background","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"ri1V_PKo.ZbBUdAl4o5h6FV0FJcLFSUd","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/6aa50d5d-f218-4de9-bf8a-5a47089ef532.png"},"c8cd67bf-fdd1-486f-be00-4c5bd5dd4431":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"755bb715-6aca-466e-bc57-7b095dab327e":{"name":"steve","sourceUrl":null,"frameSize":{"x":276,"y":553},"frameCount":1,"looping":true,"frameDelay":12,"version":"0w_tQV8ZqT4gV9HKsYFyykSFTa36VmFi","loadedFromSource":true,"saved":true,"sourceSize":{"x":276,"y":553},"rootRelativePath":"assets/755bb715-6aca-466e-bc57-7b095dab327e.png"},"c05b215a-3349-4bf5-9900-a0cc3465b380":{"name":"#z.jpg_1","sourceUrl":null,"frameSize":{"x":226,"y":223},"frameCount":1,"looping":true,"frameDelay":12,"version":"l69NpnKcSYewYdwCtxBtZTUwfpKg.D5y","loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":223},"rootRelativePath":"assets/c05b215a-3349-4bf5-9900-a0cc3465b380.png"},"1392e86e-2257-4499-9896-6f984da2505f":{"name":"retro_red_heart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png","frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":2,"version":"NolfDXD9f49COunFY6Ops3IuWeUdWXbo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png"},"dfd983df-cb6b-4469-9c03-b7f96b79b2d8":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"6833468c-aa1a-4eef-9eea-f68c31a6353d":{"name":"#d.png_1","sourceUrl":null,"frameSize":{"x":220,"y":229},"frameCount":1,"looping":true,"frameDelay":12,"version":"c0Air.lgJPZ3m6n_0GQ5vez4j5TqWOci","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":229},"rootRelativePath":"assets/6833468c-aa1a-4eef-9eea-f68c31a6353d.png"},"d232d920-8d78-4503-bc35-a1893f113d72":{"name":"#da.jpg_1","sourceUrl":null,"frameSize":{"x":820,"y":480},"frameCount":1,"looping":true,"frameDelay":12,"version":"6S3TSJZDpA1GLSzZ98XIyWHQ4JAi4X5C","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":480},"rootRelativePath":"assets/d232d920-8d78-4503-bc35-a1893f113d72.png"},"95dc61d8-565d-42fc-90df-8ef3a4dc8e73":{"name":"#died.jpg_1","sourceUrl":"assets/v3/animations/ZhYK2yfMHazd8vjkZToC_il1SfuLgqsXqfT5ATHfbaA/95dc61d8-565d-42fc-90df-8ef3a4dc8e73.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"7NAcjyPjsIA_sDJ1WAHSL2Jmx_v0ojLO","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/ZhYK2yfMHazd8vjkZToC_il1SfuLgqsXqfT5ATHfbaA/95dc61d8-565d-42fc-90df-8ef3a4dc8e73.png"},"6968be2c-8c3c-4931-976d-753b185c28ef":{"name":"#died20.jpg_1","sourceUrl":null,"frameSize":{"x":255,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"mIDWc2NrB_7uSM1zxdCiazL7xUhxtT8o","loadedFromSource":true,"saved":true,"sourceSize":{"x":255,"y":52},"rootRelativePath":"assets/6968be2c-8c3c-4931-976d-753b185c28ef.png"},"c5587f8e-3f6a-4b00-b0ad-11a4810f46a3":{"name":"HELLO-page02.jpg_1","sourceUrl":null,"frameSize":{"x":806,"y":623},"frameCount":1,"looping":true,"frameDelay":12,"version":"o5xIP3rTb8Pugo.3QbtXbGVN1L.ZoYys","loadedFromSource":true,"saved":true,"sourceSize":{"x":806,"y":623},"rootRelativePath":"assets/c5587f8e-3f6a-4b00-b0ad-11a4810f46a3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 ;b.setAnimation("background");
b.scale = 2;
var h1 = createSprite(300, 380, 10, 10);
var h2 = createSprite(340, 380, 10, 10);
var h3 = createSprite(380, 380, 10, 10);
var hero = createSprite(200,345,10,10);
hero.shapeColor="red"

var enemy1 = createSprite(200,240,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,100,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,10,10,20)
net.shapeColor="red"
net.setAnimation("#d.png_1");
net.scale = 0.25;

var goal =0;
var death = 0

hero.setAnimation("steve");
hero.scale=.2;
enemy1.setAnimation("#z.jpg_1");
enemy1.scale=.3;
enemy2.setAnimation("#z.jpg_1");
enemy2.scale=.3;
enemy3.setAnimation("#z.jpg_1");
enemy3.scale=.3;
h1.setAnimation("retro_red_heart_1");
h1.scale = 0.25;

h2.setAnimation("retro_red_heart_1");
h2.scale = 0.25;
h3.setAnimation("retro_red_heart_1");
h3.scale = 0.25;


function draw() {
  
//background(b);
  background("b");

createEdgeSprites()

  if (keyDown("c")) {
    enemy1.setVelocity(-5,0);
    enemy2.setVelocity(5,0);
    enemy3.setVelocity(-5,0);
  }



enemy1.bounceOff(edges);
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
  hero.collide(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/Minecraft-Hit-Sound-Tone.mp3", false);
  hero.x=200
  hero.y=350
  death=death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.setAnimation("#da.jpg_1");
  enemy1.destroy();
  enemy2.destroy();
  enemy3.destroy();
hero.x=200
hero.y=345
death=death+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  if (death == 1) {
    h1.destroy();
  }
  
  if (death == 2) {
    h2.destroy();
  }

  if (death == 3) {
    h3.destroy();
    var end = createSprite(200, 200, 10, 10);
    end.setAnimation("textGameOver_1");
  }
textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
