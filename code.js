var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dc7efe7d-89e9-4c27-aa1e-07265e0d4b29","a7dac581-97e5-4de9-b678-6e530e67abba","d7ff0f68-603e-44e7-b634-00dadebc36c1","ff327771-2b10-4ed6-8812-cec16209ea05","da915e93-d1d0-4507-a39b-71649110f76c","f2694355-288a-4055-9205-b3febc08e347"],"propsByKey":{"dc7efe7d-89e9-4c27-aa1e-07265e0d4b29":{"name":"gameOver","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png","frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"bEOFaSSP.R1hPo8_DnAMYVMKD_L3dM2l","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png"},"a7dac581-97e5-4de9-b678-6e530e67abba":{"name":"restart","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"iQ_R81eRo.QCOAMR7FG.NOphAogyMDl_","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png"},"d7ff0f68-603e-44e7-b634-00dadebc36c1":{"name":"flappy","sourceUrl":"assets/v3/animations/j_CXa1QMbrudl_OYhbeNQLvXqto2sB7kK_XI8n9hdD4/d7ff0f68-603e-44e7-b634-00dadebc36c1.png","frameSize":{"x":1184,"y":1184},"frameCount":1,"looping":true,"frameDelay":4,"version":"G3WU194M96yPH1K4cIyK7v5.1LhgPApv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1184,"y":1184},"rootRelativePath":"assets/v3/animations/j_CXa1QMbrudl_OYhbeNQLvXqto2sB7kK_XI8n9hdD4/d7ff0f68-603e-44e7-b634-00dadebc36c1.png"},"ff327771-2b10-4ed6-8812-cec16209ea05":{"name":"pillar","sourceUrl":null,"frameSize":{"x":138,"y":793},"frameCount":1,"looping":true,"frameDelay":12,"version":"CUlLVTpQB52CXOUcBSZqJ.XL5PZGUvxu","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":793},"rootRelativePath":"assets/ff327771-2b10-4ed6-8812-cec16209ea05.png"},"da915e93-d1d0-4507-a39b-71649110f76c":{"name":"pillarflipped","sourceUrl":"assets/v3/animations/j_CXa1QMbrudl_OYhbeNQLvXqto2sB7kK_XI8n9hdD4/da915e93-d1d0-4507-a39b-71649110f76c.png","frameSize":{"x":138,"y":793},"frameCount":1,"looping":true,"frameDelay":4,"version":"cAtOOQQym0j1l2aCwoXGahUTcC7ox_gC","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":793},"rootRelativePath":"assets/v3/animations/j_CXa1QMbrudl_OYhbeNQLvXqto2sB7kK_XI8n9hdD4/da915e93-d1d0-4507-a39b-71649110f76c.png"},"f2694355-288a-4055-9205-b3febc08e347":{"name":"background","sourceUrl":"assets/v3/animations/j_CXa1QMbrudl_OYhbeNQLvXqto2sB7kK_XI8n9hdD4/f2694355-288a-4055-9205-b3febc08e347.png","frameSize":{"x":900,"y":504},"frameCount":1,"looping":true,"frameDelay":4,"version":"l70DFuMcqnuSToI4a_eLNzj_kEYenhdA","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":504},"rootRelativePath":"assets/v3/animations/j_CXa1QMbrudl_OYhbeNQLvXqto2sB7kK_XI8n9hdD4/f2694355-288a-4055-9205-b3febc08e347.png"}}};
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
//background image
var bg = createSprite(200,200,1,1);
bg.setAnimation("background");

//game states      
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//creating top and down grounds
var ground = createSprite(200,390,800,20);
ground.visible = false;
var topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//flappy bird      
var flap = createSprite(200,200,20,50);
flap.setAnimation("flappy");
flap.scale = 0.07;
flap.setCollider("circle",0,0,30);
flap.x = 100;

flap.debug=true;
flap.setCollider("circle",0,0,800);
      
//obstacles       
var ObstaclesGroup = createGroup();
var BarGroup = createGroup();
      
//game over and restart
var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.5;
gameOver.visible = false;
restart.visible = false;

//score cards      
var count = 0;

function draw() 
{
  
  background("white");
    
    if(gameState === PLAY)
    {
          flap.velocityY = flap.velocityY + 2;
        
          if(keyDown("space"))
          {
            flap.velocityY = -6 ;
            playSound("jump.mp3");
          }
          spawnObstacles();
          Bar();
          Score();
          console.log(score);
          
          if(ObstaclesGroup.isTouching(flap) || flap.isTouching(ground)|| flap.isTouching(topGround))
          {
        playSound("dead.mp3");
         gameState = END;
         
          }
    }
        
    if(gameState === END) 
    {
          gameOver.visible = true;
          restart.visible = true;
          

          flap.velocityX = 0;
          flap.velocityY = 0;
          ObstaclesGroup.setVelocityXEach(0);
          
          
          ObstaclesGroup.setLifetimeEach(-1);
          score = 0;
          flap.y = 200;
          
          
    }
        
    if(mousePressedOver(restart)) 
    {
          reset();
    }
        drawSprites();
}

function reset()
{
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  ObstaclesGroup.destroyEach();
  
}


function spawnObstacles() 
{
      if(World.frameCount % 60 === 0) 
      {
        var obstacle = createSprite(450,350,70,50);
        obstacle.setAnimation("pillar");
        obstacle.scale = 0.5;
        var obstacle1 = createSprite(450,50,40,50);
        obstacle1.setAnimation("pillarflipped");
        obstacle1.scale = 0.5;
          
            var rand = randomNumber(50,200);
        
        obstacle.velocityX = - (6 + 3*count/100);
        obstacle.lifetime = 100;
        ObstaclesGroup.add(obstacle);
        obstacle.height = rand;
    
        obstacle1.velocityX = - (6 + 3*count/100);
        obstacle1.lifetime = 100;
        ObstaclesGroup.add(obstacle1);
        obstacle1.height = rand;
      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,0.000000001,800);
          bar.velocityX = - (6 + 3*count/100);
          BarGroup.add(bar);
          bar.visible = true;
          bar.velocityX = -(6 + 3*count/100);
          bar.depth = flap.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}

var score = 0;

function Score()
{
         if(flap.isTouching(BarGroup))
         {
           score = score + 1;
         }
        textFont("algerian");
        textSize(50);
        text("Score: "+ score, 150, 100);
}
flap.depth = flap.depth + 1;
  
  


  

  
  






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
