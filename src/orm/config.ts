export default {
    postgresDB: {
        dialect: 'postgres',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
        username: process.env.MAIN_POSTGRES_USER ?? 'postgres',
        password: process.env.MAIN_POSTGRES_PASSWORD ?? 'adminalejo31',
        port: process.env.MAIN_POSTGRES_PORT ?? 5432,
        host: process.env.MAIN_POSTGRES_HOST ?? 'localhost',
        dbName: process.env.MAIN_POSTGRES_DBNAME ?? 'my_db',
    },
    environment: process.env.NODE_ENV ?? 'dev'
};
