
const prisma = require("../../config/prisma");

const repairCreate = async (req, res) => {
  try {

    const { product_name, price } = req.body;  // get data from cilent with field
    
    const userid = req.user.id;

    if (!userid) {
      return res.status(404).json({
        nessage: "User Id not found",
      });
    }

    const saveData = await prisma.repair.create({
      data: {
        product_name: product_name,
        price: parseInt(price),
        userId: parseInt(userid),
      },
    });

    return res.status(200).json({
      message: "Data saved successfully",
      data: saveData,
    });
  } catch (error) {
    return res.status(500).json({
        message: "Error while saving data",
        error: error,
    })
  }
};

//read

const repairRead = async (req, res) => {
  try {
    
  } catch (error) {}
};

//update

//delete

module.exports = {
  repairCreate,
  repairRead,
};
