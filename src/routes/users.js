import { Router } from 'express'
import createUserController from '../controllers/users/createUserController'
import getUserController from '../controllers/users/getUserController'
import getAllUsersController from '../controllers/users/getAllUsersController'

const router = new Router()

router.post('/users', (req, res) => {
  createUserController(req, res)
})

router.get('/users', (req, res) => {
  getAllUsersController(req, res)
})

router.get('/users/:id', (req, res) => {
  getUserController(req, res)
})

export default router
