// Este modulo nos sirve para crear y cargar nuestras rutas dinamicas

// Importamos los modulos necesarios para trabajar

import { Router } from "express";
import { readdirSync } from 'fs'

// Creamos una variable llamada PATH_ROUTER que va a contener un string, ese string contiene el __dirname

// El __dirname contiene el nombre del directorio actual

const PATH_ROUTER = `${__dirname}`

// Si hago un console.log de PATH_ROUTER me va a devolver lo siguiente

// C:\Users\User\Desktop\Backend\REST-API\src\routes

const router = Router()

// Esta funcion se va a encargar de limpiar el nombre del archivo para que le saque la extension. Ej: index.ts ---> index

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

// Vamos a utilizar la funcion readdirSync() y la pesamos como argumento la variable PATH_ROUTER, se va a encargar de leer cuantos archivos y cuales son los archivos que existen en el directorio, en este caso del direcotrio "routes"

readdirSync(PATH_ROUTER).filter((fileName) => {

    // Si hacemos un console.log de fileName nos va a devolver los archivos del directorio routes que son index.ts y item.ts

    const cleanName = cleanFileName(fileName)

    // Si le damos console.log a cleanName me va a devolver los nombres index y item con el .ts borrado

    // Creamos la condicion para que solo me duvuelva la palabra "item" 

    if (cleanName !== 'index') {

        // Hacemos la importacion dinamica, me va a devolver una promesa por lo que tengo que utilizar el .then para asi realizar la importacion. 

        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
        })  
    }
})

export { router }