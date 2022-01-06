import { Context } from "../deps.ts";
import { movies } from "../db/mod.ts"

export const randomMovies = async (ctx: Context) => {

    const random = await movies.find()
                .limit(10)
                .skip(Math.floor(Math.random() * await movies.countDocuments()))
                .toArray();

    return ctx.response.body = {
        success: true,
        movies: random
    }

}