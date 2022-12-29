import { Request, Response } from 'express'
import { UserService } from '../services/userService'

export default class UserController {
  private readonly req: Request
  private readonly res: Response
  private readonly service: UserService

  constructor (req: Request, res: Response) {
    this.req = req
    this.res = res
    this.service = new UserService()
  }

  public async login (): Promise<Response> {
    /* const { email, password } = this.req.body */
    const { status, data, error } = await this.service.login(this.req.body)
    return error
      ? this.res.status(status).json(error)
      : this.res.status(status).json(data)
  }
}
