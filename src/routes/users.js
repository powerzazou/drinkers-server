import { Router } from 'express'
import createUserController from '../controllers/users/createUserController'

const router = new Router()

router.post('/users', (req, res) => {
  createUserController(req, res)
})

export default router
