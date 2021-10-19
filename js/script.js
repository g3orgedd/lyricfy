function showLyrics() {
    var artist = document.getElementById("artist").value.replace(/ /g, "%20");
    var title = document.getElementById("title").value.replace(/ /g, "%20");;

    strFetch = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
    //console.log(strFetch);

    getLyrics(strFetch);
}

function changeClassName() {
    document.getElementById("lyricfy_lyrics").className = "lyricfy_lyrics_shown";
}

function getLyrics(strFetch) {
    var request = new XMLHttpRequest();
    
    request.open('GET', strFetch, true);
    request.responseType = 'json';

    request.onload = function () {
        if (this.readyState === 4) {
            if (this.status != 200) {
                document.getElementById("lyricfy_lyrics").innerHTML = "Oops, something went wrong... No lyrics found.";  
                changeClassName();
            } 
            else {
                var lyrics = request.response['lyrics'].replace(/Paroles de la chanson\s.*\spar\s.*\r\n/gm, "");
                
                document.getElementById("lyricfy_lyrics").innerHTML = lyrics.replace(new RegExp("\n", "g"), "<br class='unselectable'>");              
                changeClassName();
            } 
        }
    };
    request.send();
}
