<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import Message from '$lib/components/Message.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SongCTA from '$lib/components/SongCTA.svelte';
	import SubmittedSongs from '$lib/components/SubmittedSongs.svelte';
	import WishForm from '$lib/components/WishForm.svelte';

	let languageValue: string;
	let nameValue: string;
	let formIsFilledValue: boolean;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		nameValue =
			data.name.value.length > 0
				? data.name.value
				: data.name.default[languageValue as keyof typeof data.name.default];
		formIsFilledValue = data.formIsFilled;
	});
</script>

<Navbar {languageValue} />

{#if formIsFilledValue === false }
	<WishForm {languageValue} />
{:else}
	<Message {languageValue} />
	<SongCTA {languageValue}/>
	<SubmittedSongs {languageValue}/>
{/if}
