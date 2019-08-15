'use strict'

const User = use('App/Models/User')

class UserController {
  async register({ request }) {
    const { email, password } = request.all()
    const user = await User.create({
      email,
      password,
      username: email
    })
    return user
  }

  async login({ auth, request }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)

    return {
      message: 'Login was successful',
      token
    }
  }
}

module.exports = UserController
