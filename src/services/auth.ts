import { Auth } from "../interfaces/auth"
import { User } from "../interfaces/user"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt"
import { generateToken } from "../utils/jwt"

const registerNewUser = async ({email, password, name, surname}: User) => {


    // Primero validamos si el usuario a registrar, existe o no en base al email que tiene que ser unico

    const isExist = await UserModel.findOne({ email})

    // Si existen que nos devuelva lo siguiente
  
    if(isExist) return "USER_ALREADY_EXISTS"

    // Si no existe procedemos a registrarlo en la DB

    // Antes de crearlo vamos a encriptar la constraseña

    const passwordHash = await encrypt(password)

    const newUser = await UserModel.create({
        email,
        surname, 
        password: passwordHash,
        name
    })
 
    // Una vez creado retornamos el usuario creado

    return newUser

}

const loginUser = async ({email, password}: Auth) => {

    // Primero verificamos si el usuario existe mediante una constante booleana
  
    const isExist = await UserModel.findOne({ email})

    // En este caso vamos por el false
  
    if(!isExist) return "NOT_FOUND_USER"

    // Vamos a chequear la contraseña

    // Primero vamos a obtener la contraseña hasheada

    const passwordHashed = isExist.password

    // Vamos a verificar si la password hasheada es igual a la password que pasan por parametro, nos puede devolver un true o un false

    const isCorrect = await verified(password, passwordHashed)

    if(!isCorrect) return "PASSWORD_INCORRECT"

    // Generamos el token

    const token = await generateToken(isExist.email)

    // Generamos la informacion necesaria

    const data = {
        token,
        user: isExist
    }

    // Retornamos la data

    return data
    
}

export {registerNewUser, loginUser}