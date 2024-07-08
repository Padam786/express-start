
const authCheck = require('../middleware/authCheck');
const userRoute  = require('./userRoute')
const genraleRoute = require('./generalRoute')
function groupRoutes(app) {
    app.use('/user', userRoute  )
    app.use('/', genraleRoute)
}


module.exports = groupRoutes;

