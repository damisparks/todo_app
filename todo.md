# Todo App Development Plan

## Server

- [x] install `adonis` cli globally
- [x] create a server folder to handle all backend files.
- [x] reate an api only project using `adonis.js` framework.
- [x] install all dependency
- [x] install `mysql` as the database.
- [x] create a UserController
- [x] create register function
- [x] make use of the register function on the `routes.js` file
- [x] run the migration
- [x] create a login function
- [x] use login function on the `routes.js` file.
- [x] create a List (_could be called **Project**_) include migration
- [x] create a `index` function to get the project associated with a user.
- [x] create `create` function to handle the creation of list.
- [x] create `destroy` function to handle the deletion of list associated with a certain user.
- [x] create Provider folder to handle error
- [x] create an Exception called `InValidAccess` inside the Exception folder using the adonis cli _using the help_`adonis --help`
- [x] add `update` endpoint for updating the list
- [x] create a new model for the `Todos`
- [x] create the `todo` to `list` association
- [x] create `index` endpoint endpoint for the `todo`
- [x] create `create` endpoint endpoint for the `todo`
- [x] create `update` endpoint endpoint for the `todo`
- [x] create `destroy` endpoint endpoint for the `todo`
- [x] add `accomplished` as a bolean to the `todo` table

## Client

- [x] update `vue cli`
- [x] create a project `client` using `vue create <name>` _name here is **client**_
- [x] also add the following dependency using `npm install axios lodash vuetify vuex-persistedstate`
- [x] create `plugins` folder to handle client plugins.
- [x] create `vuetify.js` to handle the easy modification of the package.
- [x] add the link to load the `material-icon` logo.
- [x] create a `Toolbar` component to handle the navigation bar.
- [x] add a `Register` component and add some basic theming
- [x] add an `authenticate.js` to handle the authetication and store of the registered user
- [x] enable cors to allow cross origin request.
- [x] create a service folder to house `http.js` file to make use of the axios modules.
- [x] create functions that is used to handle request to our endpoint.
- [x] add the html markup for the `login` components. 
- [x] add computed properties and methods for the login to communicate with the login endpoint and database.
- [x] create a `ListView` component to house creation of the list. 
- [x] create `List` view to house the `ListView`
- [x] add the `html` markup for the `ListView` and `List`
- [x] implement creating a `List` and sending the response to the backend. 
- [x] implement `editing` of the list and sending the response to the backend.
- [x] persist data by sending the `actions` to the `mutations`
- [x] add `autofocus` when editing the `list title`
- [x] refactor List.vue by creating `CreateRecord.vue`
- [x] create another `CanEditRecord.vue` to house _editing, save, deleting logics particular to that component_
- [x] Create a `Todo.vue` component to handle the todos 
- [x] implement the same logics from the `CanEditRecord.vue` and `CreateRecord.vue`. 
- [x] create a `todos.js` file to handle the `store, mutations, actions` then render then on the `CanEditRecord.vue` and `CreateRecord.vue`. 

## TODO : 
- [ ] clean the UI
- [ ] Redesign the DashBoard  
- [ ] implement a `User Profile` for each `List` and `Todo`.
- [ ] 