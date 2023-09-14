// Connection.js file

// Require SQLite3 verbose module
const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database, and if it doesn't exist, create it
const db = new sqlite3.Database(
  "./todo.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    // Error handling for connection
    if (err) {
      return console.error(err.message);
    } else {
      // Success message for successful connection
      console.log("Connected to the SQLite database.");
    }
  }
);

// Serialize runs to ensure sequential execution
db.serialize(() => {
  // Run SQL command to create table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS todo (
            id INTEGER PRIMARY KEY,
            task TEXT
        )`,
    (err) => {
      // Error handling for table creation
      if (err) {
        return console.error(err.message);
      }
      console.log("Created todo table");

    }
  );
});
