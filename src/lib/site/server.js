import express from 'express'
import cors from 'cors'
const Axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api', async (req, res) => {
  const result = await Axios.get(req.body.url)
  res.json({
    code: 1,
    info: result.data
  })
})

app.listen(44444)
