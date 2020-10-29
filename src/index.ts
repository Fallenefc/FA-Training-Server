import express from 'express';
import cors from 'cors';
import { mongooseConnection } from './database'
import router from './router'
import bodyParser from 'body-parser'

// Defining the PORT number. Maybe it would be useful to put it an environment variable
const PORT: number = 3000;

const app = express();

// Have to call body parser before the Router, or it will not parse!
// Also using CORS, then router
app.use(bodyParser.json())
app.use(cors())
app.use(router)

// When starting the server, also starting the MongoDB connection
app.listen(PORT, (): void => {
  mongooseConnection();
  console.log(`Server running on http://localhost:${PORT}`)
});