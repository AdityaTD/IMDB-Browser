import { DB_URL } from "../../config.ts";
import { MongoClient } from '../deps.ts';
import { MovieSchema } from "./mod.ts";

const dbClient = new MongoClient();

await dbClient.connect(DB_URL);

const db = dbClient.database("aditya");
const movies = db.collection<MovieSchema>("movies");

await movies.createIndexes({
    indexes: [
        {
            key: {
                id: 1
            },
            name: "id",
            unique: true
        }
    ]
});

export { db, movies };