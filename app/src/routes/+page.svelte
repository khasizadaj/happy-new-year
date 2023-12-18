<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import Navbar from '$lib/components/Navbar.svelte';
	import WishForm from '$lib/components/WishForm.svelte';

	let languageValue: string;
	let nameValue: string;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		nameValue = data.name.value.length > 0
			? data.name.value
			: data.name.default[languageValue as keyof typeof data.name.default];
	});
</script>

<Navbar {languageValue} />
<WishForm {languageValue} />

<h1>
	{nameValue}
</h1>
