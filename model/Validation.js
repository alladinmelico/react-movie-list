const Joi = require('@hapi/joi')

const registerValidation = (data) => {
	const userValidationSchema = Joi.object({
		username: Joi.string().min(4).max(255).required(),
		email: Joi.string().min(6).max(255).email().required(),
		password: Joi.string().min(6).max(1024).required(),
	})
	return userValidationSchema.validate(data)
}
const loginValidation = (data) => {
	const userValidationSchema = Joi.object({
		email: Joi.string().min(6).max(255).email().required(),
		password: Joi.string().min(6).max(1024).required(),
	})
	return userValidationSchema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
