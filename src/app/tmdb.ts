import { MovieRow } from "./shared/component/movie/movie-row/movie-row";

const API_KEY = "b8105884438eb20c9a2c583f78ef44fe";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint:string)=>{
    let json!:{}
    await fetch(`${API_BASE}${endpoint}`)
    .then(async res => {
        try {
            json =  await res.json() 
        } catch (error) {
            alert (res.headers)
        }
    })
    return json
}

export const loadData = {
    getHomeList : async ()=> {
        return [
            {
                slug:'originals'
                ,title:'Originais do Netflix'
                ,items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'trending'
                ,title:'Bombando na Semana'
                ,items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'toprated'
                ,title:'Em Alta'
                ,items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'action'
                ,title:'Ação'
                ,items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) 
            }
            ,{
                slug:'comedy'
                ,title:'Comédia'
                ,items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) 
            }
            ,{
                slug:'horror'
                ,title:'Terror'
                ,items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) 
            }
            ,{
                slug:'romance'
                ,title:'Românce'
                ,items:await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) 
            }
            ,{
                slug:'documentary'
                ,title:'Documentário'
                ,items:await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) 
            }
        ] as MovieRow[];
    } 
    ,getMovieInfo: async(movieId:number ,type:'movie'|'tv')=>{
        let info = await basicFetch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        
        return info
    }
}
