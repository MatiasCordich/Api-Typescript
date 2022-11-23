import { Response } from "express";

// Los utils son funciones para manejar ciertos eventos, como por ejemplo la funcion que se muestra que serve para mostrar un mesaje de error en caso que no funcione algo en nuestro controller

const handleError = (res: Response, error: string) => {
  res.status(500)
  res.send({msg: error})
}

export {handleError}