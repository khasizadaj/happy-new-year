<script lang="ts">
	import { goto } from '$app/navigation';

	import { STATE } from '$lib/stores.js';
	export let languageValue: string;

	let nameValue: string;

	STATE.subscribe((data) => {
		nameValue =
			data.name.value.length > 0
				? data.name.value
				: data.name.default[data.language as keyof typeof data.name.default];
	});
</script>

<section class="section section-songs">
	<div class="wrapper songs-wrapper">
		{#if languageValue == 'en'}
			<div class="cta mb-4">
				<h3>{nameValue}! Wanna share your favorite song with me?</h3>
				<p>
					Share your most memorable piece with me that all people (including me) who visit the
					website will enjoy.
				</p>
				<button class="button button wide" on:click={() => goto('share-song')}>I am down!</button>
			</div>
		{:else}
			<div class="cta mb-4">
				<h3>{nameValue}, sevdiyin mahnını mənimlə bölüşmək istəmirsən?</h3>
				<p>
					İl ərzində sənin üçün ən yaddaq qalan mahnını mənimlə bölüş və sayta gələn hamı (mən
					daxil) mahnılardan həzz alsın.
				</p>
				<button class="button button wide" on:click={() => goto('share-song')}>Əlbəttə ki!"</button>
			</div>
		{/if}
	</div>
</section>

<style>
	.section-songs {
		display: flex;
	}
</style>
