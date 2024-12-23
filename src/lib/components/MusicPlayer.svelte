<script lang="ts">
	import VolumeCross from '$lib/icons/volume-cross.svg?raw';
	import VolumeLoud from '$lib/icons/volume-loud.svg?raw';
	import { STATE } from '$lib/stores.js';
	export let languageValue: string;

	let nameValue: string;

	const unsubscribe = STATE.subscribe((data) => {
		nameValue =
			data.name.value.length > 0
				? data.name.value
				: data.name.default[languageValue as keyof typeof data.name.default];
	});

	let isPlaying: boolean = false;

	const updateMusicPlayer = () => {
		console.debug('isPlaying', isPlaying);
		let button = document.querySelector('.music-player')?.querySelector('button');
		if (!button) return;

		if (isPlaying) {
			isPlaying = false;
			button.classList.remove('is-playing');
		} else {
			isPlaying = true;
			button.classList.add('is-playing');
		}
	};
</script>

<div class="music-player">
	<div class="cover"></div>
	{#if languageValue == 'en'}
		<div class="details">
			<p>"Dust It Off"</p>
			<p>- The Dø</p>
		</div>
	{:else}
		<div class="details">
			<p>"Dust It Off"</p>
			<p>- The Dø</p>
		</div>
	{/if}
	<div class="actions">
		<button class="button is-playing" on:click={updateMusicPlayer}>
			{#if isPlaying}
				{@html VolumeLoud}
			{:else}
				{@html VolumeCross}
			{/if}
		</button>
	</div>
</div>

<style>
	.music-player {
		position: fixed;
		z-index: 1;
		bottom: 20px;
		right: 20px;
		width: 300px;
		background-color: var(--red-darker);
		padding: 2rem;
		display: flex;
		gap: 1rem;
		justify-content: space-around;
		align-items: center;
		width: 300px;
		min-height: 9rem;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.cover {
		flex-grow: 0;
		flex-shrink: 0;
		width: 5rem;
		height: 5rem;
		border-radius: 4px;
		border: 2px solid var(--white);
		background-color: rgba(255, 255, 255, 0.5);
	}

	.details {
		flex-grow: 1;
		flex-shrink: 1;
		margin-right: 2rem;
	}

	.actions {
		width: 5rem;
		height: 5rem;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.button {
		width: 5rem;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.5);
	}

	svg {
		width: 100%;
		height: 100%;
	}

	.is-playing {
		background-color: var(--white);
	}

	p {
		margin: 0;
	}
</style>
