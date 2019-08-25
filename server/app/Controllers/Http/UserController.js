'use strict'

const User = use('App/Models/User')

class UserController {
  async register({ request }) {
    const { email, password } = request.all()
    await User.create({
      email,
      password,
      username: email
    })
    return this.login(...arguments)
  }

  async login({ auth, request }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = UserController
