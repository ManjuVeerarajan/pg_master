# pg_master
Portfolio generation for carbon emission

## Description
Portfolio generation for carbon emission. This project consists of a frontend and a backend to manage and display carbon portfolio data.

## Prerequisites
- Node.js
- npm
- PostgreSQL (for the backend)


- the front end can be started with the cmd - npm run dev (from the frontend folder)
- the back end can be started with the cmd - nest start (from the backend folder)

## steps to pull the database from docker image
- docker pull manjuvr/portfolio
- Run the Docker container using the following command:
    - docker run --name my_postgres_container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydatabase -d -p 5432:5432 manjuvr/portfolio:latest
- Using psql command - Connect to the PostgreSQL database using the following command:
  - psql -h localhost -U postgres -d mydatabase (or)
- Using Docker exec:
    - docker exec -it my_postgres_container psql -U postgres -d mydatabase
-Export the Database from Docker
    - docker exec -it my_postgres_container pg_dump -U postgres -d mydatabase -f /tmp/database_dump.sql
    - docker cp my_postgres_container:/tmp/database_dump.sql /tmp/database_dump.sql
-Import the Database to local
    - psql -h localhost -U postgres -d mydatabase -f /tmp/database_dump.sql