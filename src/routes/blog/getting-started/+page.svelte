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

		<h1 style="margin-top: 100px;">Getting started guide</h1>
		<main>
			<article>
				<div><img src={homeImg} alt="home page" loading="lazy" /></div>
				<p>
					Welcome to our online code editor, where you can create projects and utilize AI assistance
					to enhance your coding experience. This guide will walk you through the steps to sign up,
					log in, and get started with your first project.
				</p>
				<div><img src={signupFormImg} alt="signup form" loading="lazy" /></div>
				<div>
					<h3>Sign Up</h3>

					<p>
						To begin, sign up for an account by entering your credentials. After submitting your
						information, you will receive an email with a verification link.
					</p>
				</div>

				<div>
					<img src={signupEmailImg} alt="signup form" loading="lazy" />
					<img src={emailImg} alt="email verification" loading="lazy" />
				</div>
				<div>
					<h3>Verify Your Email</h3>

					<p>
						Click the verify button in the email to confirm your email address. This step is crucial
						to activate your account and ensure you can access all the features of our platform.
					</p>
				</div>

				<div><img src={loginImg} alt="login page" loading="lazy" /></div>
				<div>
					<h3>Log In</h3>

					<p>Once you have verified your email, log in to your account using your credentials.</p>
				</div>

				<div><img src={creatingProjectImg} alt="creating project" loading="lazy" /></div>
				<div>
					<h3>Choose a Template</h3>

					<p>
						To create your first project, choose a template that suits your needs. We currently
						offer templates for:
					</p>
					<ul>
						<li><b>2D Graphics</b>: Use p5.js to create engaging 2D graphics.</li>
						<li><b>3D Graphics</b>: Utilize Three.js for creating immersive 3D experiences.</li>
						<li><b>Neural Networks</b>: Train Neural Networks with Brain.js.</li>
					</ul>
					<p>More templates will be added soon, so stay tuned!</p>
				</div>
				<div><img src={projectsImg} alt="projects page" loading="lazy" /></div>
				<div>
					<h3>Access Your Projects</h3>

					<p>
						All your projects are accessible from the <b>Projects</b> tab. This is where you can manage
						and view your projects.
					</p>
				</div>
				<div><img src={editorImg} alt="editor" loading="lazy" /></div>
				<div>
					<h3>Files Panel</h3>

					<p>
						The <b>Files</b> panel is where you can edit your code and upload assets. This is the core
						area where you will spend most of your time working on your projects.
					</p>

					<h3>Resources Panel</h3>

					<p>
						The <b>Resources</b> panel provides access to various tools and resources, including:
					</p>
					<ul>
						<li>
							<b>Chat</b>: Ask any questions regarding your project ideas and receive guidance from
							our AI assistant. The AI will provide high-level project structure and detailed code
							snippets to help you get started.
						</li>
						<li>
							<b>Challenges</b>: Engage with coding challenges to improve your skills and stay
							up-to-date with the latest trends.
						</li>
						<li>
							<b>Tutorials</b>: Explore tutorials and guides to learn new skills and enhance your
							coding abilities.
						</li>
					</ul>
				</div>
				<div><img src={runImg} alt="running a project" loading="lazy" /></div>
				<div>
					<h3>Get Started with Your Project</h3>

					<p>
						Now that you have set up your account and chosen a template, it's time to start working
						on your project. Use the <b>Files</b> panel to edit your code and upload assets. If you
						need any assistance or guidance, feel free to use the <b>Chat</b> feature to ask questions.
					</p>
				</div>
				<div></div>
				<div>
					<h3>Additional Resources</h3>
					<ul>
						<li>
							<b>Discord</b>: Join our Discord community to connect with other developers, ask
							questions, and share your projects.
						</li>
						<li><b>Instagram</b>: Tag us on Instagram to share your projects and get featured.</li>
					</ul>
				</div>
				<div></div>
				<div>
					<h3>Good Luck!</h3>

					<p>
						We hope you have a great time creating your projects with our online code editor. If you
						have any questions or need help, don't hesitate to reach out. Happy coding!
					</p>
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

	@media screen and (max-width: 700px) {
		article {
			display: grid;
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
</style>
