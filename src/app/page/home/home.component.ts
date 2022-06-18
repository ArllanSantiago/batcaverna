import { Component, OnInit } from "@angular/core";
import { MovieRow } from "src/app/shared/component/movie/movie-row/movie-row";
import * as db from '../../tmdb'
@Component({
    templateUrl: './home.component.html'
    , styles: [`
        .header-area{
            display: flex;
            justify-content:space-between;
            margin:15px 15px -70px 30px;

        }      
        .app-title{
            margin: 0px;  
            font-size: 40px; 
            font-weight: bold; color: crimson
        }
        .app-user {
            background-color: crimson;
            border-radius: 5px;
            padding: 5px 15px;
            transition: all ease 0.2s;
            font-size: 35px;
            font-weight:bold;
            color:#fff;
            text-decoration:none;

        }
        .app-user:hover{
            opacity: 0.7;
        }
    `
    ]
})
export class HomeComponent implements OnInit {
    movieRowList: MovieRow[] = new Array<MovieRow>()
    featuredMovieInfo = {}
    async ngOnInit(): Promise<void> {
        this.movieRowList = await db.loadData.getHomeList()

        const FEATURED_MOVIE_ROW = this.movieRowList.filter(row => row.slug = "originals")[0]
        const INDEX_FEATURED_MOVIE = Math.floor(Math.random() * FEATURED_MOVIE_ROW.items.results.length - 1) + 1

        this.featuredMovieInfo = await db.loadData.getMovieInfo(FEATURED_MOVIE_ROW.items.results[INDEX_FEATURED_MOVIE].id, 'tv')

    }

}