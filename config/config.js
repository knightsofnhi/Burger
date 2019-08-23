module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        "database": "burgers_db",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },

    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },

    "production": {
        "use_env_variable": "JAWSDB_mysql://vl48dah3y4mt1342:ouqp7v1pvxfzhmdj@rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/cpcqzvkjw0zz9aat",
        "dialect": "mysql"
    }
}