import { Estado } from "./estado.enum";

export interface Alumno {
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    correo: string,
    matriculado: Estado,
    activo: boolean,
  
  }