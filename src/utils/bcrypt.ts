/*

Vamos a crear dos funciones que nos van a servir para:
- Encriptar la contraseña
- Verificar que la contraseña que llega en formato de texto plano coincida con la contraseña encriptada

*/

import { hash, compare} from "bcrypt"

const encrypt = async (pass: string) => {

    // Creamos la constante hashedPassword que va contener nuestra contraseña hasheada

    // Para hashear nuestra constraseña utilizamos el método hash(), le tenemos que pasar dos parametros

    // la password que es un string plano
    // el salt que es un numero que, dependiendo del numero, puede ser mas complicado o no el encriptado
  
    const hashedPassword = await hash(pass, 8)

    // Retornamos la constante

    return hashedPassword
}

const verified = async (pass: string, passHashed: string) => {

    // Creamos la constante isCorrect que va a contener un valor booleano

    // Para comparar contraseñas utilizamos el método compare(), le tenemos que pasar dos parametros

    // la password que es un string plano
    // la password hasheada que es la password que tenemos en nuestra DB
  
    const isCorrect = await compare(pass, passHashed)

    // Si es true significa que son iguales, sino devuelve un false

    return isCorrect
}

export { encrypt, verified }