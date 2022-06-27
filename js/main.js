
function getMovie(idMovie){
    return db.find(m => m.id == idMovie);
}
function setMovieDestak(idMovie) {
    const movie = getMovie(idMovie)
    document.getElementById('banner-destak').style.backgroundImage =`url(${movie.img})`;
    document.getElementById('title-destak').innerHTML = movie.title
    document.getElementById('subtitle-destak').innerHTML = `<span class='text-border'>${movie.idadeMin}</span> ${movie.ano} - ${movie.genero} - ${movie.duracao}`
    document.getElementById('sinopse-destak').innerHTML = movie.sinopse
    document.getElementById('btnPlayer').onclick = ()=>this.goMoviePlayer(movie.id)
    document.getElementById('btnInfo').onclick = ()=>this.goMovieInfo(movie.id)
}


function goMoviePlayer(idMovie){
   window.location.href =`/movie-play.html?id=${idMovie}`;
}

function goMovieInfo(idMovie) {
    (!!getMovie(idMovie).cast)?
        window.location.href =`/movie-info.html?id=${idMovie}`
    :   alert("Informações não disponiveis!")   
}

function loadingMain(){
    this.setMovieDestak(0)
}


