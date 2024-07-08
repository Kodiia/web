<script>
	import {
		height,
		theme,
		textColor
	} from '$lib/store';

	import homeImg from '$lib/images/home.png';
	import agentsImg from '$lib/images/agents.jpeg';

	import NavPanel from '$lib/NavPanel.svelte';
</script>

<div class={$theme}>
	<div class="container" style="min-height: {$height}px;">
		<NavPanel />

		<main>
			<h1 style="margin-top: 80px;">Blog</h1>
			<div class="postContainer" style="border: 1px solid hsl({$textColor + ', 20%'});">
				<div class="postTextContainer">

					<h3
						style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); padding-bottom: 10px;"
					>
					Creative superheroes are here to assist you. Meet Multi-Agent AI Systems.
					</h3>

					<p style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor + ', 20%'});">
						At Kodiia, our research is primarily focused on the development of AI-powered tools
							designed for creative tasks. These tools are particularly geared towards generative,
							computational, and procedural design areas. We believe that multi-agent systems are,
							perhaps, one of the most effective approaches to designing such tools. 
					</p>
					<a href="/blog/multi-agent-systems" class="link">More...</a>
				</div>
				<img
					src="{agentsImg}"
					alt="workshop-outcome-preview"
				/>
			</div>
			
			<div class="postContainer" style="border: 1px solid hsl({$textColor + ', 20%'});">
				<div class="postTextContainer">
					<code>DigitalFUTURES 2024</code>
					<h3
						style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); padding-bottom: 10px;"
					>
						AI Multi-agent systems: Creating a Voxel City
					</h3>

					<p><b>Dates:</b> 25 July – 28 July / 12:00 – 16:00 EST</p>
					<p style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor + ', 20%'});">
						This workshop seeks to delve into the potential applications of multi-agent AI systems
						in architectural design processes.
					</p>
					<a href="/blog/multi-agent-systems-workshop" class="link">More...</a>
				</div>
				<img
					src="https://digitalfutures.international/wp-content/uploads/2024/06/AI-agents-DF-001-SA-lab.png"
					alt="workshop-outcome-preview"
				/>
			</div>

            <div class="postContainer" style="border: 1px solid hsl({$textColor + ', 20%'});">
				<div class="postTextContainer">
					<!-- <code>DigitalFUTURES 2024</code> -->
					<h3
						style="margin-top: 0; border-bottom: 1px solid hsl({$textColor +
							', 20%'}); padding-bottom: 10px;"
					>
                    Getting started guide
					</h3>

					<p style="padding-bottom: 10px; border-bottom: 1px solid hsl({$textColor + ', 20%'});">
						This guide will walk you through the steps to sign up,
					log in, and get started with your first project.
					</p>
					<a href="/blog/getting-started" class="link">More...</a>
				</div>
				<img src={homeImg} alt="home page" loading="lazy" />
			</div>
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
    .postContainer {
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
	.postTextContainer{
		padding-right: 10px;
	}
	.postContainer img {
		width: 100%;
	}
	.postContainer code{
		display: block;
		margin-bottom: 10px;
	}
    a {
        color: inherit;
    }
	/* .link {
		display: block;
		width: fit-content;
		min-height: 40px;
		text-decoration: none;
		background: #1a1a1a;
		color: #f9f9f9;
		padding: 10px;
		border-radius: 10px;
		box-sizing: border-box;
		margin-bottom: 5px;
	}
	.link:hover {
		box-shadow: 0 0 10px #3d9;
	} */
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
        .courseContainer,
		.cardContainer {
			display: grid;
			grid-template-columns: 1fr;
		}
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
