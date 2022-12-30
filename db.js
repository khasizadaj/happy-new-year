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
    songDiv.classList.add("song", "wrapper");

    let name = document.createElement('h3');
    name.textContent = song.name;
    name.classList.add("song", "name");

    let artist = document.createElement('h4');
    artist.textContent = song.artist;
    artist.classList.add("song", "artist");

    let link = document.createElement('a');
    let linkButton = document.createElement('button');
    linkButton.textContent = "Go to music";
    linkButton.classList.add("song", "link-btn");
    link.appendChild(linkButton);
    link.href = song.link
    link.target = "_blank"

    songDiv.appendChild(name);
    songDiv.appendChild(artist);
    songDiv.appendChild(link);
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

