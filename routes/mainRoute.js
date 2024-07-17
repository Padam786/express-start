
const authCheck = require('../middleware/authCheck');
const userRoute  = require('./userRoute')
const genraleRoute = require('./generalRoute')
const repairRoute = require("./repairRoute"

)
function groupRoutes(app) {
    app.use('/user', userRoute  )
    app.use("/repair",repairRoute )
    app.use('/', genraleRoute)

}


module.exports = groupRoutes;

