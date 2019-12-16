import { IProyecto } from './proyecto';
import { IUser } from './user';

export interface ITarea {
  id?: string;
  nombre?: string;
  descripcion?: string;
  alias?: string;
  estado?: string;
  eliminado?: string;
  fechaInicio?: string;
  fechaFin?: string;
  proyecto?: IProyecto;
  usuarioList?: IUser[];
}

export class Tarea implements ITarea {
  constructor(
    public id?: string,
    public nombre?: string,
    public descripcion?: string,
    public alias?: string,
    public estado?: string,
    public eliminado?: string,
    public fechaInicio?: string,
    public fechaFin?: string,
    public proyecto?: IProyecto,
    public usuarioList?: IUser[]
  ) {}
}
