class AuthorizationProvider {
  verifyPermission(resource, user) {
    if (resource.user_id !== user.id) {
      console.log('Invalid Access')
      throw new Error() // todo: invalidaccess exception
    }
  }
}

module.exports = new AuthorizationProvider()
