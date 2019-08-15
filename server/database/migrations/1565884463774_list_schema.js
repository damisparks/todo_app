'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListSchema extends Schema {
  up() {
    this.create('lists', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.string('title', 255)
      table.timestamps()
    })
  }

  down() {
    this.drop('lists')
  }
}

module.exports = ListSchema
