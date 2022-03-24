

const getAllUsers = (req,res) =>{
    res.status(200).json({messege:"All Users"})
}

const getSingleUser = (req,res) => {
    res.status(200).json({User: `User is ${req.params.id}`})
}


module.exports = {getAllUsers, getSingleUser}