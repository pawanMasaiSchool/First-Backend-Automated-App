const { getAllUsers, getSingleUser } = require('../controllers/user.controller');

const router = require('express').Router();

router.get("/", getAllUsers);

router.get("/:id",getSingleUser);


module.exports = router