import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { validateJWT } from './middleware/auth.middleware.js';
import path from 'path';
import 'dotenv/config'

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => {
    console.log(err)
  });

const app = express()

app.use(express.static('web/build'))
app.get('/', transferIndexFile)
app.get('/signup', transferIndexFile)
app.get('/login', transferIndexFile)
app.get('/todos', transferIndexFile)
app.get('/message-board', transferIndexFile)
app.get('/chat', transferIndexFile)
app.get('/profile', transferIndexFile)
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

app.use('/api/auth', authRoutes);
app.use('/api/user', validateJWT, userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  })
})

function transferIndexFile(req, res) {
  const __dirname = path.resolve();

  res.sendFile(path.join(__dirname, 'server', 'web', 'build', 'index.html'));
}