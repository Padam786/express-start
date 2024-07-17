
const prisma = require("../../config/prisma")

const getUser = async (req, res) =>{
    try {
        const getUser = await prisma.user.findMany({});
        return res.status(200).json({
            message: "get user successfully",
            data: getUser,
        });
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "get user failed",
            error: error,
        });
        
    }
}

module.exports =getUser