<script lang="ts">
	import { language } from '$lib/stores.js';
	export let languageValue: string;

	const changeLanguage = (lang: string) => {
		if (lang === "az") {
			language.update((value) => value = "az");
		} else {
			language.update((value) => value = "en");
		}
	};
</script>

<section class="section section-navbar">
	<div class="wrapper wrapper-navbar">
		<div class="logo">
			{#if languageValue === 'en'}
				<h3>Letter from JAXA</h3>
			{:else}
				<h3>JAXA-dan Məktub</h3>
			{/if}
		</div>
		<div class="language">
			{#if languageValue === 'en'}
				<button type="button" on:click={() => changeLanguage('en')} class="language-option active"
					>EN</button
				>
				<button type="button" on:click={() => changeLanguage('az')} class="language-option"
					>AZ</button
				>
			{:else}
				<button type="button" on:click={() => changeLanguage('en')} class="language-option"
					>EN</button
				>
				<button type="button" on:click={() => changeLanguage('az')} class="language-option active"
					>AZ</button
				>
			{/if}
		</div>
	</div>
</section>

<style>
	.section-navbar {
		height: 100%;
		min-height: 8vh;
		max-height: 10vh;
		margin-block: 5vh;
	}

	.section-navbar > .wrapper {
		margin: 0;
	}
	
	.wrapper-navbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.language {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
		height: 35px;
		border: 2px solid var(--white);
	}

	.language-option {
		font-size: 1.5rem;
		line-height: 35px;
		text-align: center;
		width: 35px;
		height: inherit;
		color: var(--white-dimmed);
		margin: -1px;
		cursor: pointer;
	}

	.language-option.active {
		background-color: var(--white);
		color: var(--red);
	}
</style>
