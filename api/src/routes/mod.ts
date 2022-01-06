import { Router } from "../deps.ts";
import { randomMovies, searchMovies } from "../controllers/mod.ts";

const router = new Router();

router.get('/movies', randomMovies);
router.get('/search', searchMovies);

export default router;