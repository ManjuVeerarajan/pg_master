CREATE TABLE projects
(
    id                     SERIAL PRIMARY KEY,
    name                   VARCHAR(255),
    country                VARCHAR(100),
    image                  TEXT,
    price_per_ton          NUMERIC(10, 2),
    offered_volume_in_tons NUMERIC(10, 2),
    distribution_weight    NUMERIC(10, 4),
    supplier_name          VARCHAR(255),
    earliest_delivery      DATE,
    description            TEXT
);


-- Import data from the CSV file
COPY projects(id, name, country, image, price_per_ton, offered_volume_in_tons, distribution_weight, supplier_name, earliest_delivery, description)
    FROM '/docker-entrypoint-initdb.d/data.csv'
    WITH (FORMAT csv, HEADER true, DELIMITER ',');

