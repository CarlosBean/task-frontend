export interface IDealership {
  id?:string;
  status?: number;
  name?: string;
  cantEmployees?: number;
  plan?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  manufacturers?: number[];
}

export class Dealership implements IDealership{
  constructor(
    public id?:string,
    public status?: number,
    public name?: string,
    public cantEmployees?: number,
    public plan?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public zipCode?: string,
    public manufacturers?: number[]
  ){}
}