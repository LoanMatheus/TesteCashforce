import IPeople from '../interfaces/IPeople'

export default abstract class People {
  protected id?: number | string
  protected name: string
  protected birthday?: string
  protected cpf?: number
  protected genre?: string
  protected address?: string

  constructor (people: IPeople) {
    this.id = people.id
    this.name = people.name
    this.birthday = people.birthday
    this.cpf = people.cpf
    this.genre = people.genre
    this.address = people.address
  }

  public getId (): number | string | undefined { return this.id }
  public setId (id: number | string): Number | String { return (this.id = id) }

  public getName (): string | undefined { return this.name }
  public setName (name: string): String {
    return (this.name = name)
  }

  public getBirthday (): string | undefined { return this.birthday }
  public setBirthday (birthday: string): String {
    return (this.birthday = birthday)
  }

  public getCpf (): number | undefined { return this.cpf }
  public setCpf (cpf: number): Number {
    return (this.cpf = cpf)
  }

  public getGenre (): string | undefined { return this.genre }
  public setGenre (genre: string): String {
    return (this.genre = genre)
  }

  public getAdress (): string | undefined { return this.address }
  public setAdress (address: string): String {
    return (this.address = address)
  }
}
