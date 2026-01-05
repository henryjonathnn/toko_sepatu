export const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,

    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT || '5432'),
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,

    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: parseInt(process.env.REDIS_PORT || '6379'),
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,

    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY,
    JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY,

    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS
};

// Validate JWT_SECRET
if (!env.JWT_SECRET && env.JWT_SECRET.length < 32) {
   console.error('JWT_SECRET must be set and at least 32 characters.');
   process.exit(1);
}