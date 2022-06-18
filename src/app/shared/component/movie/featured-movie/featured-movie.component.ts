import { Component, Input } from "@angular/core";

@Component({
    selector:'app-featured-movie'
    ,templateUrl:'./featured-movie.component.html'
    ,styleUrls:['./featured-movie.component.css']
})
export class FeaturedMovieComponent{
    _featuredMovie = {}
    @Input('value') set featuredMovie (value:any){
        this._featuredMovie = {
            ...value
            ,backdrop_path: 'https://image.tmdb.org/t/p/original'+value.backdrop_path
            ,genres_descr: value.genres.map((gener: { name: string; }) => gener.name).join(', ')
        }
    }

    get featuredMovie(): any{
        return this._featuredMovie
    }
}