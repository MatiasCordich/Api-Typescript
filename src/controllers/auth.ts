// Contrladores para el login y el register

import { Request, Response } from "express"
import {registerNewUser, loginUser} from "../services/auth"
import { handleError } from "../utils/error"

const registerCtrl = async ({body}: Request, res: Response) => {

    try {
        const response = await registerNewUser(body)

        res.status(200).send({
            data: response
        })
    } catch (error) {
        handleError(res, 'ERROR_REGISTER_USER')
    }
  
}

const loginCtrl = async ({body}: Request, res: Response) => {
  
    try {

        const { email, password } = body

        const response = await loginUser({ email, password})

        if (response === "PASSWORD_INCORRECT") {
            res.status(403)
            res.send({
                msg: response
            })
        } else {
            res.status(200).send({
                data: response
            })
        }


    } catch (error) {
        handleError(res, 'ERROR_LOGIN_USER')
    }
}

export { registerCtrl, loginCtrl }