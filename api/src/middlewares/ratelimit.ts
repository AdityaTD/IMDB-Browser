import { Middleware } from "../deps.ts";
import type { Ratelimit } from "../types/index.d.ts";

const RATELIMIT_TIME = 1;
const TOTAL_RATELIMIT = 1000;

const remainigRequests = new Map<string, Ratelimit>();

export const ratelimitRequests: Middleware = async (ctx, next) => {
    const { ip } = ctx.request;
    const timestamp = Date.now();

    ctx.response.headers.set("X-RateLimit-Limit", TOTAL_RATELIMIT.toString());

    if (remainigRequests.has(ip) && timestamp - remainigRequests.get(ip)!.lastRequestTimestamp > RATELIMIT_TIME) remainigRequests.delete(ip);
    if (!remainigRequests.has(ip)) remainigRequests.set(ip, { remaining: TOTAL_RATELIMIT, lastRequestTimestamp: timestamp });

    if (remainigRequests.has(ip) && remainigRequests.get(ip)!.remaining === 0) {
        remainigRequests.set(ip, { remaining: 0, lastRequestTimestamp: timestamp });
        ctx.response.status = 429;
        ctx.response.headers.set("X-RateLimit-Remaining", "0");
        return ctx.response.body = { error: "Too many requests" };
    } else {
        await next();
        remainigRequests.set(ip, { remaining: remainigRequests.get(ip)!.remaining - 1, lastRequestTimestamp: timestamp });
        return ctx.response.headers.set("X-RateLimit-Remaining", remainigRequests.get(ip) ? remainigRequests.get(ip)!.remaining.toString() : TOTAL_RATELIMIT.toString());
    }
}; 