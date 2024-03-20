<script>
    import { height, theme, bgColor, primaryColor, secondaryColor, accentColor, textColor } from '$lib/store'
    import kodiia_logo_white from '$lib/logos/kodiia_logo_white.svg'
    import kodiia_logo_black from '$lib/logos/kodiia_logo_black.svg'
    import screenshot from '$lib/logos/Screenshot.webp'
    import NavPanel from '$lib/NavPanel.svelte';

    let script = `let sketch = function (p) {
  let rows = 10;
  let cols = 10;
  let tileWidth;
  let tileHeight;
  let size

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background("#1a1a1a");
    tileWidth = p.width / cols;
    tileHeight = p.height / rows;
    size = tileWidth / 1.3;
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
        p.circle(xPos, yPos, size);
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

// function switchTheme(){
//   if($theme === 'dark'){
//     $theme = 'light'
//   } else {
//     $theme = 'dark'
//   }
// }

function changeTheme(){
        if($theme === 'dark'){
            $theme = 'light';
            $bgColor = '0, 0%, 98%';
            $secondaryColor = '0, 0%, 100%'
            $textColor = '0, 0%, 10%'
            $primaryColor = '155, 70%, 45%'
            $accentColor = '80, 95%, 40%'
        } else {
            $theme = 'dark';
            $bgColor = '0, 0%, 5%';
            $secondaryColor = '0, 0%, 15%'
            $textColor = '0, 0%, 98%'
            $primaryColor = '155, 70%, 55%'
            $accentColor = '80, 95%, 60%'
        }
    }

    let startButtonIsHovered = false

</script>


<div class='{$theme}'>
<div class='container' style='min-height: {$height}px; background: radial-gradient(circle at 50% 0%, hsl({$primaryColor + ", 50%"}), transparent 30%), radial-gradient(circle at 50% 0%, hsl({$accentColor + ", 20%"}) 15px, transparent 10%);'>


    <NavPanel />

    <div class='heroContainer'>
      <div style='margin: auto; max-width: 800px;'>
        <h1>Design like an <span class='wordSpan' style='background: linear-gradient(45deg, hsl({$primaryColor}), hsl({$accentColor})) text;'>artist</span><br> Think like a <span class='wordSpan' style='background: linear-gradient(45deg, hsl({$primaryColor}), hsl({$accentColor})) text;'>programmer</span></h1>
        <p style='margin-top: 0;'>
          Start your next creative coding project with everything you need: tutorials, challenges, coding hints, storage, and an in-browser code-editor, all in one place!
        </p>
        <div class='heroLinksContainer'>
          <div class='buttonWrapper' >
            <a href='https://kodiia.me' id='startButton' style='background: linear-gradient(45deg, hsl({$primaryColor + ', 20%'}) 50%, hsl({$accentColor + ', 30%'})); color: {$theme === 'dark' ? '#f9f9f9' : '#1a1a1a'}; box-shadow: { startButtonIsHovered ? `0 0 15px hsl(${$primaryColor})` : 'none'}' on:pointerover={()=>{startButtonIsHovered = true}} on:pointerleave={()=>{startButtonIsHovered = false}}>GET STARTED with βeta</a> 
          </div>         
          <p style='margin: 5px;'>or</p>
            <a href='https://forms.gle/NKirwNakYKd7xp747' style='color: hsl({$textColor});'>Join the waitlist to get all the updates</a>
        </div>
      </div>
    </div>

    <div class='screenWrapper' style='background: linear-gradient(45deg, hsl({$primaryColor + ', 30%'}), hsl({$accentColor + ', 30%'}));'>
      <img src={screenshot} alt='screenshot' />
      <div class='scriptContainer'>
        <iframe srcDoc={code} sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation" title='code'/>
      </div>
    </div>
    

    <p style='font-family: "Source Code Pro", sans-serif; width: 80%;'>We help architects, artists, designers, developers, and other creative professionals learn procedural design to create art, simulations, and games using web developement tools like p5.js, three.js, brain.js and more.</p>

    <footer>
        <p>Copyright © 2024 Kodiia</p> 
        <p>Made with 💜 across the globe</p>
        <p>info@kodiia.com</p>
    </footer>
</div>
</div>

<style>
  .dark{
    color: #f9f9f9;
  }
  .light{
    color: #1a1a1a;
  }
  .container{
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    /* border: 2px solid #f9f9f9; */
    /* color: #f9f9f9; */
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
.smallMenuButton{
  background: none;
  margin: 5px;
  padding: 0;
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.smallMenuButton:hover{
  text-decoration: underline;
}
.heroContainer{
    width: 100%;
    /* min-height: 100svh; */
    min-height: 60svh;
    padding: 0 10px;
    margin-top: 50px;
    
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    /* justify-content: space-between; */
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: center;
}
.heroContainer h1{
  font-size: 3.5rem;
}
.wordSpan{
  background: linear-gradient(45deg, #3d95ee, #4233fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 500;
  letter-spacing: 0px;
}
.heroLinksContainer{
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 0;
}
.heroLinksContainer a{
  color: #3d95ee;
  margin-left: 20px;
}
.scriptContainer{
  width: 43.5%;
  height: calc(100% - 6.5% - 2px);
  z-index: 2;
  position: absolute;
  top: 6.5%;
  box-sizing: border-box;
}
iframe{
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    touch-action: none;
    border-radius: 5px;
}
.buttonWrapper{
  padding: 2px;
  box-sizing: border-box;
  width: 150px;
  border-radius: 30px;
  background-size: 300px 300px;
  background-position: 0 50%;
  background-image: radial-gradient(circle at 50% 0%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%);
  animation: startButton 5s alternate infinite;
}
#startButton{
    width: 100%;
    height: 100%;
    padding: 5px;
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
    font-size: 1rem;
    font-weight: 300;
    margin-right: 20px;
    margin-left: 0;
    box-sizing: border-box;
}
.screenWrapper{
  width: 90%;
  max-width: 1200px;
  padding: 2px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px 0;
}
.screenWrapper img{
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
}
footer{
  width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f9f9f950;
    padding: 10px;
    font-weight: 0.8rem;
    box-sizing: border-box;
}
footer p{
    margin: 5px;
}

@keyframes startButton {
  0% {
		background-position: 0 0;
	}
	50% {
		background-position: 200% 0;
	}
	100% {
		background-position: 0 0;
	}
  /* 0%{
    background: radial-gradient(circle at 50% 0%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%);
  }
  25% {
    background: radial-gradient(circle at 100% 50%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%);
  }
  50% {
    background: radial-gradient(circle at 50% 100%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%);
  }
  75% {
    background: radial-gradient(circle at 0% 50%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%);
  }
  100% {
    background: radial-gradient(circle at 50% 0%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%);
  } */
  /* 0%{
    background: conic-gradient( from 0deg at 50% 50%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%)
  }
  50%{
    background: conic-gradient( from 180deg at 50% 50%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%)
  }
  100%{
    background: conic-gradient( from 300deg at 50% 50%, hsl(80, 95%, 60%) 10%, hsl(155, 70%, 55%, 30%) 20%)
  } */

  /* 0% {
    background-position: 50% 0%;
  } */

  /* 50% {
    background-position: 100% 50%;
  } */

  /* 100% {
    background-position: 50% 100%;
  } */
}

@media screen and (max-width: 800px){
    footer, .heroLinksContainer{
        display: flex;
        flex-direction: column;
    }
    .heroContainer h1{
      font-size: 2.5rem;
    }
}
</style>