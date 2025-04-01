import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { FlightRoute } from './routes/flight.route'
import { configDotenv } from 'dotenv'
import { Timestamp } from 'typeorm'

const app = express()
app.use(cors())
app.use(morgan('tiny'))

app.use('/api/flight', FlightRoute)


app.use((req, res) => {
    res.status(404).json({
        message: 'NOT_FOUND',
        Timestamp: new Date()
    })
})

configDotenv()
const port = process.env.SERVER_PORT || 3002
app.listen(port, () => console.log(`app started on port ${port}`))