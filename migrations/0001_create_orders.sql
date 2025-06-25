-- Migration number: 0001 	 2025-06-25T20:41:17.940Z

CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount INTEGER
);

INSERT INTO orders(name, amount) VALUES ('produk 1', 2), ('produk 2', 3);