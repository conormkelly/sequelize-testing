# Docker - PostGres - Sequelize Tutorial

## Pre-requisites / assumptions

- Docker is installed locally.

### Initial PostGres Setup

```sh
# Start a postgres container called "test-postgres" with default port exposed to host
docker run --name test-postgres -p 5432:5432 -e POSTGRES_PASSWORD=secret -d postgres
```

#### Verification

```sh
# Enter the interactive terminal for the running container
docker exec -it test-postgres bash

# Then try to access psql:
psql -U postgres

# We can verify the connection is working properly by checking the connection info:
\conninfo
```

#### Note

If you stop the container or restart your PC, spin it up again via:

```sh
# Start the container
docker start test-postgres
```

## Getting Started

```
npm install
npm start
```

## Endpoints

### /users

- GET  
  Retrieves all users.

- POST

  Creates a new user.

  Sample request body:

  ```json
  {
    "firstName": "Bob",
    "lastName": "Roberts"
  }
  ```

## TODO

- Add Postman / Newman tests.
