const path = require('path');

const settings = {
    path: path.normalize(path.join(__dirname, '..')),
    port: process.env.NODE_PORT || 3000,
    database: {
        protocol: "mysql", // or "mysql"
        query: {pool: true},
        host: "127.0.0.1",
        database: "car-parser",
        user: "root",
        password: ""
    }
};

module.exports = settings;