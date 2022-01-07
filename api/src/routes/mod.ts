import { Router } from "../deps.ts";
import { randomMovies, searchMovies, fetchMovie, upvote, downvote } from "../controllers/mod.ts";

const router = new Router();

router
    .get('/movies', randomMovies)
    .get('/movies/:id', fetchMovie)
    .get('/movies/:id/upvote', upvote)
    .get('/movies/:id/downvote', downvote)
    .get('/search', searchMovies);

export default router;