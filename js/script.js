function getArtistAndSong() {
    var artist = document.getElementById("artist").value.replace(/ /g, "%20");
    var title = document.getElementById("title").value.replace(/ /g, "%20");;

    strFetch = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
    console.log(strFetch);

    $.get(strFetch, function(data) {
        var lyrics = data.lyrics.replace(/Paroles de la chanson\s.*\spar\s.*\r\n/gm, "");
        
        document.getElementById("lyricfy_lyrics").innerHTML = lyrics.replace(new RegExp("\n", "g"), "<br class='unselectable'>")
        document.getElementById("lyricfy_lyrics").className = "lyricfy_lyrics_shown";
    })
}
