# PostGres - Sequelize Demo

## About

This is a basic Express API intended to demo the use of PostGres with the sequelize framework.  
It has little to no error handling and a handful of CRUD operations.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker)
- [docker-compose](https://docs.docker.com/compose/install/)

  **NOTE:** On Windows, `docker-compose` is bundled along with Docker.

## Local Development

To start the DB and API:

```sh
npm run docker:up
```

To stop the DB and API:

```sh
npm run docker:down
```

## /api endpoints

- **GET /users**  
  Retrieves all users.

- **POST /users**  
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
