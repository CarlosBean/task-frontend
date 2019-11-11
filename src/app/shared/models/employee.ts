export interface IEmployee {
  id?:string;
  status?: number;
  email?: string
  name?: string;
  role?: number;
  dealershipId?: string;
  dealershipName?: string;
  firstName?: string;
  lastName?: string;
}

export class Employee implements IEmployee{
  constructor(
    public id?:string,
    public status?: number,
    public email?: string,
    public name?: string,
    public role?: number,
    public dealershipId?: string,
    public dealershipName?: string,
    public firstName?: string,
    public lastName?: string,
  ) {}
}
