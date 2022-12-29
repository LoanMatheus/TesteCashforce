import IUser from '../interfaces/IUser'

export class UserService {
  public async login (user: IUser): Promise<any> {
    const data = { email: user.email, password: user.password }
    if (!data) {
      return {
        status: 404,
        error: { message: 'Invalid username or password' }
      }
    }
    return { status: 200, data }
  }
}
