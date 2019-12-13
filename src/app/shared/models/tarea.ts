export interface ITarea {
  id?: string;
  nombre?: string;
  descripcion?:string;
  alias?:string;
  estado?:string;
  eliminado?:string;
  fechaInicio?:string;
  fechaFin?:string;
}

export class Tarea implements ITarea {
  constructor(
    public id?: string,
    public nombre?: string,
    public descripcion?:string,
    public alias?:string,
    public estado?:string,
    public eliminado?:string,
    public fechaInicio?:string,
    public fechaFin?:string,
  ) {}
}
