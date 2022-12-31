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





const baseUrlDb = window.location.host;
let urlToEnglishDb;
let urlToAzerbaijaniDb;
if (baseUrlDb.includes("github.io")) {
    urlToEnglishDb = "https://khasizadaj.github.io/happy_new-year/en.html"
    urlToAzerbaijaniDb = "https://khasizadaj.github.io/happy_new-year"
} else {
    urlToEnglishDb = "http://127.0.0.1:5500/en.html"
    urlToAzerbaijaniDb = "http://127.0.0.1:5500/index.html"
}



if (!window.location.href.includes("submit_song")) {
    let result = getData()
    result.then((db) => {
        console.log(db)
        fill(db.songs)
    })
}

const songForm = document.querySelector("form");
songForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let songName = document.querySelector(".js-song_name-input").value;
    let songArtist = document.querySelector(".js-song_artist-input").value;
    let songLink = document.querySelector(".js-song_link-input").value;

    let songNameIsValid = false;
    let feedbackSongName = document.querySelector(".feedback-song_name");

    if (songName == "") {
        feedbackSongName.classList.add("error");
        feedbackSongName.classList.add("active");
        songNameIsValid = false;
    } else {
        feedbackSongName.classList.remove("error");
        feedbackSongName.classList.remove("active");
        songNameIsValid = true;
    }

    let songArtistIsValid = false;
    let feedbackSongArtist = document.querySelector(".feedback-song_artist");

    if (songArtist == "") {
        feedbackSongArtist.classList.add("error");
        feedbackSongArtist.classList.add("active");
        songArtistIsValid = false;
    } else {
        feedbackSongArtist.classList.remove("error");
        feedbackSongArtist.classList.remove("active");
        songArtistIsValid = true;
    }

    let songLinkIsValid = false;
    let feedbackSongLink = document.querySelector(".feedback-song_link");

    if (songLink == "") {
        feedbackSongLink.classList.add("error");
        feedbackSongLink.classList.add("active");
        songLinkIsValid = false;
    } else {
        feedbackSongLink.classList.remove("error");
        feedbackSongLink.classList.remove("active");
        songLinkIsValid = true;
    }

    if (songNameIsValid && songArtistIsValid && songLinkIsValid) {
        let result = getData();
        result.then((db) => {
            console.log(db)
            let newSong = {
                "artist": songArtist,
                "name": songName,
                "link": songLink
            }
            db.songs.push(newSong);
            setData(db)
            console.log(result)
            // setData(data);
            if (window.location.href.includes("en")) {
                window.location.href = `${urlToEnglishDb}#section-submitted_songs`;
            } else {
                window.location.href = `${urlToAzerbaijaniDb}#section-submitted_songs`;
            }
        })
    }
})
