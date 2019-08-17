'use strict'

const List = use('App/Models/List')
const AuthorizationProvider = use('App/Providers/AuthorizationProvider')

class ListController {
  /**
   * @return
   * Returns all list associated with a user
   */
  async index({ auth }) {
    const user = await auth.getUser()
    console.log(user)
    return {
      user_project: await user.lists().fetch(),
      loggedIn: user,
      message: 'Got User'
    }
  }

  /**
   * @create
   * A new list is created.
   * @returns it returns the list that has been created.
   */
  async create({ auth, request }) {
    const user = await auth.getUser()
    const { title } = request.all()
    const list = new List()
    list.fill({
      title
    })
    await user.lists().save(list)
    return {
      'User List': list
    }
  }
  /**
   * @function destroy
   * The function is called when the list needed to be deleted   .
   * @returns it returns the list that has been created.
   */
  async destroy({ auth, params }) {
    const user = await auth.getUser()
    const { id } = params
    const list = await List.find(id)
    AuthorizationProvider.verifyPermission(list, user)
    await list.delete()
    return list
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser()
    const { id } = params
    const list = await List.find(id)
    AuthorizationProvider.verifyPermission(list, user)
    list.merge(request.only('title'))
    await list.save()
    return list
  }
}

module.exports = ListController
