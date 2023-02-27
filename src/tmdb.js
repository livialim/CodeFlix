const API_KEY = 'c74180fd47d14029c087652b3906ef1e'
const API_BASE = 'https://api.themoviedb.org/3'

/* o fetch serve para repeção*/

const basicFetch  = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}&language=pt-BR&api_key=${API_KEY}`) /* requisição para serviço externo, ou seja, esperar resposta*/ 
    const json = await req.json(); /* roda o comando e espera a resposta */
    return json;
}
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genes=28`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            // eslint-disable-next-line default-case
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key${API_KEY}`);
                break;

            }
        }
        return info;
    }
}