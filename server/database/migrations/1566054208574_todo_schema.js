'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up() {
    this.create('todos', table => {
      table.increments()
      table
        .integer('list_id')
        .unsigned()
        .references('id')
        .inTable('lists')
      table.string('description', 255)
      table.timestamps()
    })
  }

  down() {
    this.drop('todos')
  }
}

module.exports = TodoSchema
