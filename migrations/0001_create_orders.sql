-- Migration number: 0001 	 2025-06-26T00:43:23.933Z

CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount INTEGER
);

INSERT INTO orders(name, amount) VALUES ('produk 1', 1), ('produk 2', 2);