const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "kweb_db",
});

const runQuery = async(sql) =>{
    const connection = await pool.getConnection();
    try {
        const [result] = await connection.query(sql);
        return result;
    } finally {
        connection.release();
    }
}

module.exports = { runQuery };