<script>
	import {
		height,
		theme,
		bgColor,
		primaryColor,
		secondaryColor,
		accentColor,
		textColor
	} from '$lib/store';
	import kodiia_logo_white from '$lib/logos/kodiia_logo_white.svg';
	import kodiia_logo_black from '$lib/logos/kodiia_logo_black.svg';
	import screenshot from '$lib/logos/Screenshot_full.webp';
	import screenshotAI from '$lib/logos/screenshot_2.webp';
	import screenshotCloud from '$lib/logos/screenshot_1.webp';
	import video from '$lib/logos/demo.mp4';
	import NavPanel from '$lib/NavPanel.svelte';

	let code = '',
		script = '',
		code2 = '',
		scriptFlow = '';

	height.subscribe(() => {
		script = `let sketch = function (p) {
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
    p.setup()
  };
  };
  let myp5 = new p5(sketch);
  `;

		code = `<!doctype html>
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
  `;

		scriptFlow = `let sketch = function (p) {
    let particles = [];
    let particlesNumber = 500;
    
  
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.strokeWeight(2);
      p.stroke('#33dd99')
      for (let i = 0; i < particlesNumber; i++) {
        particles.push(
          p.createVector(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          )
        )
      }
    };
  
    p.draw = function () {
      p.background('#1a1a1a05');
      for (let particle of particles) {
        p.point(particle.x, particle.y);
        let n = p.noise( particle.x * 0.002, particle.y * 0.002);
        particle.x += Math.cos(n * Math.PI * 2);
        particle.y += Math.sin(n * Math.PI * 2);
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.x = Math.random() * window.innerWidth;
          particle.y = Math.random() * window.innerHeight;
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.x = Math.random() * window.innerWidth;
          particle.y = Math.random() * window.innerHeight;
        }
      }
    };
  
    p.mousePressed = function () {
      particles = [];
      particlesNumber = 500;
      p.setup()
    }
  
    p.windowResized = function () {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
      particles = [];
      particlesNumber = 500;
      p.setup();
    };};
  
  let myp5 = new p5(sketch);`;

		code2 = `<!doctype html>
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
   <script type='module'>${scriptFlow}<\/script> 
    </body>
  </html>
  `;
	});

	// function switchTheme(){
	//   if($theme === 'dark'){
	//     $theme = 'light'
	//   } else {
	//     $theme = 'dark'
	//   }
	// }

	function changeTheme() {
		if ($theme === 'dark') {
			$theme = 'light';
			$bgColor = '0, 0%, 98%';
			$secondaryColor = '0, 0%, 100%';
			$textColor = '0, 0%, 10%';
			$primaryColor = '155, 70%, 45%';
			$accentColor = '80, 95%, 40%';
		} else {
			$theme = 'dark';
			$bgColor = '0, 0%, 5%';
			$secondaryColor = '0, 0%, 15%';
			$textColor = '0, 0%, 98%';
			$primaryColor = '155, 70%, 55%';
			$accentColor = '80, 95%, 60%';
		}
	}

	let startButtonIsHovered = false;
</script>

