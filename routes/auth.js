const router = require('express').Router()
const User = require('../model/UserModel')

//Validation
const Joi = require('@hapi/joi')

const userValidationSchema = Joi.object({
	username: Joi.string().min(4).max(255).required(),
	email: Joi.string().min(6).max(255).email().required(),
	username: Joi.string().min(6).max(1024).required(),
})

router.post('/register', async (req, res) => {
	const { error } = await userValidationSchema.validateAsync(req.body)
	if (error) return res.send(400).send(error)

	res.send(error.details[0].message)
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	})

	try {
		const savedUser = await user.save()
		res.send(savedUser)
	} catch (error) {
		res.status(400).send('Error : ' + error)
	}
})

module.exports = router
