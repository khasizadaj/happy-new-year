<script lang="ts">
	export let languageValue: string;
</script>

<section class="section section-footer">
	{#if languageValue === 'en'}
		<footer>
			<a href="http://www.javidkhasizada.xyz" target="_blank"
				><button class="button button-ghost link">> Show Blog</button></a
			>
			<a href="https://github.com/khasizadaj" target="_blank"
				><button class="button button-ghost link">> Show GitHub</button></a
			>
		</footer>
	{:else}
		<footer>
			<a href="http://www.javidkhasizada.xyz" target="_blank"
				><button class="button button-ghost link">> Bloqa bax</button></a
			>
			<a href="https://github.com/khasizadaj" target="_blank"
				><button class="button button-ghost link">> GitHuba bax</button></a
			>
		</footer>
	{/if}
</section>

<style>
	.button {
		font-size: 1.5rem;
	}
	.section-footer {
		margin-block-end: 5vh;
	}
	@media screen and (max-width: 400px) {
		footer {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: center;
		}
	}
</style>
