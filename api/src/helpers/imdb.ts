import type { IMDBSearchResponse } from "../types/index.d.ts";
import { IMDB_KEY } from "../../config.ts";

export const fetchIMDB = async (name: string) => {
    const data: IMDBSearchResponse = await fetch(`https://www.omdbapi.com/?apikey=${IMDB_KEY}&s=${name}`).then(res => res.json());
    return data;
}