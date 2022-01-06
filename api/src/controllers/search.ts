import { Context, helpers } from "../deps.ts";
import { fetchIMDB, errorBuilder, successBuilder } from "../helpers/mod.ts";
// import { movies } from "../db/mod.ts"

export const searchMovies = async (ctx: Context) => {

    const query = helpers.getQuery(ctx);
    if(!query.name) return ctx.response.body = errorBuilder("Name is required");

    const search = await fetchIMDB(query.name);
    if(search.Error) return ctx.response.body = errorBuilder(search.Error);

    const filtered = search.Search.filter(movie => movie.Type === "movie");

    return ctx.response.body = successBuilder(filtered);

}