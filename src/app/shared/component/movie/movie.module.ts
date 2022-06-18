import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeaturedMovieComponent } from "./featured-movie/featured-movie.component";
import { MovieRowComponent } from "./movie-row/movie-row.component";

@NgModule({
    declarations:[
        MovieRowComponent
        ,FeaturedMovieComponent
    ]
    ,imports:[
        CommonModule
    ]
    ,exports:[
        MovieRowComponent
        ,FeaturedMovieComponent
    ]
})
export class MovieModule{

}