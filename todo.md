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
