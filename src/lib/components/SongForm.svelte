<script lang="ts">
	import { goto } from '$app/navigation';

	export let languageValue: string;

	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;

		const formData = new FormData(form);

		let feedbackSongName = document.querySelector('.feedback-song_name') as HTMLElement;
		if (!formData.get('name')) {
			feedbackSongName.style.display = 'block';
		} else {
			feedbackSongName.style.display = 'none';
		}

		let feedbackSongArtist = document.querySelector('.feedback-song_artist') as HTMLElement;
		if (!formData.get('artist')) {
			feedbackSongArtist.style.display = 'block';
		} else {
			feedbackSongArtist.style.display = 'none';
		}

		let feedbackSongLink = document.querySelector('.feedback-song_link') as HTMLElement;
		if (!formData.get('link')) {
			feedbackSongLink.style.display = 'block';
		} else {
			feedbackSongLink.style.display = 'none';
		}

		if (formData.get('name') && formData.get('artist') && formData.get('link')) {
			const res = await fetch(form.action, {
				method: form.method,
				body: formData
			});
	
			if (res.ok) {
				const result = await res.json();
				const data = JSON.parse(JSON.parse(result.data)[0]);
				console.log(data.createdSong);
				goto(`/#song-${data.createdSong.id}`);
			} else {
				console.error('Failed to submit form');
			}
		}
	}
</script>

<section class="section section-form">
	<div class="wrapper form-wrapper">
		{#if languageValue == "en"}
		<h1>Song details</h1>
		
		<p>Please, add details of song down below.</p>
		<form id="song-form" on:submit={handleSubmit} method="POST">
			<div class="input-wrapper">
				<label for="song_name-input">Name</label>
				<input
					type="text"
					class="song_name-input js-song_name-input"
					name="name"
					id="song_name-input"
					/>
					<small class="feedback feedback-song_name"> You forgot to add name of the song. </small>
				</div>
				<div class="input-wrapper">
					<label for="song_artist-input">Artist or Group</label>
				<input
					type="text"
					class="song_artist-input js-song_artist-input"
					name="artist"
					id="song_artist-input"
					/>
					<small class="feedback feedback-song_artist"> You forgot to add artist of the song. </small>
				</div>
				<div class="input-wrapper">
					<label for="song_link-input">Link</label>
					<input
					type="text"
					class="song_link-input js-song_link-input"
					name="link"
					id="song_link-input"
					/>
					<small class="feedback feedback-song_link"> You forgot to add link to the song. </small>
				</div>
                <button type="submit" class="button button-wide">Share song</button>
                <button on:click={() => goto('/#submitted_songs')} class="button button-wide button-secondary mt-2">Go back</button>
			</form>
		{:else }
		<h1>Mahnı haqqında məlumatlar</h1>
		<p>
			Paylaşmaq istədiyin mahnının adını, müğənni və ya qrupun adını və
			mahnını dinləyə biləcəyim linki əlavə et.
		</p>
		<form id="song-form" on:submit={handleSubmit} method="POST">
			<div class="input-wrapper">
				<label for="song_name-input">Ad</label>
				<input type="text" class="song_name-input js-song_name-input" name="name" id="song_name-input">
				<small class="feedback feedback-song_name">
					"Ad" əlavə etməyi unutdun.
				</small>
			</div>
			<div class="input-wrapper">
				<label for="song_artist-input">Müğənni ya da qrup</label>
				<input type="text" class="song_artist-input js-song_artist-input" name="artist" id="song_artist-input">
				<small class="feedback feedback-song_artist">
					"Müğənni" əlavə etməyi unutdun.
				</small>
			</div>
			<div class="input-wrapper">
				<label for="song_link-input">Link</label>
				<input type="text" class="song_link-input js-song_link-input" name="link" id="song_link-input">
				<small class="feedback feedback-song_link">
					"Link" əlavə etməyi unutdun.
				</small>
			</div>
			<button type="submit" class="button button-wide">Mahnı əlavə et</button>
			<button on:click={() => goto('/#submitted_songs')} class="button button-wide button-secondary mt-2">Geri</button>
		</form>
		{/if}
	</div>
</section>

<style>
	.section-form {
		padding-block: 5rem;
		height: 80vh;
		min-height: 500px;
		display: flex;
	}
</style>
