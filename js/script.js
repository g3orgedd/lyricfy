var artist, song;

function getArtistAndSong() {
    artist = document.getElementById("artist").value.replace(/ /g, "%20");
    title = document.getElementById("title").value.replace(/ /g, "%20");;

    strFetch = "https://api.lyrics.ovh/v1/"+artist+"/"+title;
    //console.log(strFetch);

    $.get(strFetch, function(data){
        if (data.error === "No lyrics found") {
            document.getElementById("lyricfy_lyrics").innerHTML = "Oops, something went wrong... No lyrics found."
        } else {
            document.getElementById("lyricfy_lyrics").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br class='unselectable'>")
            document.getElementById("lyricfy_lyrics").className = "lyricfy_lyrics_shown";
        }
    })
}
