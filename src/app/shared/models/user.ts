export interface IUser {
  id?: string;
  cedula?: string;
  nombre?: string;
  email?: string;
  password?: string;
  estado?: boolean;
  eliminado?: boolean;
  rolList?: any[];
}

export class User implements IUser {
  constructor(
    public id?: string,
    public cedula?: string,
    public nombre?: string,
    public email?: string,
    public password?: string,
    public estado?: boolean,
    public eliminado?: boolean,
    public rolList?: any[]
  ) {}
}
