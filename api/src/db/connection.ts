import { CreateIndexOptions } from "https://deno.land/x/mongo@v0.28.1/mod.ts";
import { DB_URL } from "../../config.ts";
import { MongoClient } from '../deps.ts';
import { MovieSchema } from "./mod.ts";

const dbClient = new MongoClient();

await dbClient.connect(DB_URL);
const db = dbClient.database("aditya");

const movies = db.collection<MovieSchema>("movies");

const indexOption: CreateIndexOptions = {
    indexes: [
        {
            key: {
                id: 1
            },
            name: "id",
            unique: true
        }
    ]
}
await movies.createIndexes(indexOption);

export { db, movies };