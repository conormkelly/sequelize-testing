# PostGres - Sequelize Demo

## About

This is a basic Express API intended to demo the use of PostGres with the sequelize framework.
It has little to no error handling and a handful of CRUD operations.

## PostGres Setup

### Prerequisites

- [Docker](https://docs.docker.com/get-docker)
- [docker-compose](https://docs.docker.com/compose/install/)

  **NOTE:** On Windows, `docker-compose` is bundled along with Docker.

### Steps

```sh
# Start the PostGres container
npm run db:start

# Install dependencies
npm install

# Start the Express API
npm start

# SQL generated by sequelize appears in the terminal as a debug log.

# Try to hit some endpoints such as:
# GET http://localhost:3000/api/users
# and note the output

# Add users via a POST request to the same route.

# When you're finished, you can shutdown PostGres via:
npm run db:stop
```

## /api endpoints

- **GET /users**  
  Retrieves all users.

- **POST api/users**  
  Creates a new user.

  Sample request body:

  ```json
  {
    "firstName": "Bob",
    "lastName": "Roberts"
  }
  ```

- **PUT /users/:id**  
  Modifies an existing user.

  ```json
  {
    "firstName": "John",
    "lastName": "Johnson"
  }
  ```

- **DELETE /users/:id**  
  Deletes a user by id.

## TODO

- Add tests.
- Add a script to seed test data.
