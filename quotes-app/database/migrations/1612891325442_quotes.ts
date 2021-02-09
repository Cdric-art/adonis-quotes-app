import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quotes extends BaseSchema {
  protected tableName = 'quotes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('userId').notNullable()
      table.string('body').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
