import express from 'express';
import cors from 'cors';
import { mongooseConnection } from './database'
import router from './router'
import bodyParser from 'body-parser'

const PORT: number = 3000;

const app = express();

// Have to call body parser before the Router, or it will not parse!
app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(PORT, (): void => {
  mongooseConnection();
  console.log(`Server running on http://localhost:${PORT}`)
});