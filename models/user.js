const { Schema, model } = require("mongoose")
const Joi = require("joi");

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },    
}, { versionKey: false, timestamps: true });

const joiUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    message: Joi.string().required(),
   
});

const User = model("user", userSchema);

module.exports = {
    User,
    joiUserSchema
}