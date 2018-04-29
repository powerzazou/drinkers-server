// Application principale
// ======================

import createLogger from 'morgan'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import 'colors'

import Users from './routes/users'

mongoose.Promise = Promise

const app = express()

if (app.get('env') !== 'test') {
  app.use(createLogger(app.get('env') === 'development' ? 'dev' : 'combined'))
}

// Allow CORS
const allowCrossDomainMiddleware = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
}
app.use(allowCrossDomainMiddleware)

// Middlewares et routes applicatifs
app.use(bodyParser.urlencoded({ extended: true }))
app.use(Users)

export default app
