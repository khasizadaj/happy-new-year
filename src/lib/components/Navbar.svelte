<script lang="ts">
	import { STATE } from '$lib/stores.js';
	export let languageValue: string;

	const changeLanguage = (lang: string) => {
		if (lang === 'az') {
			STATE.update((value) => ({ ...value, language: 'az' }));
		} else {
			STATE.update((value) => ({ ...value, language: 'en' }));
		}
	};
</script>

<section class="section section-navbar">
	<div class="wrapper wrapper-navbar">
		<div class="logo">
			{#if languageValue === 'en'}
				<a href="/">
					<h3>Letter from JAXA / 2024</h3>
				</a>
			{:else}
				<a href="/">
					<h3>JAXA-dan Məktub / 2024</h3>
				</a>
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
		height: 10vh;
		min-height: 70px;
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
	}

	.language-option.active {
		background-color: var(--white);
		color: var(--red);
	}
</style>
