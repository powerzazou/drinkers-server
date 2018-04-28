// Application principale
// ======================

import createLogger from 'morgan'
import express from 'express'
import mongoose from 'mongoose'

import 'colors'

import createUserRoute from './routes/users/createUser'

mongoose.Promise = Promise

const app = express()

if (app.get('env') !== 'test') {
  app.use(createLogger(app.get('env') === 'development' ? 'dev' : 'combined'))
}

// Middlewares et routes applicatifs

app.use(createUserRoute)

export default app
