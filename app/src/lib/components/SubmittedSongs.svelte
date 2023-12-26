<script lang="ts">
	class Song {
		name: string;
		artist: string;
		url: string;
		platform: string;
		shared_by: string;
		id: number;
		links: {
			self: {
				href: string;
			};
			type: string;
		};

		constructor(
			name: string,
			artist: string,
			url: string,
			platform: string,
			shared_by: string,
			id: number,
			links: { self: { href: string }; type: string }
		) {
			this.name = name;
			this.artist = artist;
			this.url = url;
			this.platform = platform;
			this.shared_by = shared_by;
			this.id = id;
			this.links = links;
		}
	}

	export let languageValue: string;
	export let songs: Song[] = [];
</script>

<section class="section submitted_songs-section section-submitted_songs" id="submitted_songs">
	<div class="wrapper submitted_songs-wrapper">
		{#if languageValue == 'en'}
			<h1 class="heading">Songs of the year (by you!)</h1>
			<p>
				You can submit song of the year for you. You can see submissions of other people down below.
			</p>
			<p class="note">
				If you have missed it, you can add it <a class="link" href="/share-song">from here</a>.
			</p>
			<div>
				{#each songs as song}
					<div class="song {song.id}" id="song-{song.id}">
						<div class="details">
							<h3>"{song.name}" <span class="note">by</span> {song.artist}</h3>
						</div>
						<div class="actions">
							<a href={song.url} target="_blank"><button class="song-link button">Listen</button></a
							>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<h1 class="heading">İlin seçilmiş mahnıları</h1>
			<p>Sənin və bu sayta gələnlərin əlavə etdiyi mahnıları aşağıda görə bilərsən.</p>
			<p class="note">
				İndi görürsənsə, öz sevimli mahnını <a class="link" href="/share-song">buradan</a>
				əlavə edə bilərsən.
			</p>
			<div>
				{#each songs as song}
					<div class="song {song.id}" id="song-{song.id}">
						<div class="details">
							<h3>"{song.name}" <span class="note">,</span> {song.artist}</h3>
						</div>
						<div class="actions">
							<a href={song.url} target="_blank"><button class="song-link button">Dinlə</button></a
							>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	h3 {
		border: none;
	}
	.submitted_songs-section {
		min-height: 400px;
	}

	#submitted_songs {
		padding-block: 2rem;
	}

	.song {
		display: flex;
		gap: 0;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 2rem;
		height: auto;
		padding-block: 0.5rem;
		min-height: 60px;
	}

	.details {
		margin-right: 1rem;
	}

	.button {
		max-width: 200px;
		padding: 1rem 2rem;
		min-width: 80px;
	}

	@media screen and (max-width: 400px) {
	}
</style>
