import {Schema, Types, model, Model} from 'mongoose'
import { Ticket } from '../interfaces/ticket'


// A la hora de crear nuestro Schema, le teenos que pasar nuestra interfaz para que asi la tome como "molde", despeus creamos nuestro esquema con los tipos de datos.


const TicketSchema = new Schema<Ticket>(

    // La estructura del schema en base a la interfaz de Ticket, donde le decimos que tipo de dato es y si esa dato es requierido. 

    {
        nombre: {
            type: String, 
            required: true
        },
        apellido: {
            type: String, 
            required: true
        },
        tipo: {
            type: String,
            enum: ["simple", "normal", "VIP"],
            required: true
        },
        precio: {
            type: Number, 
            enum: [1500, 2500, 3500],
            required: true
        }
    },

    // El timestaps es la propiedad que nos sirve para que en nuestra informacion aparezaca la fecha y hora de creacion y de modificacion

    {
        timestamps:true,
        versionKey: false
    }
)

const TicketModel = model('tickets', TicketSchema)

export default TicketModel