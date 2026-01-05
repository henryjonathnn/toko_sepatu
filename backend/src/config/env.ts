export const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 7001,

    DB_HOST: process.env.DB_HOST!, // ! = non-null assertion
    DB_PORT: parseInt(process.env.DB_PORT!),
    DB_USER: process.env.DB_USER!,
    DB_PASSWORD: process.env.DB_PASSWORD!,
    DB_NAME: process.env.DB_NAME!,

    REDIS_HOST: process.env.REDIS_HOST!,
    REDIS_PORT: parseInt(process.env.REDIS_PORT!),
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,

    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY || '15m',
    JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || '7d',

    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:5173',
};

// Validate JWT_SECRET
if (!env.JWT_SECRET || env.JWT_SECRET.length < 32) {
   console.error('JWT_SECRET must be set and at least 32 characters.');
   process.exit(1);
}

// Validate DB_PASSWORD
if (!env.DB_PASSWORD) {
    console.error('DB_PASSWORD is required.');
    process.exit(1);
}