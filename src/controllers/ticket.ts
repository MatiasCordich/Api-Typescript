import { Request, Response } from "express"
import { deleteOneTicket, getAllTickets, getOneTicket, insertTicket, updateOneTicket,  } from "../services/ticket"
import { handleError } from "../utils/error"

const getTicket = async ({params}: Request, res: Response) => {
  
    try {

        const { id } = params

        const response = await getOneTicket(id)

        const data = response ? response : "NOT_FOUND"

        res.status(200).send({
            msg: data
        })

    } catch (error) {
        handleError(res, "ERROR_GET_TICKET")
    }
}

const getTickets = async (req: Request, res: Response) => {
  
    try {

        const response = await getAllTickets()

        res.status(200).send({
            data: response
        })
        
    } catch (error) {
        handleError(res, "ERROR_GET_TICKETS")
    }
}

const postTicket = async ({ body }: Request, res: Response) => {
   
    try {

        const response = await insertTicket(body)

        res.status(200).send({
            msg: "Se ha agregado correctamente",
            data: response
        })
    } catch (error) {
        handleError(res, "ERROR_POST_TICKET")    
    }
}

const updateTicket = async ({params, body}: Request, res: Response) => {
    
    try {
        
        const {id} = params

        const response = await updateOneTicket(id, body)

        res.status(200).send({
            msg: "Se ha modificado correctamente",
            data: response
        })

    } catch (error) {
        handleError(res, "ERROR_UPDATE_TICKET")    
    }
}

const deleteTicket = async ({params}: Request, res: Response) => {
   
    try {

        const {id} = params

        const response = await deleteOneTicket(id)

        res.status(200).send({
            msg: "Se ha eliminado correctamente",
        })
        
    } catch (error) {
        handleError(res, "ERROR_DELETE_TICKET")    
    }
}

export {getTicket, getTickets, postTicket, updateTicket, deleteTicket}