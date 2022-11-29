import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import db from './src/config/mongo'
import { router } from './src/routes'

const PORT = process.env.PORT || 8800

// Incializacion del server

const app = express()
app.use(cors())
app.use(express.json())

// Rutas

app.get('/', (req, res) => {
  res.send({msg: "Api funcionando"})
})

app.use(router)

// Conexion a la DB

db().then(
    () => console.log("Conectado a la DB")
)


// Incializar el servidor

app.listen(PORT, () => console.log(`Server conectado al puerto ${PORT}`))