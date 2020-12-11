import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const limiter = new RateLimiterMemory({
  keyPrefix: 'rateLimit',
  points: 10,
  duration: 30,
  blockDuration: 60,
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void | Response> {
  try {
    await limiter.consume(request.ip);
    return next();
  } catch (err) {
    return response.status(429).send('Too Many requests');
  }
}
