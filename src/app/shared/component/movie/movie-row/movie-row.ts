export class MovieRow{
    constructor(){
    }
    slug?: string;
    title?: string;
    items!: MovieRowItem;    
}

class MovieRowItem{
    page!:number
    results!:MovieResult[]
    total_pages!:number
    tota_results!:number
}

export class MovieResult{
    id!:number
    poster_path!:string
    original_title!:string
    
}
