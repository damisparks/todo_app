'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('auth/register', 'UserController.register')
Route.post('auth/login', 'UserController.login')
Route.get('lists', 'ListController.index').middleware('auth')
Route.post('lists', 'ListController.create').middleware('auth')
Route.delete('lists/:id', 'ListController.destroy').middleware('auth')
Route.patch('lists/:id', 'ListController.update').middleware('auth')
Route.get('lists/:id/todos', 'TodoController.index').middleware('auth')
Route.post('lists/:id/todos', 'TodoController.create').middleware('auth')
Route.delete('todos/:id', 'TodoController.destroy').middleware('auth')
Route.patch('todos/:id', 'TodoController.update').middleware('auth')
