import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { MongoMemoryServer } from 'mongodb-memory-server';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config()

// TODO connect a real MongoDB
const mongod = await MongoMemoryServer.create();

mongoose
  .connect(mongod.getUri())
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => {
    console.log(err)
  });

const app = express()

app.use("/", express.static('web/build'))
app.use("/signup", express.static('web/build'))
app.use("/login", express.static('web/build'))
app.use("/todos", express.static('web/build'))
app.use("/message-board", express.static('web/build'))
app.use("/chat", express.static('web/build'))
app.use("/profile", express.static('web/build'))
app.use(cors())
app.use(cookieParser());
app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.url + ' ' + new Date());
  next();
})
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  })
})
