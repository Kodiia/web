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
</script>

<form action="?/register" method="POST" class="formContainer">
	<div class="formFieldContainer" style="border-top: 1px solid hsl({$textColor + ', 20%'});">
		<label for="email" class="formLabel">
			<span class="labelSpan">Subscribe to stay ahead in the innovation game</span>
		</label>
		<div>
			<input
				type="email"
				name="email"
				class="formInput"
				placeholder="your@email.com"
				style="background: hsl({$secondaryColor}) !important; color: hsl({$textColor}) !important; "
			/>
			<button
				type="submit"
				class="submitButton"
				style="background: hsl({$primaryColor}); color: #1a1a1a;">SUBSCRIBE</button
			>
		</div>
	</div>
</form>

<style>
	.formFieldContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px 0;
		padding-top: 50px;
        transition: all 0.25s;
	}

	input {
		appearance: none;
		font-family:
			Source Code Pro,
			sans-serif;
		font-size: 1rem;
		transition: all 0.25s;
		margin-top: 10px;
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
</style>
