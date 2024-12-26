<script lang="ts">
	import VolumeCross from '$lib/icons/volume-cross.svg?raw';
	import VolumeLoud from '$lib/icons/volume-loud.svg?raw';
	import Music from '$lib/icons/music.svg?raw';
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
		let cover = document.querySelector('.music-player')?.querySelector('.cover');
		let audio: HTMLAudioElement | null = document.getElementById('music-player-2');
		if (!button || !audio) return;

		audio.loop = true;
		audio.volume = 0.7;

		if (isPlaying) {
			isPlaying = false;
			button.classList.remove('is-playing');
			cover?.classList.remove('glow');
			audio.pause();
		} else {
			isPlaying = true;
			button.classList.add('is-playing');
			cover?.classList.add('glow');
			audio.play();
		}
	};
</script>

<audio id="music-player-2" hidden>
	<source src="jingle-bells.mp3" type="audio/mpeg" />
	Your browser does not support the audio element.
</audio>
<div class="music-player">
	<div class="cover">
		{@html Music}
	</div>
	<div class="actions">
		<button class="button" on:click={updateMusicPlayer}>
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
		gap: 2rem;
		justify-content: space-around;
		align-items: center;
		width: max-content;
		min-height: 9rem;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.cover {
		flex-grow: 0;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 5rem;
		height: 5rem;
		border-radius: 4px;
		border: 1px solid var(--white);
		background-color: transparent;
		position: relative;
	}

	@keyframes glow {
		0% {
			box-shadow: 0 0 5px var(--white);
			transform: rotate(0deg);
		}
		50% {
			box-shadow:
				0 0 15px var(--white),
				0 0 30px var(--white);
			transform: rotate(180deg);
		}
		100% {
			box-shadow: 0 0 5px var(--white);
			transform: rotate(360deg);
		}
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

	/* hack to have the glow effect on the cover after starting the music */
	/* otherwise svelte will purge the css class */
	:global(.cover.glow) {
		animation: glow 2s linear infinite;
		transition: all 0.5s ease-in;
		border-radius: 24px;
	}

	:global(.svg) {
		width: 100%;
		height: 100%;
	}

	:global(.button.is-playing) {
		background-color: var(--white);
	}
</style>
