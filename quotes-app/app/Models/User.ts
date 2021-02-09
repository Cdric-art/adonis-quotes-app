import {DateTime} from 'luxon'
import {BaseModel, column, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Quote from "App/Models/Quote";
import {HasMany} from "@ioc:Adonis/Lucid/Relations";

export default class User extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public username: string

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @hasMany(() => Quote)
  public quotes: HasMany<typeof Quote>
}
