<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import Message from '$lib/components/Message.svelte';
	import SongCTA from '$lib/components/SongCTA.svelte';
	import DecoMyTreeCTA from '$lib/components/DecoMyTreeCTA.svelte';
	import SubmittedSongs from '$lib/components/SubmittedSongs.svelte';
	import WishForm from '$lib/components/WishForm.svelte';
	import MusicPlayer from '$lib/components/MusicPlayer.svelte';

	let languageValue: string;
	let formIsFilledValue: boolean;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		formIsFilledValue = data.formIsFilled;
	});
	export let data;
</script>

{#if formIsFilledValue === false}
	<WishForm {languageValue} />
	<SubmittedSongs {languageValue} songs={data.songs} />
{:else}
	<Message {languageValue} />
	<DecoMyTreeCTA {languageValue} />
	<SubmittedSongs {languageValue} songs={data.songs} />
	<SongCTA {languageValue} />
{/if}

<MusicPlayer {languageValue} />
