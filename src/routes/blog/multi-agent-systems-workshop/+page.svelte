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

	import creatingProjectImg from '$lib/images/creating_project.png';
	import editorImg from '$lib/images/editor.png';
	import emailImg from '$lib/images/email.png';
	import loginImg from '$lib/images/login.png';
	import signupFormImg from '$lib/images/signup_form.png';
	import signupEmailImg from '$lib/images/signup.png';
	import homeImg from '$lib/images/home.png';
	import projectsImg from '$lib/images/projects.png';
	import runImg from '$lib/images/run.png';

	import NavPanel from '$lib/NavPanel.svelte';
</script>

<div class={$theme}>
	<div class="container" style="min-height: {$height}px;">
		<NavPanel />

		<main>
			<h1 style="margin-top: 80px;">AI Multi-agent systems: Creating a Voxel City</h1>
			<article>
				<div>
					<img
						src="https://digitalfutures.international/wp-content/uploads/2024/06/AI-agents-DF-001-SA-lab.png"
						alt="workshop outcome"
						loading="lazy"
					/>
				</div>
				<div>
					<h3 style="border-bottom: 1px solid hsl({$textColor + ', 20%'});">Description</h3>
					<p>
						This workshop is part of the DigitalFUTURES 2024 Online programm.
						<br><br>
						The term “multi-agent AI systems” refers to a network of interactive, intelligent agents
						collaborating to achieve common goals. Unlike a solitary AI, multi-agent AI distributes
						intelligence among decentralized entities that work together to solve problems. These
						systems can be useful in a range of fields such as logistics, power grids,
						manufacturing, disaster response, and more.
						<br /><br />This workshop seeks to delve into the potential applications of multi-agent
						AI systems in architectural design processes. Our aim is to guide students in the
						creation of a web application capable of generating a 3D model of a voxel city based on
						user prompts. Participants will have the opportunity to explore the concept of
						multi-agent AI systems by creating their own systems using open-source large language
						models from the Transformers.js library. No prior coding skills are required to
						participate in this workshop. However, certain hardware requirements must be met for
						using ComfyUI. Participants will be provided with code examples and step-by-step
						instructions as they work on their projects on the Kodiia platform.
					</p>
				</div>

				<div>
					<img
						src="https://digitalfutures.international/wp-content/uploads/2024/06/AI-agents-DF-002-SA-lab-2048x815.png"
						alt="signup form"
						loading="lazy"
					/>
				</div>
				<div>
					<h3 style="border-bottom: 1px solid hsl({$textColor + ', 20%'});">Learning objectives</h3>

					<p>
						Students will learn how to use tools such as ComfyUI and Midjourney to produce reference
						images for the city and textures for 3D assets. We will also cover the basics of Blender
						to create a library of assets and optimize them for browser use. Furthermore, the
						workshop will introduce students to HTML, CSS, JavaScript, and libraries like Three.js
						and Transformers.js to create a web application that can generate a 3D structure.
					</p>
				</div>

				<div>
					<!-- <img src={signupEmailImg} alt="signup form" loading="lazy" /> -->
					<!-- <img src={emailImg} alt="email verification" loading="lazy" /> -->
				</div>
				<div>
					<h3 style="border-bottom: 1px solid hsl({$textColor + ', 20%'});">Detail Schedule</h3>

					<p>
						Module 1 – Thursday 25th of July I 08:00-11:00 am EST
						<br />
						Module 2 – Friday 26th of July I 08:00-10:00 am EST
						<br />
						Module 3 – Saturday 27th of July I 08:00 -12:00 pm EST
						<br />
						Module 4 – Sunday 28th of July I 08:00 -10:00 am EST
					</p>

					<a style='margin-top: 20px;' href="https://www.youtube.com/@salab.universe" target="_blank" class="applyLink"
						>YouTube Streaming</a
					>
					<!-- <br /> -->
					<a
						href="https://digitalfutures.international/ai-multi-agent-systems/"
						target="_blank"
						class="applyLink">Apply as Participant</a
					>
				</div>

			</article>
		</main>
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
	main {
		padding: 10px;
		border-radius: 10px;
		margin-bottom: 20px;
		width: 90%;
		max-width: 1200px;

		box-sizing: border-box;
	}
	h3 {
		margin-top: 0;
	}
	img {
		width: 100%;
	}
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
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
	.applyLink {
		display: block;
		width: fit-content;
		min-height: 40px;
		text-decoration: none;
		border: 1px solid #3d9;
		background: #1a1a1a;
		color: #f9f9f9;
		padding: 10px;
		border-radius: 10px;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	.applyLink:hover {
		box-shadow: 0 0 10px #3d9;
	}

	@media screen and (max-width: 700px) {
		article {
			display: grid;
			grid-template-columns: 1fr;
			gap: 20px;
		}
		footer{
			flex-direction: column;
		}
	}
</style>
