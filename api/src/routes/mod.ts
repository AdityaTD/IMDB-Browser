import { Router } from "../deps.ts";
import getMovies from "../handlers/movies.ts";

const router = new Router();

router.get('/movies', getMovies);

export default router;