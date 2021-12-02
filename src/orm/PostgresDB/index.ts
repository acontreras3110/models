import {Dialect, Sequelize} from 'sequelize';
import globalConfig from '../config';

export default class PostgresDBSingleton {

    private static _instance: PostgresDBSingleton = new PostgresDBSingleton();

    private readonly _postgres: Sequelize;

    constructor() {
        this._postgres = new Sequelize(
            globalConfig.postgresDB.dbName,
            globalConfig.postgresDB.username,
            globalConfig.postgresDB.password,
            {
                host: globalConfig.postgresDB.host,
                dialect: globalConfig.postgresDB.dialect as Dialect,
                logging: globalConfig.environment === 'prod',
            },
        );
    }

    public static getInstance(): PostgresDBSingleton {
        return this._instance;
    }

    public postgres(): Sequelize {
        return this._postgres;
    }
}








