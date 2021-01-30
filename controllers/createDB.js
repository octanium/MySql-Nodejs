import mysql from 'mysql';

const createTables = async (config, res) => {
try {
    console.log(config);
    const connection = mysql.createConnection(config);
    await connection.connect();
    await connection.query('CREATE TABLE IF NOT EXISTS customer (cid int NOT NULL AUTO_INCREMENT, name VARCHAR(50), address VARCHAR(50), mobile int, PRIMARY KEY (cid) )');
    await connection.query('CREATE TABLE IF NOT EXISTS customer (cid int NOT NULL AUTO_INCREMENT, name VARCHAR(50), address VARCHAR(50), mobile int, PRIMARY KEY (cid) )');
    await connection.query('CREATE TABLE IF NOT EXISTS customer (cid int NOT NULL AUTO_INCREMENT, name VARCHAR(50), address VARCHAR(50), mobile int, PRIMARY KEY (cid) )');
    connection.end();
    return res.send({ success: true, message: 'Relation customer created' });
}
catch (err) { throw err }
}

const createDb = async (req, res) => {
    try {
        const connectionConfig = {
            host: 'localhost',
            user: 'root',
            // database: 'testdb',
            password: 'rootpass',
        };
        const connection = mysql.createConnection(connectionConfig);
        await connection.connect();
        await connection.query('CREATE DATABASE IF NOT EXISTS testdb');
        connection.end();
        connectionConfig.database = 'testdb';
        return await createTables(connectionConfig, res)
    }
    catch (err) {
        console.log('Error: ', err);
        return res.send({ code: 400, message: err.message, success: false })
    }
}

export default createDb;