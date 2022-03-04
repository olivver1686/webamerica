const API_KEY = '3853c0ec51651fe79b975a3229a35e71';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- orignal netflix 
- recomendados
- en alta
- comedia
- terror
- romance
- documentales
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json =await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Recientes',
                title: 'Recientes',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Mas vistas',
                title: 'Tendencias',
                items: await basicFetch(`/trending/all/week?language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Mejor valoradas',
                title: 'Mejor valoradas',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Accion',
                title: 'Accion',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedia',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Clasicas',
                title: 'Clasicas',
                items: await basicFetch(`/movie/top_rated?language=pt-US&api_key=${API_KEY}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-US&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-US&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;

            }
        }
        
        return info;
    }
}