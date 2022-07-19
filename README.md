# DashboardCube
Step 1-> Initially load the database into MongoDB Compass.

Step 2->To acess the data in the MongoDB Compass, we need to connect the compass to MongoDB BI Connector.
In cmd go to the mongo location and enter into the bin and type mongo( For connecting mongo)
In a new cmd enter mongosqld (to connect BI connector)

Step3 ->Setting up the Backend
We are using the express application generator to get the application skeleton <br>
$ npm install express-generator -g


Next, create a new express app with the view engine set to Handlebars(hbs)<br>
$ express --view=hbs DashboardCube

We’re going to use an open source framework, Cube.js as our analytical backend. It generates and executes SQL queries, as well as provides caching, data pre-aggregation, security, and API to query results and build visualizations.<br>
Cube.js can be easily embedded into an Express application. Let’s add it to our project dependencies.<br>
$ npm install --save @cubejs-backend/server-core @cubejs-backend/mongobi-driver dotenv <br>
By the above command we have added a core server package for Cube.js and the Cube.js MongoBI driver.<br>

Create a .env file with the following credentials for connecting to Mongo<br>
CUBEJS_DB_HOST=localhost <br>
CUBEJS_DB_NAME=\Database Name\ <br>
CUBEJS_DB_PORT=3307\Default Port Number\ <br>
CUBEJS_DB_TYPE=mongobi <br>
CUBEJS_API_SECRET=SECRET <br>

For More info regarding configuration->https://cube.dev/docs/reference/environment-variables#environment-variables

