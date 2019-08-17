'use strict'

const List = use('App/Models/List')
const Todo = use('App/Models/Todo')
const AuthorizationProvider = use('App/Providers/AuthorizationProvider')

class TodoController {
  /**
   * @function index
   * The function returns the index of todo associated with a user.
   */
  async index({ auth, params }) {
    const user = await auth.getUser()
    const { id } = params
    const list = await List.find(id)
    AuthorizationProvider.verifyPermission(list, user)
    return await list.todos().fetch()
  }

  /**
   * @function create
   * @returns todo
   * Create a todo associated with a user and linking to a list.
   */
  async create({ auth, request, params }) {
    const user = await auth.getUser()
    const { description } = request.all()
    const { id } = params
    const list = await List.find(id)
    AuthorizationProvider.verifyPermission(list, user)
    const todo = new Todo()
    todo.fill({
      description
    })
    await list.todos().save(todo)
    return {
      'New Todo': todo
    }
  }
}

module.exports = TodoController
