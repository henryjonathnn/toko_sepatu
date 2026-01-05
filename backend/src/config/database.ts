import postgres from "postgres";
import { env } from "./env";


export const sql = postgres({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    max: 20,
    idle_timeout: 20,
    connect_timeout: 10,
    onnotice: () => { },
});

// Test connection
sql`SELECT 1`.then(
    () => console.log('Database connected.'),
    (err) => {
        console.error('Database connection error:', err);
        process.exit(1);
    }
)

export default sql;
