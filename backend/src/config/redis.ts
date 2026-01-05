import Redis from "ioredis";
import { env } from "./env";

export const redis = new Redis({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: env.REDIS_PASSWORD || undefined,
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
        const delay = Math.min(times * 50, 2000); // Exponential backoff up to 2 seconds
        return delay;
    }
})

redis.on('connect', () => {
    console.log('Redis connected.');
})

redis.on('error', (err) => {
    console.error('Redis connection error:', err);
})