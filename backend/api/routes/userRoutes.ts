import { Router } from 'express'
import Validates from '../middlewares/Validates'
import UserController from '../controllers/userController'

const router = Router()
const validates = new Validates()

router
  .route('/login')
  .post(
    validates.login,
    (req, res) => new UserController(req, res).login()
  )

router
  .route('/register')
  .post(
    validates.register,
    (req, res) => res.status(200).json(req.body)
  )

export { router as userRouter }
