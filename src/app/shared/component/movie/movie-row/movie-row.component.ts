import { Component, Input } from "@angular/core";
import { MovieResult, MovieRow } from "./movie-row";
@Component({
    selector:'app-movie-row'
    ,templateUrl: './movie-row.component.html'
    ,styleUrls:['./movie-row.component.css']
})
export class MovieRowComponent{
    _movieRow :MovieRow = new MovieRow();
    @Input('value') set movieRow(value:MovieRow){
        this._movieRow = value
        
    }
    get movieRow():MovieRow{
        return this._movieRow
    }
}