<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import SongForm from '$lib/components/SongForm.svelte';

	let languageValue: string;
	let formIsFilledValue: boolean;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		formIsFilledValue = data.formIsFilled;
	});
</script>

<SongForm {languageValue} />
