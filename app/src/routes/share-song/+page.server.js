import { API_KEY, API_USERNAME } from '$env/static/private';

export function load({ cookies }) {
	let songAdded = cookies.get('songAdded');
	console.log(songAdded);
	if (!songAdded) {
		cookies.set('songAdded', "0", { path: '/share-song' });
	} else {
		if (songAdded == "1")
		{
			cookies.set("songAdded", "0", { path: '/share-song' })
			return ;
		}
	}

	return {
		songAdded: songAdded
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		let username = API_USERNAME;
		let password = API_KEY;
		const formData = request.formData();

		console.log(request);
		const songData = {
			name: (await formData).get('name'),
			artist: (await formData).get('artist'),
			url: (await formData).get('link'),
			platform: "YouTube"
		}
		let createdSong;
		try {
			const response = await fetch('http://ny_music_bank.api.javidkhasizada.xyz/v1/songs/', {
				method: 'POST',
				headers: {
					Authorization: 'Basic ' + btoa(`${username}:${password}`),
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(songData)
			});

			console.log(JSON.stringify(songData));
			if (response.ok) {
				console.log('Song created');
				createdSong = await response.json();
				console.log(createdSong);
			} else {
				console.error('Failed to create song.', response);
			}
		} catch (error) {
			console.error('Failed to create song', error);
		}

		return JSON.stringify({
			success: true,
			createdSong: createdSong
		});
	}
};