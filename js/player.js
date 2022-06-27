

function loading() {
    const urlCurrent = window.location.search;
    const paramsUrl = new URLSearchParams(urlCurrent);
    const idMovie = paramsUrl.get('id');

    document.getElementById('media-player').src = getLinkMovie(idMovie)
}


function getLinkMovie(id){
    return db[id].link;
}