<div class={$theme}>
	<div
		class="container"
		style="min-height: {$height}px; background: radial-gradient(circle at 50% 0%, hsl({$primaryColor +
			', 50%'}), transparent 400px), radial-gradient(circle at 50% 0%, hsl({$accentColor +
			', 20%'}) 15px, transparent 50px);"
	>
		<NavPanel />

		<div class="heroContainer">
			<div style="margin: auto; max-width: 800px;">
				<h1>
					Design like an <span
						class="wordSpan"
						style="background: linear-gradient(45deg, hsl({$primaryColor}), hsl({$accentColor})) text;"
						>artist</span
					><br /> Think like a
					<span
						class="wordSpan"
						style="background: linear-gradient(45deg, hsl({$primaryColor}), hsl({$accentColor})) text;"
						>programmer</span
					>
				</h1>
				<h3 style="margin-top: 0;">AI-powered in-browser code editor</h3>
				<div class="heroLinksContainer">
					<div class="buttonWrapper">
						<a
							href="https://kodiia.me"
							id="startButton"
							style="background: linear-gradient(45deg, hsl({$primaryColor +
								', 20%'}) 50%, hsl({$accentColor + ', 30%'})); color: {$theme === 'dark'
								? '#f9f9f9'
								: '#1a1a1a'}; box-shadow: {startButtonIsHovered
								? `0 0 15px hsl(${$primaryColor})`
								: 'none'}"
							on:pointerover={() => {
								startButtonIsHovered = true;
							}}
							on:pointerleave={() => {
								startButtonIsHovered = false;
							}}>GET STARTED with βeta</a
						>
					</div>
					<!-- <p style='margin: 5px;'>or</p>
            <a href='https://forms.gle/NKirwNakYKd7xp747' style='color: hsl({$textColor});'>Join the waitlist to get all the updates</a> -->
				</div>
			</div>
		</div>

		<div
			class="screenWrapper"
			style="background: linear-gradient(45deg, hsl({$primaryColor + ', 30%'}), hsl({$accentColor +
				', 30%'}));"
		>
			<img src={screenshot} alt="screenshot" />
			<div class="scriptContainer">
				<iframe
					srcDoc={code}
					sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
					title="code"
				/>
			</div>
		</div>

		<div
			class="cardContainer"
			style="display: block; margin-top: 40px; border: 1px solid hsl({$textColor + ', 20%'});"
		>
			<div class="cardTextContainer">
				<h2
					style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
						', 20%'}); padding-bottom: 10px;"
				>
					Artful web experiments
				</h2>
				<div class="courseScriptContainer" style="aspect-ratio: 16/9;">
					<!-- <iframe
						srcDoc={code2}
						sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
						title="code"
					/> -->
					<video src="{video}" autoplay={true} muted={true} preload="auto" loop={true} playsinline={true} style='width: 100%;'></video>
				</div>
				<p style="width: 80%;">
					For architects, designers, artists, and creative minds. Create generative art, virtual
					architecture, simulations, and games using tools like p5.js, three.js, brain.js, and
					transformers.js.
				</p>
			</div>

			
		</div>

		<div class="cardContainer" style="margin-top: 20px; padding: 0;">
			<div
				class="cardTextContainer"
				style="border: 1px solid hsl({$textColor + ', 20%'}); padding: 10px; border-radius: 10px;"
			>
				<h2
					style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
						', 20%'}); padding-bottom: 10px;"
				>
					Create faster with AI
				</h2>
				
				<div class="courseScriptContainer" style="border-radius: 10px; aspect-ratio: 16/9; background: grey; background-image: url({screenshotAI}); background-size: contain;">
				</div>
				<p>Use chat to get possible directions for your experiments.</p>
				<ul>
					<li>step-by-step high level instructions</li>
					<li>detailed code snippets</li>
					<li>insights, suggestions, and feedback</li>
				</ul>
			</div>

			<div
				class="cardTextContainer"
				style="border: 1px solid hsl({$textColor + ', 20%'}); padding: 10px; border-radius: 10px;"
			>
				<h2
					style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
						', 20%'}); padding-bottom: 10px;"
				>
					Cloud Workspace
				</h2>
				<div
					class="courseScriptContainer"
					style="border-radius: 10px; aspect-ratio: 16/9; background: grey; background-image: url({screenshotCloud}); background-size: contain;"
				></div>
				<p>It's more than just a code editor.</p>
				<ul>
					<li>upload assets</li>
					<li>save, share, or download projects</li>
					<li>follow tutorials, complete challenges</li>
				</ul>
			</div>
		</div>

		<div class="cardContainer" style="margin-top: 20px; padding: 0;">
			<div
				class="cardTextContainer"
				style="border: 1px solid hsl({$textColor +
					', 20%'}); padding: 10px; border-radius: 10px; grid-column: span 2;"
			>
				<h2
					style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
						', 20%'}); padding-bottom: 10px;"
				>
					From the team
				</h2>
				<div class="statementGrid">
					<p>
						We are a duo of award-winning architects with a passion for computational design, game design,
						and web development.
						<br /><br />We are dedicated to pushing boundaries and exploring the intersection of web
						technologies and creative spheres.
						<br /><br />We believe that being able to develop your own software tools is crucial for
						creative freedom in a rapidly digitalizing world.
					</p>
					<p>
						We are driven to create a premier platform for artistic expression.
						<br /><br />Leveraging LLMs and RAG this project is an exploration of AI's Artistic
						Intelligence potential in inspiring new ideas, providing insights, and fostering
						creative freedom.
						<br /><br />Join us on this journey! 👾
						<!-- <span style="font-size: 2rem;">👾</span> -->
					</p>
				</div>
			</div>
		</div>

		<h2 style="margin-bottom: 20px;">Upcoming events</h2>
		<div class="courseContainer" style="border: 1px solid hsl({$textColor + ', 20%'});">
			<div class="courseTextContainer">
				<h3
					style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
						', 20%'}); padding-bottom: 10px;"
				>
					Artful Algorithms: The Magic of Creative Coding
				</h3>
				<p>
					Step into the enchanting world of creative coding with our beginner-friendly online
					course. It is an open invitation for designers, artists, programmers and architects to
					augment their creativity with the power of code. Experience the thrill of creating visual,
					interactive, and audio projects for the web, develop video games and 3D computer graphics
					using WebGL. Learn to create engaging simulations, interact with the camera and even run
					your own AI model. This course, requiring no previous programming experience, is a unique
					blend of coding in the context of design, visual arts, and game design.
					<br /><br />More info and dates coming soon.
					<!-- It's a journey through creative coding, where you'll: -->
				</p>

				<details style="margin-top: 0; padding-bottom: 10px;">
					<summary
						style="border-bottom: 1px solid hsl({$textColor +
							', 20%'}); cursor: pointer; padding-bottom: 10px;">Course details</summary
					>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-top: 20px; margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 1</h4>
						<p style="margin: 10px 0 0 0;">
							get introduced to JavaScript, HTML, CSS and kickstart your first web project
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 2</h4>
						<p style="margin: 10px 0 0 0;">
							discover the basics of p5.js to craft static objects with code
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 3</h4>
						<p style="margin: 10px 0 0 0;">
							learn about Noise and Flow Field algorithms with p5.js to create animations, patterns,
							and unexpected colours
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 4</h4>
						<p style="margin: 10px 0 0 0;">
							jump into interactive projects with p5.js, connecting a webcam and Arduino with a
							laptop to blur the line between physical and digital worlds
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 5</h4>
						<p style="margin: 10px 0 0 0;">
							master agent-based design with p5.js and simulate human movement, self-driving cars,
							bird flight or animal migration
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 6</h4>
						<p style="margin: 10px 0 0 0;">
							explore 3D web project creation with three.js, including features such as effects,
							cameras, animation, lighting, materials
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 7</h4>
						<p style="margin: 10px 0 0 0;">
							learn about voxel aesthetics with three.js and create a video game featuring a cute
							character
						</p>
					</div>
					<div
						style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); margin-bottom: 10px;"
					>
						<h4 style="margin: 0;">Lesson 8</h4>
						<p style="margin: 10px 0 0 0;">
							get introduced to the basics of transformers.js, training a model using pretrained
							models for an artistic project in the web browser, without the need for a server.
						</p>
					</div>
				</details>

				<form action="?/register" method="POST" class="formContainer">
					<div class="formFieldContainer">
						<label for="email" class="formLabel">
							<span class="labelSpan">Subscribe to shine with code and get all the news</span>
						</label>
						<input
							type="email"
							name="email"
							class="formInput"
							placeholder="your@email.com"
							style="background: hsl({$secondaryColor}) !important; color: hsl({$textColor}) !important; "
						/>
					</div>
					<button
						type="submit"
						class="submitButton"
						style="background: hsl({$primaryColor}); color: #1a1a1a;">SUBSCRIBE</button
					>
				</form>
			</div>

			<div class="courseScriptContainer">
				<iframe
					srcDoc={code2}
					sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
					title="code"
				/>
			</div>
		</div>

		<footer>
			<p>Copyright © 2024 Kodiia</p>
			<p>Made with 💜 across the globe</p>
			<p>info@kodiia.com</p>
		</footer>
	</div>
