import { Context } from "../deps.ts";
import { movies } from "../db/mod.ts"

const getMovies = (ctx: Context) => {

    const random = movies.aggregate([{$sample: {size: 5}}]);

    return ctx.response.body = {
        success: true,
        movies: random
    }

}

export default getMovies;