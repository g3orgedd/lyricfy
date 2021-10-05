// the code below looks just awful, but I don't know how to make it more elegant

window.addEventListener('load', function() {
    var mediaMax = window.matchMedia('(max-width: 899px)');
    var mediaMin = window.matchMedia('(min-width: 901px)');

    if (mediaMax.matches) {
        document.getElementById("artist").className = "form-control form-control-lg";
        document.getElementById("title").className = "form-control form-control-lg";
        document.getElementById("show_lyrics").className = "btn btn-success btn-lg";
    } else if (mediaMin.matches) {
        document.getElementById("artist").className = "form-control";
        document.getElementById("title").className = "form-control";
        document.getElementById("show_lyrics").className = "btn btn-success";
    }
});

window.addEventListener('resize', function() {
    var mediaMax = window.matchMedia('(max-width: 899px)');
    var mediaMin = window.matchMedia('(min-width: 901px)');

    if (mediaMax.matches) {
        document.getElementById("artist").className = "form-control form-control-lg";
        document.getElementById("title").className = "form-control form-control-lg";
        document.getElementById("show_lyrics").className = "btn btn-success btn-lg";
    } else if (mediaMin.matches) {
        document.getElementById("artist").className = "form-control";
        document.getElementById("title").className = "form-control";
        document.getElementById("show_lyrics").className = "btn btn-success";
    }
});
