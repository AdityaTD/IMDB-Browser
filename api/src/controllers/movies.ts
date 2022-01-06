import { Context } from "../deps.ts";
import { movies } from "../db/mod.ts"

export const randomMovies = (ctx: Context) => {

    const random = movies.aggregate([{$sample: {size: 5}}]);

    return ctx.response.body = {
        success: true,
        movies: random
    }

}