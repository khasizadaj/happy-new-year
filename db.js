const TOKEN = "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";
const GIST_ID = "9804bd0b00bed5f143568382158121d1";
const GIST_FILENAME = "db.json";

/* 
 * Reads the JSON file inside of the gist
 */
async function getData() {
    const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
    const gist = await req.json();
    return JSON.parse(gist.files[GIST_FILENAME].content);
}

console.log(getData())

/* 
* Puts the data you want to store back into the gist
*/
// TODO Make sure that list is appended not overridden
async function setData(data) {
    const req = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            files: {
                [GIST_FILENAME]: {
                    content: JSON.stringify(data),
                },
            },
        }),
    });

    return req.json();
}

function createSongElement(song) {
    let songDiv = document.createElement('div');
    songDiv.classList.add("song");

    let name = document.createElement('h3');
    name.textContent = song.name;
    name.classList.add("song-name");

    let artist = document.createElement('h3');
    artist.textContent = song.artist;
    artist.classList.add("song-artist");

    let link = document.createElement('a');
    let linkButton = document.createElement('button');
    linkButton.textContent = "Go to music";
    linkButton.classList.add("song-link", "button");
    link.appendChild(linkButton);
    link.href = song.link
    link.target = "_blank";

    let details = document.createElement('div');
    details.classList.add("details");
    let actions = document.createElement('div');
    actions.classList.add("actions");

    details.appendChild(name);
    details.appendChild(artist);
    actions.appendChild(link);
    songDiv.append(details);
    songDiv.append(actions);
    return songDiv;
}

async function fill(songs) {
    let listOfMusic = document.querySelector("#submitted_songs");

    songs.forEach(song => {
        console.log(song)
        let songElement = createSongElement(song);
        console.log(songElement)
        listOfMusic.appendChild(songElement)
    });
}

let result = getData()

result.then((db) => {
    console.log(db)
    fill(db.songs)
})

