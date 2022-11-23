import { Router, Request, Response } from "express";
import { deleteTicket, getTicket, getTickets, postTicket, updateTicket } from "../controllers/ticket";
import { checkJwt } from "../middlewares/session";

const router = Router()

router.get('/', checkJwt, getTickets)

router.get('/:id', checkJwt, getTicket )

router.post('/', postTicket )

router.put('/:id', updateTicket )

router.delete('/:id', deleteTicket )

export { router }