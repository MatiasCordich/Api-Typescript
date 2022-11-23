/*
Vamos a crear dos funciones fundamentales
- Una funcion es para crear el token
- La otra es para verificar si el token existe o no y si 

*/

// Vamos a crear dos fu que me creen un token y me verifiquen si existe el token para saber si hay una sesion de algun usuario

import {sign, verify} from "jsonwebtoken"

// Primero vamos a pasar una constante que va a ser la firma secreta que vamos a necesitar para crear el token

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

// A la primera funcion le vamos a pasar com parametro el payload que va a ser el email del usuario que es de tipo string

const generateToken = async (email: string) => {

    // Para general el token tenemos que pasarle dos cosas: un payload y la constante JWT_SCRET, tambien podemos pasarle un tiempo de expiracion
    
    const jwt = sign({email}, JWT_SECRET,{ expiresIn: "2h"})

    return jwt
}

const verifyToken = async (token: string) => {

    // Creamos una constante que va a contener el payload del JWT a partir del metodo verify(), a este metodo le pasamos el token que le pasamos por parametro y la llave secreta

    const isVerified = verify(token, JWT_SECRET)

    return isVerified
}

export {generateToken, verifyToken}