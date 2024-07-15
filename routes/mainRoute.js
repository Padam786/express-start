
const authCheck = require('../middleware/authCheck');
const userRoute  = require('./userRoute')
const genraleRoute = require('./generalRoute')
const repairRoute = require("./repairRoute"

)
function groupRoutes(app) {
    app.use('/user', userRoute  )
    app.use('/', genraleRoute)
    app.use("/repair",repairRoute )
}


module.exports = groupRoutes;

