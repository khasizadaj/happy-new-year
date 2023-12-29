<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SongForm from '$lib/components/SongForm.svelte';

	let languageValue: string;
	let formIsFilledValue: boolean;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		formIsFilledValue = data.formIsFilled;
	});
</script>

<Navbar {languageValue} />
<SongForm {languageValue} />

<Footer {languageValue} />
