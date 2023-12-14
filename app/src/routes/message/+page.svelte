<script lang="ts">
	import { language } from '$lib/stores.js';

	import Navbar from '$lib/components/Navbar.svelte';

	let languageValue: string;

	const unsubscribe = language.subscribe((value) => {
		languageValue = value;
	});
</script>

<Navbar languageValue={languageValue}/>