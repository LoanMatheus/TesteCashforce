import { NextFunction, Request, Response } from 'express'

const reqFields = (body: string[], fields: string[]): Boolean => {
  return body.every(field => fields.includes(field))
}
export default class Validates {
  async login (req: Request, res: Response, next: NextFunction): Promise< Response | NextFunction | void > {
    const fields = ['email', 'password']
    const checkFields = reqFields(Object.keys(req.body), fields)
    if (!checkFields) {
      return res.status(400).json({ message: 'Campos Faltando' })
    }

    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'Todos os Campos devem ser preenchidos' })
    }

    return next()
  }

  async register (req: Request, res: Response, next: NextFunction): Promise<Response | NextFunction | void> {
    const fields = [
      'name',
      'birthday',
      'cpf',
      'genre',
      'address'
    ]
    const checkFields = reqFields(Object.keys(req.body), fields)
    if (!checkFields) {
      return res.status(400).json({ message: 'Campos Faltando' })
    }

    const { name, birthday, cpf, genre, address } = req.body
    if (!name || !birthday || !cpf || !genre || !address) {
      return res.status(400).json({ message: 'Todos os Campos devem ser preenchidos' })
    }

    return next()
  }
}
