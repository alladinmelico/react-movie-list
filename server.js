const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Setting up connection
const uri = process.env.ATLAS_URI
mongoose.connect(process.env.MONGODB_URI || uri, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

//Checking connection
const connection = mongoose.connection
connection.once('open', () => {
	console.log('MongoDB connection established')
})

//ROUTES
const authRoutes = require('./routes/auth')
const postRoute = require('./routes/post.js')

//Routes middleware
app.use('/user', authRoutes)
app.use('/post', postRoute)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/movie-list/build'))
}

//Listener
app.listen(port, () => {
	console.log('Server is running in port ' + port)
})
