import IPeople from './IPeople'

export default interface IUser extends IPeople {
  email: string
  password: string
  role?: string
}