</div>

<style>
	.dark {
		color: #f9f9f9;
		transition: all 0.25s;
	}
	.light {
		color: #1a1a1a;
		transition: all 0.25s;
	}
	.container {
		width: 100%;
		max-width: 1400px;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
		/* border: 2px solid #f9f9f9; */
		/* color: #f9f9f9; */
		box-sizing: border-box;
		font-weight: 300;
	}
	.logosContainer {
		width: 100%;
		height: 60px;
		padding: 20px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	.smallMenuButton {
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
	.smallMenuButton:hover {
		text-decoration: underline;
	}
	.heroContainer {
		width: 100%;
		/* min-height: 100svh; */
		min-height: 50svh;
		padding: 0 10px;
		margin-top: 50px;

		display: flex;
		flex-direction: column;
		/* align-items: center;
    justify-content: center; */
		/* justify-content: space-between; */
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 0px;
		text-align: center;
	}
	/* .heroContainer h1 {
		font-size: 3.5rem;
	} */
	.wordSpan {
		background: linear-gradient(45deg, #3d95ee, #4233fb);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		font-weight: 500;
		letter-spacing: 0px;
	}
	.heroLinksContainer {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
		padding: 10px 0;
	}
	.heroLinksContainer a {
		color: #3d95ee;
		margin-left: 20px;
	}

	.scriptContainer {
		width: 43.4%;
		height: calc(100% - 6.5% - 3px);
		z-index: 2;
		position: absolute;
		margin-left: 6px;
		top: 6.4%;
		box-sizing: border-box;
	}
	iframe {
		margin: 0;
		padding: 0;
		border: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		touch-action: none;
		border-radius: 5px;
	}
	.buttonWrapper {
		padding: 2px;
		margin: 0 0 20px 0;
		box-sizing: border-box;
		width: 150px;
		border-radius: 30px;
		background-size: 300px 300px;
		background-position: 0 50%;
		background-image: radial-gradient(
			circle at 50% 0%,
			hsl(80, 95%, 60%) 10%,
			hsl(155, 70%, 55%, 30%) 20%
		);
		animation: startButton 5s alternate infinite;
	}
	#startButton {
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
		background: radial-gradient(circle, rgba(61, 149, 238, 0.75) 0%, rgb(68, 51, 251) 100%);
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
	.screenWrapper {
		width: 90%;
		max-width: 1200px;
		padding: 2px;
		border-radius: 10px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 0px 0;
	}
	.screenWrapper img {
		width: 100%;
		box-sizing: border-box;
		border-radius: 8px;
	}

	.courseContainer,
	.cardContainer {
		padding: 10px;
		border-radius: 10px;
		margin-bottom: 20px;
		width: 90%;
		max-width: 1200px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		box-sizing: border-box;
	}
	.courseTextContainer,
	.cardTextContainer {
		padding-right: 10px;
	}
	.statementGrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.statementGrid p {
		margin: 5px 0;
	}

	footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #f9f9f950;
		padding: 10px;
		font-weight: 0.8rem;
		box-sizing: border-box;
	}
	footer p {
		margin: 5px;
	}

	details {
		width: 100%;
		list-style-type: none;
	}
	summary {
		display: flex;
		justify-content: space-between;
		padding-right: 10px;
	}
	summary::marker {
		content: '';
	}

	details > summary::after {
		content: '+';
		font-size: 1.17rem;
	}

	details[open] > summary::after {
		content: '-';
		font-size: 1.17rem;
	}

	.formFieldContainer {
		display: flex;
		flex-direction: column;
		margin: 10px 0;
	}
	h1 {
		font-size: 3.5rem;
		font-weight: 500;
	}
	h2,
	h3,
	h4 {
		margin: 0;
		margin-bottom: 10px;
		font-size: 2rem;
		font-weight: 500;
	}
	p,
	a,
	ul,
	li {
		font-size: 1.2rem;
	}
	a {
		color: #3d95ee;
	}
	label {
		margin-bottom: 5px;
	}
	input {
		appearance: none;
		font-family:
			Source Code Pro,
			sans-serif;
		font-size: 1rem;
		transition: all 0.25s;
		max-width: 300px;
	}

	.submitButton {
		background: #4233fb;
		color: #f9f9f9;
		margin-top: 10px;
		margin-bottom: 10px;
		transform: scale(1);
		border: none;
		border-radius: 10px;
		padding: 10px;
		font-size: 1rem;
		font-family: Montserrat, sans-serif;
		width: fit-content;
	}
	.submitButton:hover {
		box-shadow: 0 0 10px #33dd99;
		cursor: pointer;
	}
	.formInput {
		padding: 10px;
		border-radius: 10px;
		border: 1px solid #1a1a1a20;
	}
	footer {
		font-size: 1.2rem;
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

	@media screen and (max-width: 800px) {
		footer,
		.heroLinksContainer {
			display: flex;
			flex-direction: column;
		}
		.heroContainer h1 {
			font-size: 2.5rem;
		}
		.courseContainer,
		.cardContainer {
			display: grid;
			grid-template-columns: 1fr;
		}
		.submitButton {
			margin-bottom: 20px;
		}
		.statementGrid {
			display: grid;
			grid-template-columns: 1fr;
			gap: 10px;
		}
	}
</style>
