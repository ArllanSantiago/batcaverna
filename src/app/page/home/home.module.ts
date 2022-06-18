import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovieModule } from "src/app/shared/component/movie/movie.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule
        ,MovieModule
    ]
})
export class HomeModule{

}