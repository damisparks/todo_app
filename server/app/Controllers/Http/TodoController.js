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
    return todo
  }

  /**
   * @function destroy
   * delete Todo
   * @returns  returns the todo destroyed
   */
  async destroy({ auth, params }) {
    const user = await auth.getUser()
    const { id } = params
    const todo = await Todo.find(id)
    const list = await todo.list().fetch()
    AuthorizationProvider.verifyPermission(list, user)
    await todo.delete()
    return todo
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser()
    const { id } = params
    const todo = await Todo.find(id)
    const list = await todo.list().fetch()
    AuthorizationProvider.verifyPermission(list, user)
    todo.merge(request.only(['description', 'accomplished']))
    await todo.save()
    return todo
  }
}

module.exports = TodoController
