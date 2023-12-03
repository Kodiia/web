<script>
    import { height } from '$lib/store'
    import kodiia_logo_white from '$lib/logos/kodiia_logo_white.svg'

    let script = `let sketch = function (p) {
  let rows = 5;
  let cols = 10;
  let tileWidth;
  let tileHeight;

  p.setup = function () {
    p.createCanvas(800, 400);
    p.background("#1a1a1a");
    tileWidth = p.width / cols;
    tileHeight = p.height / rows;
  };

  p.draw = function () {
    p.background("#1a1a1a05");
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        p.noStroke();

        let xPos =
          tileWidth * i + tileWidth / 2 + Math.cos(p.frameCount * 0.03 + i) * 20;
        let yPos =
          tileHeight * j +
          tileHeight / 2 +
          Math.sin(p.frameCount * 0.03 + j) * 20;

        p.fill(
          p.map(p.cos(xPos / 15), -1, 1, 0, 255),
          p.map(p.cos(xPos / 25), -1, 1, 0, 255),
          p.map(p.cos(xPos / 85), -1, 1, 0, 255),
        );
        p.circle(xPos, yPos, 50);
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};
let myp5 = new p5(sketch);
`

let code = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Hello world!</title>


    <!-- import p5.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"><\/script>

  </head>
  <body>
    <style>
        body{
            margin: 0;
            overflow: hidden;
        }
        </style>
   <script type='module'>${script}<\/script> 
    </body>
</html>
`

</script>



<div class='container' style='min-height: {$height}px;'>
    <div class='logosContainer'>
      <img src={kodiia_logo_white} alt='kodiia logo' width='70'/>
    </div>

    <div class='heroContainer'>
        <div class='scriptContainer'>
            <iframe srcDoc={code} sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation" title='code'/>
        </div>

        <h1>Design like an artist<br> Think like a programmer</h1>
        <p>An online workspace for creative developers.<br>
            Get the skills you need to turn coding into a creative tool.
        </p>
        <div class='heroLinksContainer'>
          <a href='https://kodiia.me' id='startButton'>GET STARTED with βeta</a>
          <p>or</p>
          <a href='https://forms.gle/NKirwNakYKd7xp747'>Join the waitlist to get all the updates</a>
        </div>
    </div>

    <footer>
        <p>Copyright © 2023 Kodiia</p> 
        <p>Made with 💜 across the globe</p>
        <p>info@kodiia.com</p>
    </footer>
</div>

<style>
.container{
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 2px solid #f9f9f9; */
    color: #f9f9f9;
    box-sizing: border-box;
}
.logosContainer{
    width: 100%;
    height: 60px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.heroContainer{
    width: 100%;
    /* min-height: 100svh; */
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
    box-sizing: border-box;
    margin-bottom: 10px;
}
.heroLinksContainer{
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 0;
}
.heroLinksContainer a{
  color: #3d95ee;
  margin-left: 20px;
}
iframe{
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 400px;
    overflow: hidden;
    touch-action: none;
    border-radius: 10px; 
}
#startButton{
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    border-radius: 30px;
    background: rgb(2, 0, 36);
    background: radial-gradient( circle, rgba(61, 149, 238, 0.75) 0%, rgb(68, 51, 251) 100% );
    box-shadow: 0 0 10px #3d95ee;
    backdrop-filter: blur(80px);
    -webkit-backdrop-filter: blur(80px);
    color: white;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: large;
    font-weight: bold;
    margin-right: 20px;
    margin-left: 0;
}
footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f9f9f950;
    padding: 10px;
}
footer p{
    margin: 5px;
}

@media screen and (max-width: 800px){
    footer, .heroLinksContainer{
        display: flex;
        flex-direction: column;
    }
}
</style>