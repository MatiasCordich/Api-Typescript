/* 
Un middleware es una funcion que se encuentra entre las rutas y el controlador, nos puede servir como por ejemplo: 
- Un login para saber que peticiones se estan realizando a nuestra API
- Proteger rutas que solamente se accedan por medio de un token
- Proteger rutas por roles
- Cualquier otra funcion que sea necesaria

Ademas de un request y un response, el middleware tiene tambien un next, este me sirve para indicar que una vez ejecutado el middleware pueda continuar con la ejecucion de los controladores

El middleware que vamos a hacer se va a encargar de ver si hay una sesion activa mediante la verificacion del token

*/



import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt"

const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  
    try {

        // Obtenemos el token mediante los headers

        const jwtByUser = req.headers.authorization || ' '

        // Si hay un token nos va a devolver "Bearer 2434234234234" para eso tenemos que limpiarlo para obtener solo el codigo del token

        const token = jwtByUser.split(' ').pop() // Aca nos devuelve esto ['Bearer', '2434234234234'] con el metodo .pop() nos devuelve el ultimo elemento del array


        // Esta constante nos retorna el payload

        const isUser = await verifyToken(`${token}`)

        if(!isUser){
            res.status(501)
            res.send({
                msg: "JWT_INVALID"
            })
        } else {
            next()
        }       

    } catch (error) {
        res.status(400)
        res.send({msg: "INVALID_SESSION"})
    }
}

export{checkJwt}
