
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
     const data = await prisma.repair.findMany()
     return res.status(200).json({
       message: "Data fetched successfully",
       data: data,
     });

  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching data",
      error: error,
    });
  }
};

//update

const updateRepair = async (req, res) => {
    try {
        const {id} = req.params
        const { product_name, price } = req.body;

        //get userid from middleware called authcheck
        const userId = req.user.id;

        const updateRepair  = await prisma.repair.update({
            where:{
                id:parseInt(id)
            },
            data:{
                product_name: product_name,
                price: parseInt(price),
                userId:userId

            }
        })

        return res.status(200).json({
            message: "Data updated successfully",
            data: updateRepair,
        });



        
    } catch (error) {
        return res.status(500).json({
            message: "Error while updating data",
            error: error,
        });
        
    }
}


const deleteRepair = async (req,res)=>{
       try {
        const {id} = req.params

        const  repairDelete = await prisma.repair.delete({
            where:{
                id: parseInt(id)
            }
        })
        
        return res.status(200).json({
            message: "Data deleted successfully",
            data: repairDelete,
        });

        
       } catch (error) {
        return res.status(500).json({
            message: "Error while deleting data",
            error: error,
        });
        
       }

}



//delete

module.exports = {
  repairCreate,
  repairRead,
  updateRepair,
  deleteRepair
};
