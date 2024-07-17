Beginner-Friendly Steps for Creating a Backend with Express

1) Initialize npm with npm init.

2) Create an index.js file.

3) Install Express using npm i express.

4) Set up the server.

5) Create main and sub routes.

6) Define functions for sub-routes.

7) Install nodemon with npm i nodemon for automatic server reloading.

8) Create a Controller file and define functions within it.

9) Install Prisma and follow the documentation:

   a) Install Prisma: npm install prisma --save-dev.
   b) Initialize Prisma with SQLite: npx prisma init --datasource-provider SQLite.
   c)    Define models below the datasource DB.
   d) Generate a migration using: npx prisma migrate dev --name init.

10) Create a config folder and a prisma.js file.

11) Install Prisma Client: npm i @prisma/client.

12) Add middleware to support JSON and URL-encoded data in index.js:

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


File Structure:

a) Config: Configuration and setting files.
b) Controller: Callback and logical functions.
c) Middleware: Middleware functions.
d) Routes: Route definitions.
e) Storage: Static storage for files (images, videos, etc.).
f) index.js: Entry point of the application.
g) package.json: Metadata, packages, and scripts.
h) .env: Environment variables.

Optional Folders:

a) Helper: Reusable helper functions.
b) Utils: Utility functions.
c) Model: Database models.
