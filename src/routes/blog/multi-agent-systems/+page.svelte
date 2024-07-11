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

	import agentsImg from '$lib/images/agents.jpeg';

	import NavPanel from '$lib/NavPanel.svelte';
	import EmailForm from '$lib/EmailForm.svelte';
</script>

<div class={$theme}>
	<div class="container" style="min-height: {$height}px;">
		<NavPanel />

		<main>
			<h1 style="margin-top: 80px;">
				Creative superheroes are here to assist you. Meet Multi-Agent AI Systems.
			</h1>
			<article>
				<div>
					<img
						src="{agentsImg}"
						alt="workshop outcome"
						loading="lazy"
					/>
				</div>
				<div>
					<p>
						<b>
							At Kodiia, our research is primarily focused on the development of AI-powered tools
							designed for creative tasks. These tools are particularly geared towards generative,
							computational, and procedural design areas. We believe that multi-agent systems are,
							perhaps, one of the most effective approaches to designing such tools. Due to their
							ability to interact and co-create, they hold great potential to enrich the creative
							processes of artists, designers, architects, and developers. Discover how these
							systems work and how they can be integrated into your tasks in this article!
						</b>
					</p>
					<p>
						The world of artificial intelligence is witnessing a transformation with the
						introduction of multi-agent AI systems. These systems are designed to employ multiple
						agents that collaborate to solve complex problems. They are finding applications in
						diverse fields, such as robotics, supply chain management, traffic control, and software
						development automation.
					</p>
					<p>
						There are various approaches, frameworks and tools facilitating the creation of
						multi-agent AI systems. Among the prominent ones are CrewAI, AutoDev, Maestro, Mixture
						Of Agents (MoA), and GPT-pilot.
					</p>
					<h3>CrewAI</h3>
					<p>
						CrewAI offers a simple yet effective process for building and deploying multi-agent AI
						systems. It supports turning any multi-agent crew into an API, providing metrics,
						enterprise support, and ensuring privacy and security through isolated VPCs. Developers
						can use pre-built templates or bring their own models from providers like OpenAI,
						Google, Azure, and HuggingFace.
					</p>
					<h3>AutoDev</h3>
					<p>
						AutoDev is an automated AI-driven development framework that uses a multi-agent system
						to streamline the software development lifecycle. It employs a conversation manager and
						an agent scheduler to orchestrate AI agents, which perform tasks such as file editing,
						testing, and tool library retrieval within a secure Docker environment. The framework
						supports various collaboration algorithms to manage agent interactions efficiently.
					</p>
					<h3>Maestro</h3>
					<p>
						Maestro is a Python script that leverages AI models like Claude Opus and GPT to
						orchestrate sub-agents for task breakdown and execution. It demonstrates an AI-assisted
						workflow that breaks down objectives into sub-tasks, executes them, and refines the
						results into a cohesive final output. Maestro also supports integration with APIs like
						Groq for enhanced functionality.
					</p>
					<h3>Mixture Of Agents (MoA)</h3>
					<p>
						MoA by Together AI introduces a layered architecture where each layer consists of several LLM agents.
						These agents refine responses using outputs from the previous layer as auxiliary
						information, integrating diverse capabilities and insights from various models. This
						approach has shown significant improvements in accuracy compared to standalone models
						like GPT-4o.
					</p>
					<h3>GPT-pilot</h3>
					<p>
						GPT-pilot aims to build fully working, production-ready apps through a collaborative
						effort between AI and developers. It employs a series of specialized agents, including
						Specification Writer, Architect, Tech Lead, Developer, Code Monkey, Reviewer,
						Troubleshooter, Debugger, and Technical Writer, to handle different aspects of the
						development process. GPT Pilot emphasizes a step-by-step coding approach, allowing for
						real-time debugging and issue resolution.
					</p>
					<h3>How Do They Work?</h3>
					<p>
						Each tool operates differently, leveraging unique methodologies and architectures to
						achieve their goals:
					</p>
					<ul>
						<li>
							CrewAI simplifies the deployment of multi-agent systems by providing tools and
							templates for rapid development and integration with existing services.
						</li>
						<li>
							AutoDev orchestrates AI agents through a structured conversation and task execution
							model, ensuring secure and efficient collaboration.
						</li>
						<li>
							Maestro utilizes AI models to intelligently break down and execute tasks,
							demonstrating an AI-assisted workflow for enhanced productivity.
						</li>
						<li>
							MoA adopts a layered architecture to integrate insights from multiple LLM agents,
							resulting in improved performance and versatility.
						</li>
						<li>
							GPT-pilot collaborates with developers to create production-ready apps, emphasizing a
							step-by-step approach to coding and debugging.
						</li>
					</ul>
					<h3>From Technical to Creative: The Future of Multi-Agent AI Systems</h3>
					<p>
						Currently, most of these systems are deployed for technical tasks such as software
						development. However, there's potential to adapt these systems for creative tasks.
					</p>
					<p>
						Multi-agent systems can simulate a brainstorming session, where agents independently
						generate ideas and then refine them through discussions. This collaborative process can
						lead to innovative solutions.
					</p>
					<p>
						By assigning specific roles to agents based on their capabilities, these systems can
						balance creative thinking with technical execution. Some agents could specialize in idea
						generation, while others focus on technical feasibility, implementation, and
						optimization.
					</p>
					<p>
						Moreover, these systems can learn from past projects and adapt their strategies over
						time. This learning capability allows the system to continuously improve its creative
						output.
					</p>
					<h3>What we do at Kodiia</h3>
					Our in-house multi-agent system is already here to help you with your creative projects providing
					both artistic and technical guidance. This system is composed of several specialized agents:
					<ul>
						<li>The Coordinator, who determines which agents should tackle the user query.</li>
						<li>The Communicator, who seeks clearance for user's requests.</li>
						<li>
							The Artist, who contributes the creative vision and proposes potential design
							solutions.
						</li>
						<li>The Coder, who offers a high-level program overview and detailed code snippets.</li>
					</ul>
					<p>
						These agents have access to a customized knowledge base that contains a variety of
						projects in fields such as generative art, simulations, procedural design, and gaming.
					</p>
					<p>
						It's important to note that our system is continuously evolving. We are continually
						exploring what it takes to construct genuinely creative artificial systems and how we
						can transform Artificial Intelligence into an Artistic one.
					</p>
					<p>
						Join Kodiia today and build your projects with the help of our agents. Or start building
						your own multi-agent system by following one of our upcoming tutorials. Stay tuned!
					</p>
				</div>
			</article>

			<EmailForm />
			
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
		max-width: 800px;

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
		grid-template-columns: 1fr;
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
		footer {
			flex-direction: column;
		}
	}
</style>
