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

  async destroy({ auth, request, params }) {
    const user = await auth.getUser()
    const { id } = params
    const list = await List.find(id)
    AuthorizationProvider.verifyPermission(list, user)
    await list.delete()
    return list
  }
}

module.exports = ListController
