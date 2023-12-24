import { API_KEY, API_USERNAME } from '$env/static/private';

/**
 * @param {PageLoad} pageLoad
 * @returns {Promise<PageLoad>}
 */
export async function load({fetch }: PageLoad): Promise<PageLoad> {
    let username = API_USERNAME;
    let password = API_KEY;

    try {
        const response = await fetch('http://ny_music_bank.api.javidkhasizada.xyz/v1/songs/', {
            method: 'GET',
            headers: {
                Authorization: 'Basic ' + btoa(`${username}:${password}`),
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const songs = await response.json();
        return { songs: songs };
    } catch (error) {
        console.error('Fetch error:', error);
        return { props: { error: 'Failed to load songs' } };
    }
}
