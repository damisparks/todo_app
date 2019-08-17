'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class List extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  todos() {
    return this.hasMany('App/Models/Todo')
  }
}

module.exports = List
