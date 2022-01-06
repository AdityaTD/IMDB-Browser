import { Bson } from "../deps.ts";

export interface MovieSchema {
    _id?: Bson.ObjectId;
    id: string;
    name: string;
    year: string;
    genre: string;
    poster: string;
    upvotes: number;
    downVotes: number;
    reviews?: ReviewSchema[];
}

export interface ReviewSchema {
    _id?: Bson.ObjectId;
    movieId: string;
    review: string;
}