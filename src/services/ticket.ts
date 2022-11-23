import { Ticket } from "../interfaces/ticket"
import TicketModel from "../models/ticket"

// Los services son las funciones que realizan todas las acciones de nuestro CRUD, no es lo mismo que los controllers ya que en nuestra carpeta services se encuentran todas las reglas de negocios para nuestra app.

const insertTicket = async (ticket: Ticket) => {
  
    const responseInsert = await TicketModel.create(ticket)

    return responseInsert
}

const getAllTickets = async () => {
    
    const responseTickets = await TicketModel.find({})

    return responseTickets
}

const getOneTicket = async (id: string) => {
    
    const responseTicket = await TicketModel.findOne({_id : id})

    return responseTicket
}

const updateOneTicket = async (id: string, data: Ticket) => {
    
    const responseTicket = await TicketModel.findOneAndUpdate({_id : id}, data, { new: true})

    return responseTicket
}

const deleteOneTicket = async (id: string) => {
    
    const responseTicket = await TicketModel.findOneAndDelete({_id : id})

    return responseTicket
}

export {insertTicket, getAllTickets, getOneTicket, updateOneTicket, deleteOneTicket}