import PostgresDB from './PostgresDB';

export default {
    PostgresDB: PostgresDB.getInstance().postgres(),
};
