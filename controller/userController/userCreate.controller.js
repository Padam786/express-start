const createUser = async (req, res) => {
  try {
    //create User Homework
    const {} = req.body;
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = createUser;
