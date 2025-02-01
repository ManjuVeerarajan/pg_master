# Use the official PostgreSQL image
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password

# Copy the initialization script to create the table and import data
COPY database_dump.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432