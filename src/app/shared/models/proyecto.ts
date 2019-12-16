import { IUser } from './user';

export interface IProyecto {
  id?: string;
  nombre?: string;
  descripcion?: string;
  alias?: string;
  estado?: string;
  eliminado?: string;
  fechaInicio?: string;
  fechaFin?: string;
  usuarioList?: IUser[];
}

export class Proyecto implements IProyecto {
  constructor(
    public id?: string,
    public nombre?: string,
    public descripcion?: string,
    public alias?: string,
    public estado?: string,
    public eliminado?: string,
    public fechaInicio?: string,
    public fechaFin?: string,
    public usuarioList?: IUser[]
  ) {}
}
