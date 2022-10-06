const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const { readdirSync } = require('fs')

// Load environment variables
dotenv.config()
app.use(express.json()) // Parse JSON bodies
app.use(cors())
//   {
//     origin: '',
//     optionsSuccessStatus: 200,
//   }

// Added All Routes
readdirSync('./Routes').map((r) => app.use('/', require('./Routes/' + r)))

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () =>
  console.log(`Server is Running on port http://localhost:${port}`)
)
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) =>
    console.log({
      message: 'MongoDB Connection Failed',
      error: err.message,
    })
  )
