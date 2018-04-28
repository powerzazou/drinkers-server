import { Router } from 'express'

const router = new Router()

router.get('/user', (req, res) => {
  console.log(res.headersSent) // false
  res.send('OK')
  console.log(res.headersSent) // true
})

export default router
