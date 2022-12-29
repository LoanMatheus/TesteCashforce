import IUser from '../interfaces/IUser'
import People from './PeopleDomain'

export default class User extends People {
  private email: string
  private password: string
  private role: string

  constructor (user: IUser) {
    super(user)
    this.email = user.email
    this.password = user.password
    this.role = user.role || 'user'
  }

  public getEmail (): string { return this.email }
  public setEmail (email: string): String { return (this.email = email) }

  public getPassword (): string { return this.password }
  public setPassword (password: string): String { return (this.password = password) }

  public getRole (): string { return this.role }
  public setRole (role: string): String { return (this.role = role) }
}
