import { Context, helpers } from "../deps.ts";
import { movies } from "../db/mod.ts"
import { errorBuilder, successBuilder } from "../helpers/mod.ts";

export const randomMovies = async (ctx: Context) => {

    const query = helpers.getQuery(ctx);

    let list = await movies.find()
        .sort({ upvotes: -1 })
        .limit(10)
        .toArray();

    if(query.genre) list = list.filter(movie => movie.genre === query.genre);
    return ctx.response.body = successBuilder(list);

}

export const fetchMovie = async (ctx: MovieContext) => {

    const id = ctx.params.id;
    if(!id) return ctx.response.body = errorBuilder("Id is required");

    const movie = await movies.find({ id }).limit(1).next();
    if(!movie) return ctx.response.body = errorBuilder("Movie not found");

    return ctx.response.body = successBuilder(movie);

}

export const upvote = async (ctx: MovieContext) => {

    const id = ctx.params.id;
    if(!id) return ctx.response.body = errorBuilder("Id is required");

    const update = await movies.updateOne({ id }, { $inc: { upvotes: 1 } });
    if(!update.matchedCount || !update.modifiedCount) return ctx.response.body = errorBuilder("Movie not found");

    const movie = await movies.find({ id }).limit(1).next();
    return ctx.response.body = successBuilder(movie);

}

export const downvote = async (ctx: MovieContext) => {

    const id = ctx.params.id;
    if(!id) return ctx.response.body = errorBuilder("Id is required");

    const update = await movies.updateOne({ id }, { $inc: { downVotes: 1 } });
    if(!update.matchedCount || !update.modifiedCount) return ctx.response.body = errorBuilder("Movie not found");

    const movie = await movies.find({ id }).limit(1).next();
    return ctx.response.body = successBuilder(movie);

}

interface MovieContext extends Context {
    params: {
        id: string
    }
}