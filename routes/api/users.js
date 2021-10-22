const express = require('express');

const router = express.Router()

const { users: ctrl } = require('../../controllers');

const { joiUserSchema } = require("../../models/user");
const { validation, controllerWrapper} = require("../../middlewares");

const UserValidationMiddleware = validation(joiUserSchema);

router.post('/feedback', UserValidationMiddleware, controllerWrapper(ctrl.feedback));

module.exports = router;
