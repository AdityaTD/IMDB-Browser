import { Application } from "./deps.ts";
import { PORT } from "../config.ts";
import router from "./routes/mod.ts";
import { ratelimitRequests } from "./middlewares/ratelimit.ts";

const app = new Application();

app.use(ratelimitRequests);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`Server started on port ${PORT}`);

export default app;