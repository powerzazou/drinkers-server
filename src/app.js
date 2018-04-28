// Application principale
// ======================

import createLogger from 'morgan'
import express from 'express'
import mongoose from 'mongoose'

import 'colors'

import Users from './routes/users'

mongoose.Promise = Promise

const app = express()

if (app.get('env') !== 'test') {
  app.use(createLogger(app.get('env') === 'development' ? 'dev' : 'combined'))
}

// Middlewares et routes applicatifs

app.use(Users)

export default app
