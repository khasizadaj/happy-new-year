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

	let count = songs.length;
	$: perPage = 7;
	$: currentPage = 1;
	$: shortSongs = songs.slice((currentPage - 1) * perPage, currentPage * perPage);

	const updatePagination = (direction: string) => {
		if (currentPage === 1 && direction === 'previous') {
			return;
		}
		if (currentPage * perPage >= count && direction === 'next') {
			return;
		}

		if (direction === 'next') {
			currentPage++;
		} else if (direction === 'previous') {
			currentPage--;
		}
	};
</script>

<section class="section submitted_songs-section section-submitted_songs mb-5" id="submitted_songs">
	<div class="wrapper submitted_songs-wrapper">
		<h1 class="heading">Songs of the year (by you!)</h1>
		<p>
			You can submit song of the year for you. You can see submissions of other people down below.
		</p>
		<p class="note">
			If you have missed it, you can add it <a class="link" href="/share-song">from here</a>.
		</p>
		<div class="mt-4 mb-4">
			{#each shortSongs as song}
				<div class="song {song.id}" id="song-{song.id}">
					<div class="details">
						<h3>"{song.name}" <span class="note">by</span> {song.artist}</h3>
					</div>
					<div class="actions">
						<a href={song.url} target="_blank"><button class="song-link button">Listen</button></a>
					</div>
				</div>
			{/each}
		</div>
		<div class="pagination">
			<button class="button button-secondary" on:click={() => updatePagination('previous')}
				>{'<'}</button
			>
			{#if languageValue == 'en'}
				<p>Page {currentPage} of {Math.ceil(count / perPage)}</p>
			{:else}
				<p>{currentPage} / {Math.ceil(count / perPage)}</p>
			{/if}
			<button class="button button-secondary" on:click={() => updatePagination('next')}
				>{'>'}</button
			>
		</div>
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
		height: auto;
		padding-block: 1rem;
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

	.pagination {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-top: 2rem;
		gap: 2rem;
	}

	.pagination > p {
		margin: 0;
	}
	.pagination > .button {
		padding: 1rem;
		padding-bottom: 1.4rem;
		min-width: 5rem;
	}

	@media screen and (max-width: 400px) {
	}
</style>
