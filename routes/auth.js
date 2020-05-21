const router = require('express').Router()
const User = require('../model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../model/Validation')

router.post('/register', async (req, res) => {
	//validation of the user inputs
	const { error } = registerValidation(req.body)
	if (error) return res.send('Error :' + error)

	//Checking email existence in the DB
	const emailExist = await User.findOne({
		email: req.body.email,
	})
	if (emailExist) return res.send('Email already exist')

	//Hash password
	const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT))
	const hashedPassword = await bcrypt.hash(req.body.password, salt)
	//Creating new user
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	})

	try {
		const savedUser = await user.save()
		res.send({ user: user._id })
	} catch (error) {
		res.status(400).send('Error : ' + error)
	}
})

router.post('/login', async (req, res) => {
	//validation of the user inputs
	const { error } = loginValidation(req.body)
	if (error) return res.send('Error :' + error)

	//Checking email existence in the DB
	const user = await User.findOne({
		email: req.body.email,
	})
	if (!user) return res.send('Email or password is wrong')

	//Check is the password is correct
	const validPassword = await bcrypt.compare(req.body.password, user.password)
	if (!validPassword) return res.send('Email or password is wrong')

	//Create and assign token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
	res.header('auth-token', token).send(token)
})

module.exports = router
