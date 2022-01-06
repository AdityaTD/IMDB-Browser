import { Context, helpers } from "../deps.ts";
import { fetchIMDB, errorBuilder, successBuilder } from "../helpers/mod.ts";
import { movies, MovieSchema } from "../db/mod.ts"

export const searchMovies = async (ctx: Context) => {

    const query = helpers.getQuery(ctx);
    if(!query.name) return ctx.response.body = errorBuilder("Name is required");

    const search = await fetchIMDB(query.name);
    if(search.Error) return ctx.response.body = errorBuilder(search.Error);

    const filtered = search.Search.filter(movie => movie.Type === "movie");
    const structured: MovieSchema[] = filtered.map(movie => {
        return {
            id: movie.imdbID,
            name: movie.Title,
            year: movie.Year,
            genre: "N/A", 
            poster: movie.Poster,
            upvotes: 0,
            downVotes: 0
        }
    });

    await movies.insertMany(structured, { ordered: false }).catch(() => null)

    return ctx.response.body = successBuilder(filtered);

}