export interface IVehicle {
  id: string;
  status:string;
  year:string;
  make:string;
  model:string;
  modelDetails:string;
  audioURL:string;
  images: Array<string>;
}

export class Vehicle implements IVehicle {
  constructor(
    public id: string,
    public status:string,
    public year:string,
    public make:string,
    public model:string,
    public modelDetails:string,
    public audioURL:string,
    public images: Array<string>,
  ) {}
}