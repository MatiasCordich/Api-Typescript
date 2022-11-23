// Las interfaz es la estructura de nuestra informacion que vamos a utilizar para despues crear nuestro Schema con mongoose. 

export interface Ticket {
    nombre: string,
    apellido: string,
    tipo: "simple" | "normal" | "VIP",
    precio: 1500 | 2500 | 3500
}