import { Bson } from "../deps.ts";

export interface MovieSchema {
    _id?: Bson.ObjectId;
    id: string;
    name: string;
    genre: string;
    upvotes: number;
    downVotes: number;
    releaseDate: Date;
    reviews: ReviewSchema[];
}

export interface ReviewSchema {
    _id?: Bson.ObjectId;
    movieId: string;
    review: string;
}