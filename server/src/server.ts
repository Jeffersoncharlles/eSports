import express from 'express'
import cors from 'cors'
import { Routes } from './routes/index'


const PORT = process.env.PORT_URL || 3333

const app = express()
app.use(express.json())
app.use(cors())
app.use(Routes)

app.listen(PORT, () => console.log(`🚀 listen port: ${PORT}`))
