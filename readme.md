# Build a Full Stack App: CRUD todo

We'll be using:
* postgres for our database
* knex.js for our database migrations, seeds and queries.
* express.js for our routes and rendering
* handlebars.js for our server side view templates
* boostrap for our UI

## Full Stack Check List
* [x] Generate Express App
  * mkdir server && cd server
  * express --git --hbs
  * npm i
  * npm start
  * /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --explicitly-allowed-ports=5000,6000,7000
  
* [x] Create database/table
  * npm install knex pg -g
  * createdb db_name
  * knex migrate:make xxx
  * knex init
  * update the knexfile.js
  * knex migrate:latest
  
* [x] Seed table with sample data
 * knex seed:make add_user_data
 * knex seed:run

* [x] List all records with GET /todo
  * update app.js by adding route for new page
  * add new route page in route folder

* [x] Add Bootstrap
* [x] Show new form with /todo/new
* [x] Create a record with POST /todo
* [x] Show one record with GET /todo/:id
* [x] Show an edit form with GET /todo/:id/edit
* [x] Update a record with PUT /todo/:id
* [x] Delete a record with DELETE /todo/:id
* [x] Redirect on create / update / delete