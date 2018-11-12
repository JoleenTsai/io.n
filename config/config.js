module.exports = {
  "development": {
    "username": "root",
    "password": "rootroot",
    "database": "brewery_db",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "rootroot",
    "database": "brewery_db",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "dialect": "mysql",
    "use_env_variable": "JAWSDB_URL"
  }
}