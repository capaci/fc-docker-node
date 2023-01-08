const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'full_cycle',
    port: 3306,

});

createTableSql = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        UNIQUE (name)
    )
`
connection.query(createTableSql)

// create the first user if it doesnt exists yet
connection.query('INSERT IGNORE INTO users (name) VALUES (?)', ['Rafael'], (err, result) => {
    if (err) throw err;
    console.log('User created');
});

app.get('/', (req, res) => {
    users = connection.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ul>
                ${result.map(user => `<li>${user.name}</li>`).join('')}
            </ul>
        `);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
