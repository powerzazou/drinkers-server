import { Router } from 'express'
import createUserController from '../controllers/users/createUserController'
import getUserController from '../controllers/users/getUserController'
import getAllUsersController from '../controllers/users/getAllUsersController'
import patchUserController from '../controllers/users/patchUserController'
import deleteUserController from '../controllers/users/deleteUserController'

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
router.patch('/users/:id', (req, res) => {
  patchUserController(req, res)
})
router.delete('/users/:id', (req, res) => {
  deleteUserController(req, res)
})

export default router
