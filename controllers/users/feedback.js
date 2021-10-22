const { User } = require('../../models');

const feedback = async (req, res, _) => {
    const { name, email, message } = req.body;

    const user = await User.create({ name, email, message});

    res.status(201).json({
        User: {
            name: user.name,
            email: user.email,
            message: user.message
        }
    });
};

module.exports =  feedback ;