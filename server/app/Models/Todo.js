'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Todo extends Model {
  list() {
    return this.belongsTo('App/Models/List')
  }
}

module.exports = Todo
