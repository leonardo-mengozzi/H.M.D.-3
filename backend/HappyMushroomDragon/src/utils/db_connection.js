const sql = require('mssql')

const sqlConfig = {
    user: "sa",
    password: "1234hmd!sa",
    database: "Db_HMD",
    server: "sql_server",
    port: Number(1433),
   /* uso singolo componente
    server: "localhost",
    port: Number(5533),
    */
    pool: {
        max: 10,
        min: 0,
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const query = async (query) => {
    try {
        const connection = await sql.connect(sqlConfig);
        const result = await connection.query(query);
        await connection.close();
        return result.recordset;
    } catch (error) {
        console.error("C'è stato un problema con la connessione al DB: ", error);
        throw error;
    }
}

module.exports = query;