'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class InvalidAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }) {
    return response.status(403).json({
      error: 'You do not have access to view this resouce.'
    })
  }
}

module.exports = InvalidAccessException
