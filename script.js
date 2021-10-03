var artist, song;

function getArtistAndSong() {
    artist = document.getElementById("artist").value.replace(/ /g, "%20");
    title = document.getElementById("title").value.replace(/ /g, "%20");;

    strFetch = "https://api.lyrics.ovh/v1/"+artist+"/"+title;
    console.log(strFetch);

    $.get(strFetch, function(data){
        document.getElementById("lyrics_body").innerHTML=data.lyrics.replace(new RegExp("\n", "g"), "<br>")
    })
}