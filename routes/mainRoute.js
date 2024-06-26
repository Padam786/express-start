
const userRoute  = require('./userRoute')

function groupRoutes(app) {
    app.use('/user', userRoute  )
}


module.exports = groupRoutes;

