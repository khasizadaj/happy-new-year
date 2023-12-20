<script lang="ts">
	export let languageValue: string;
</script>

<section class="section submitted_songs-section section-submitted_songs">
	<div class="wrapper submitted_songs-wrapper">
		{#if languageValue == 'en'}
			<h1 class="heading">Songs of the year (by you!)</h1>
			<p>
				You can submit song of the year for you. You can see submissions of other people down below.
			</p>
			<p class="note">
				If you have missed it, you can add it <a class="link" href="./submit_song-en.html"
					>from here.</a
				>
			</p>
		{:else}
			<h1 class="heading">İlin seçilmiş mahnıları</h1>
			<p>Sənin və bu sayta gələnlərin əlavə etdiyi mahnıları aşağıda görə bilərsən.</p>
			<p class="note">
				İndi görürsənsə, öz sevimli mahnını <a class="link" href="./submit_song-az.html">buradan</a>
				əlavə edə bilərsən.
			</p>
		{/if}

		<!-- SONGS WILL BE FILLED IN VIA JS -->
		<div id="submitted_songs">
			<div class="song">
				<div class="details">
					<h3 class="song-name">Instant Crush</h3>
					<h3 class="song-artist">Daft Punk</h3>
				</div>
				<div class="actions">
					<a href="https://music.youtube.com/watch?v=khnokW3Mw24" target="_blank"
						><button class="song-link button">Go to music</button></a
					>
				</div>
			</div>
			<div class="song">
				<div class="details">
					<h3 class="song-name">Wish you were here</h3>
					<h3 class="song-artist">Pink Floyd</h3>
				</div>
				<div class="actions">
					<a href="https://music.youtube.com/watch?v=hjpF8ukSrvk" target="_blank"
						><button class="song-link button">Go to music</button></a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.submitted_songs-section {
		padding-block-start: 10vh;
		min-height: 400px;
	}

	#submitted_songs {
		padding-block: 2rem;
	}

	.song {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 2rem;
		height: auto;
		padding-block: 0.5rem;
		min-height: 60px;
	}

	.song-name {
		margin-right: 1rem;
		border: none;
	}

	.song-artist {
		border: none;
		padding: 0;
	}

	.song-artist::before {
		content: 'by';
		margin-right: 1rem;
		color: var(--white-dimmed);
	}
</style>
