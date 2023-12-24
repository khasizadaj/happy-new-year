<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import Message from '$lib/components/Message.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SongCTA from '$lib/components/SongCTA.svelte';
	import SubmittedSongs from '$lib/components/SubmittedSongs.svelte';
	import WishForm from '$lib/components/WishForm.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let languageValue: string;
	let formIsFilledValue: boolean;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		formIsFilledValue = data.formIsFilled;
	});
	export let data;
</script>

<Navbar {languageValue} />

{#if formIsFilledValue === false}
	<WishForm {languageValue} />
{:else}
	<Message {languageValue} />
	<SongCTA {languageValue} />
	<SubmittedSongs languageValue={languageValue} songs={data.songs} />
{/if}

<Footer {languageValue} />
