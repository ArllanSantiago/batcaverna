function loading() {
    const urlCurrent = window.location.search;
    const paramsUrl = new URLSearchParams(urlCurrent);
    const idMovie = paramsUrl.get('id');
    console.log(getImgCast(idMovie))
    document.getElementById('banner-destak').style.backgroundImage = `url(${getImgCast(idMovie)})`
}

function getImgCast(id){
    return db[id].imgCast;
}

function getCastActor(idMovie,person){
    const movie = getMovie(idMovie);
    const castPerson = movie.cast.find(actor => actor.person == person);
    document.getElementById('actor-img').src = castPerson.img;
}