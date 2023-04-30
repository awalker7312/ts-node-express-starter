# ts-node-express-starter
A basic starter for an express api using TypeScript.

## Installation
1. #### Clone the repository:
```bash
git clone https://github.com/awalker7312/ts-node-express-starter.git
```
2. #### Install the dependencies:
```bash
npm install
```

3. #### Set the environment variables:
Create a .env file and add the following environment variables.

`MONGO_URI`

`PORT`

4. #### Start the server:
```bash
npm start
```
The server will start on port 3000 by default.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`PORT`


## API Reference

#### Get all users

```http
  GET /users
```


#### Get item

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |



## Technologies Used
- Node.js
- Express
- TypeScript
- MongoDB

