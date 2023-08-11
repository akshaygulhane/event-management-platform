import 'dotenv/config'
import express from 'express'
import {initialize} from './configs/database'
import eventRouter from './routes/event.routes'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())

app.use('/api/v1/events', eventRouter)

app.listen(PORT, () => {
  initialize()
  console.log(`server listening on port ${PORT} origin ${process.env.ORIGIN1}`)
})
