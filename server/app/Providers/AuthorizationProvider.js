const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use(
  'App/Exceptions/ResourceNotExistException'
)

class AuthorizationProvider {
  verifyPermission(resource, user) {
    if (!resource) {
      throw new ResourceNotExistException()
    }

    if (resource.user_id !== user.id) {
      console.log('Invalid Access')
      throw new InvalidAccessException() // todo: invalidaccess exception
    }
  }
}

module.exports = new AuthorizationProvider()
